import { clipboard_transform } from "../../../love/public/src/clipboard_transform.mjs";
import { app_calendar_paste_convert } from "../../../love/public/src/app_calendar_paste_convert.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_calendar_paste_main() {
  async function lambda2() {
    await clipboard_transform(app_calendar_paste_convert);
  }
  let component = html_button(
    parent,
    "Click to paste the date/time from Google Calendar to copy for Pakistan",
    lambda2,
  );
}
