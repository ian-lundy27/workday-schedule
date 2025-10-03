import { Days, Rules, Timezone } from "./enums";
import { parseFile } from "./test";
/**
 * Over-engineered nonsense to generate a uid
 * @returns
 */
function generateUid() {
    let longUidString = "";
    for (let i = 0; i < 3; i++)
        longUidString += Math.random().toString(16).substring(2);
    return longUidString.substring(0, 8) + "-" +
        longUidString.substring(8, 12) + "-" +
        longUidString.substring(12, 16) + "-" +
        longUidString.substring(16, 20) + "-" +
        longUidString.substring(20, 32);
}
function eventToString(event) {
    let retString = "BEGIN:VEVENT\n";
    let hasUid = false;
    for (const rule of event) {
        if (rule.key == Rules.UID) {
            hasUid = true;
        }
        else if (rule.key == Rules.STARTTIME || rule.key == Rules.ENDTIME) {
            retString += rule.val + "\n";
            continue;
        }
        retString += rule.key + ":" + rule.val + "\n";
    }
    if (!hasUid)
        retString += Rules.UID + ":" + generateUid() + "\n";
    return retString + "END:VEVENT";
}
function calendarToString(cal) {
    if (cal.length === 0)
        throw new Error("Empty calendar object (no events read from file)");
    let retString = "BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:ian-lundy27.github.io/workday-ics\n";
    for (const event of cal) {
        retString += eventToString(event) + "\n";
    }
    return retString + "END:VCALENDAR";
}
function createRule(type, val) {
    return {
        key: type,
        val: val
    };
}
/**
 * @param params ics params for rrule
 * @returns valid val string for an rrule rule type
 */
function buildRRuleValString(params) {
    let arr = [];
    Object.keys(params).forEach((param) => {
        arr.push(param + "=" + params[param]);
    });
    return arr.join(";");
}
/**
 * @param s complete date and time timestamp
 * @returns ics representation of timestamp if timestamp is complete or null if not complete
 */
function timestampToString(s) {
    if (!isValidDate(s) || !isValidTime(s)) {
        throw new Error("Attempted to convert incomplete timestamp into a string");
    }
    return s.year + s.month + s.day + "T" + s.hour + s.minute + s.second + "Z";
}
function isoToTimestamp(stamp) {
    let vals = stamp.split(/[-:.TZ]/);
    return {
        year: vals[0],
        month: vals[1],
        day: vals[2],
        hour: vals[3],
        minute: vals[4],
        second: vals[5]
    };
}
/**
 * @param text
 * @returns whether given text can be converted to an array of enums
 */
function isMeetingDays(text) {
    let chars = new Set(["M", "T", "W", "R", "F"]);
    for (const char of text) {
        if (!chars.has(char))
            return false;
    }
    return true;
}
/**
 * @param text containing some of MTWRF
 * @returns array of corresponding enums
 */
function meetingDaysToEnum(text) {
    let days = [];
    for (const char of text) {
        switch (char) {
            case "M":
                days.push(Days.MONDAY);
                break;
            case "T":
                days.push(Days.TUESDAY);
                break;
            case "W":
                days.push(Days.WEDNESDAY);
                break;
            case "R":
                days.push(Days.THURSDAY);
                break;
            case "F":
                days.push(Days.FRIDAY);
                break;
        }
    }
    return days;
}
/**
 * @param text human readable time like 4:00 PM, must have space btwn time and AM/PM
 * @returns either a valid time timestamp or empty object
 */
function amPmToTimestamp(text) {
    let pm = text.includes("PM");
    if (text.includes(":") && (text.includes(" AM") || text.includes(" PM"))) {
        let arr = text.split(" ")[0].split(":");
        let hour = Number.parseInt(arr[0]);
        if (hour == 12 && !pm) {
            hour = 0;
        }
        else if (pm && hour != 12) {
            hour += 12;
        }
        let minute = arr[1];
        return {
            hour: hour.toString().padStart(2, "0"),
            minute: minute.padStart(2, "0"),
            second: "00"
        };
    }
    return {};
}
/**
 * @param time any timestamp
 * @returns true if timestamp has hour, minute, and second props, false otherwise
 */
