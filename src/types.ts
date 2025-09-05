import { Days } from "./enums"

export type Rule = {
    key: string
    val: any
}

export type ICSEvent = Rule[]

export type Calendar = ICSEvent[]

export type Timestamp = {
    year?: string
    month?: string
    day?: string
    hour?: string
    minute?: string
    second?: string
}

export type MeetingPattern = {
    days: Days[],
    start: Timestamp
    end: Timestamp
    room: string
}