import { Timezone } from "./enums"
import { convertXlsxPathToIcsString } from "./functions"

const upload = document.getElementById("upload") as HTMLInputElement
const timezone = document.getElementById("timezone") as HTMLSelectElement
const convert = document.getElementById("convert") as HTMLButtonElement
const response = document.getElementById("response") as HTMLSpanElement

upload?.addEventListener("change", (event: Event) => {
    console.log(event)
    convert.disabled = false
})

Object.values(Timezone).forEach((tz) => {
    timezone.innerHTML += "<option>" + tz + "</option>"
})

async function handleClick() {
    if (upload.files && upload.files.length > 0) {
            const file = upload.files[0]
            console.log(file)
            convertXlsxPathToIcsString(file, timezone.value as Timezone).then((ics) => {
                const blob = new Blob([ics], { type: "text/plain"});
                const link = document.createElement("a");

                link.download = "schedule.ics"
                link.href = URL.createObjectURL(blob);

                link.click();

                response.classList.add("success")
                response.innerText = "Converted .xlsx file to a .ics file, downloading..."

            }).catch(err => {
                response.classList.add("error");
                response.innerText = err instanceof Error ? err.message : "Unknown error occurred";
            })
        } else {
            response.classList.add("error")
            response.innerText = "Something went wrong uploading the .xlsx file"
        }
        response.classList.remove("hidden")
}

if (convert) {
    convert.onclick = (click) => {
        handleClick()
    }
}

