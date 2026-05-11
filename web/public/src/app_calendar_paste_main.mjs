import { property_get } from "../../../love/public/src/property_get.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export async function app_calendar_paste_main() {
  let r = await import_install("luxon");
  let DateTime = property_get(r, "DateTime");
  let example = "Monday, May 11⋅11:00am – 12:00pm";
  function lambda2() {}
  let component = html_button(
    parent,
    "Click to paste the date/time from Google Calendar to copy for Pakistan",
    lambda2,
  );
}