function isValidDate(date) {
    return typeof date.year == "string" && typeof date.month == "string" && typeof date.day == "string";
}
/**
 * @param time any timestamp
 * @returns true if timestamp has hour, minute, and second props, false otherwise
 */
function isValidTime(time) {
    return typeof time.hour == "string" && typeof time.minute == "string" && typeof time.second == "string";
}
/**
 * @param text a string of | separated string, which is one line of the meeting pattern cell
 * @returns either a valid meeting pattern or null
 */
function parseMeetingCellBlock(text) {
    let pattern = {
        days: [],
        start: {},
        end: {},
        room: ""
    };
    for (let block of text.split("|")) {
        block = block.trim();
        if (isMeetingDays(block)) {
            pattern.days = meetingDaysToEnum(block);
        }
        else if (block.includes("/")) {
            continue; // skip block if it includes a date
        }
        else if (block.includes(" - ")) {
            let times = block.split(" - ");
            if (times.length == 2) {
                pattern.start = amPmToTimestamp(times[0].trim());
                pattern.end = amPmToTimestamp(times[1].trim());
            }
        }
        else {
            pattern.room = block;
        }
    }
    if (!(pattern.days.length > 0 && isValidTime(pattern.start) && isValidTime(pattern.end) && pattern.room.length > 0)) {
        throw new Error("Failed to parse meeting pattern cell");
    }
    return pattern;
}
/**
 * @param text the entire content of the meeting pattern cell
 * @returns an array of valid meeting patterns for the class
 */
function parseMeetingCell(text) {
    let patterns = [];
    for (let block of text.split("\n")) {
        if (block.trim()) {
            let pattern = parseMeetingCellBlock(block);
            patterns.push(pattern);
        }
    }
    return patterns;
}
function patternToRRuleParams(pattern, end) {
    return {
        FREQ: "WEEKLY",
        INTERVAL: "1",
        UNTIL: timestampToString(isoToTimestamp(end)),
        BYDAY: pattern.days.join(",")
    };
}
function combineDateTime(date, time) {
    return {
        year: date.year,
        month: date.month,
        day: date.day,
        hour: time.hour,
        minute: time.minute,
        second: time.second
    };
}
function icsDateTime(type, timestamp, endpoint, timezone) {
    return type + ";TZID=" + timezone + ":" +
        timestampToString(combineDateTime(isoToTimestamp(timestamp), endpoint));
}
function reqInfoToEvent(info, timezone) {
    let events = [];
    let patterns = parseMeetingCell(info.patterns);
    for (const pattern of patterns) {
        let event = [];
        event.push(createRule(Rules.DESCRIPTION, info.instructor + " | " + pattern.room));
        event.push(createRule(Rules.NAME, info.course));
        event.push(createRule(Rules.STARTTIME, icsDateTime(Rules.STARTTIME, info.start, pattern.start, timezone)));
        event.push(createRule(Rules.ENDTIME, icsDateTime(Rules.ENDTIME, info.start, pattern.end, timezone)));
        event.push(createRule(Rules.UID, generateUid()));
        event.push(createRule(Rules.RECUR, buildRRuleValString(patternToRRuleParams(pattern, info.end))));
        events.push(event);
    }
    return events;
}
export async function convertXlsxPathToIcsString(file, timezone) {
    let calendar = [];
    await parseFile(file).then((reqInfos) => {
        reqInfos.forEach((reqInfo) => calendar = calendar.concat(reqInfoToEvent(reqInfo, timezone)));
        console.log(calendar);
    }).catch(err => {
        throw err;
    });
    return calendarToString(calendar);
}
