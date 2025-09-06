import { Timezone } from "./enums";
import { convertXlsxPathToIcsString } from "./functions";
// const path = "C:/Users/jlund/Downloads/View_My_Courses(2).xlsx"
// console.log(convertXlsxPathToIcsString(path, Timezone.EST))
const upload = document.getElementById("upload");
const timezone = document.getElementById("timezone");
const convert = document.getElementById("convert");
const response = document.getElementById("response");
upload?.addEventListener("change", (event) => {
    console.log(event);
    convert.disabled = false;
});
Object.values(Timezone).forEach((tz) => {
    timezone.innerHTML += "<option>" + tz + "</option>";
});
async function handleClick() {
    if (upload.files && upload.files.length > 0) {
        const file = upload.files[0];
        console.log(file);
        try {
            await convertXlsxPathToIcsString(file, timezone.value).then((ics) => {
                const blob = new Blob([ics], { type: "text/plain" });
                const link = document.createElement("a");
                link.download = "schedule.ics";
                link.href = URL.createObjectURL(blob);
                link.click();
                response.classList.add("success");
                response.innerText = "Converted .xlsx file to a .ics file, downloading...";
            });
        }
        catch (err) {
            response.classList.add("error");
            response.innerText = err instanceof Error ? err.message : "Unknown error occurred";
        }
    }
    else {
        response.classList.add("error");
        response.innerText = "Something went wrong uploading the .xlsx file";
    }
    response.classList.remove("hidden");
}
if (convert) {
    convert.onclick = (click) => {
        handleClick();
    };
}
