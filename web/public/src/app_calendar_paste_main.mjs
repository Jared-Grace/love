import { app_calendar_paste_convert } from "../../../love/public/src/app_calendar_paste_convert.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export async function app_calendar_paste_main() {
  let example = "Monday, May 11⋅11:00am – 12:00pm";
  await app_calendar_paste_convert();
  function lambda2() {}
  let component = html_button(
    parent,
    "Click to paste the date/time from Google Calendar to copy for Pakistan",
    lambda2,
  );
}
