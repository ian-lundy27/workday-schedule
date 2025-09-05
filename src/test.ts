import JSZip from "jszip"
import { parseString } from "xml2js"

type Si = {
    t: string[]
}

type Sst = {
    si: Si[]
}

type SharedXml = {
    sst: Sst
}

type XmlCell = {
    $: {[key: string]: string}
    v?: string
}

type XmlRow = {
    c: XmlCell[]
}

type SheetData = {
    row: XmlRow[]
}

type Worksheet = {
    sheetData: SheetData[]
}

type DataXml = {
    worksheet: Worksheet
}

type Columns = {
    [key: string]: string
}

type Row = {
    [key: string]: string
}

export type RequiredInfo = {
    course: string,
    patterns: string,
    instructor: string,
    start: string,
    end: string
}

function toRequiredInfo(row: Row): RequiredInfo | null {
    return row["Course Listing"] && row["Meeting Patterns"] && row["Instructor"] && 
        row["Start Date"] && row["End Date"] ? {
            course: row["Course Listing"],
            patterns: row["Meeting Patterns"],
            instructor: row["Instructor"],
            start: row["Start Date"],
            end: row["End Date"]
        } : null
}

function getString(arr: string[], cell: XmlCell): string | null {
    if (cell.v) {
        try {
            let num = Number.parseInt(cell.v)
            if (num < arr.length) {
                return arr[Number.parseInt(cell.v)]
            } else {
                let time = new Date("1900-01-01T00:00:00.000Z")
                time.setDate(time.getDate() + num - 2) // why -2? bc it works for me
                return time.toISOString()
            }
        } catch (err) {}
    }
    return null
}

function getCol(cell: XmlCell): string {
    return cell["$"].r.charAt(0)
}

export async function parseFile(file: File): Promise<RequiredInfo[]> {
    try {

        let reqInfoArr: RequiredInfo[] = []
        await JSZip.loadAsync(file)
            .then(async (zip) => {

                console.log(zip)
                console.log(zip.files)

                let sharedXmlString: string | null = null
                let dataXmlString: string | null = null

                await zip.file("xl/sharedStrings.xml")?.async("string").then((content) => {
                    sharedXmlString = content
                })
                await zip.file("xl/worksheets/sheet1.xml")?.async("string").then((content) => {
                    dataXmlString = content
                })

                if (!sharedXmlString || !dataXmlString) {
                    throw new Error("Failed to unzip .xlsx file")
                }

                let sharedArr: string[] = []
                parseString(sharedXmlString, (err, result: SharedXml) => {
                    if (err) {
                        console.log(err)
                    }
                    result.sst.si.forEach((si) => sharedArr.push(si.t[0]))
                })

                parseString(dataXmlString, (err, result: DataXml) => {
                    if (err) {
                        console.log(err)
                    }
                    let classRows: Row[] = []
                    let headers: Columns = {}
                    let isHeadersRow = false
                    let isClassRow = false
                    for (const row of result.worksheet.sheetData[0].row) {
                        if (!isClassRow) {
                            row.c.forEach((c) => {
                                let text = getString(sharedArr, c)
                                if (text == "Course Listing") {
                                    isHeadersRow = true
                                }
                                if (isHeadersRow) {
                                    headers[getCol(c)] = text ? text : "undefined"
                                }
                            })
                            if (isHeadersRow) {
                                isClassRow = true
                            }
                        } else if (isClassRow) {
                            let addRow: Row = {}
                            row.c.forEach((c) => {
                                if (getCol(c) in headers) {
                                    let text = getString(sharedArr, c)
                                    addRow[headers[getCol(c)]] = text ? text : "undefined"
                                }
                            })
                            classRows.push(addRow)
                        } else {
                            break
                        }
                    }

                    classRows.forEach((row) => {
                        let converted = toRequiredInfo(row)
                        if (converted) {
                            reqInfoArr.push(converted)
                        }
                    })

                })

            })
        
        return reqInfoArr
        
    } catch (err) {

        console.error(err)
        throw Error("Failed to read .xlsx file and parse cells into objects")

    }
}