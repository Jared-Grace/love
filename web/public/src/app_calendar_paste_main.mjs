import { clipboard_copy } from "../../../love/public/src/clipboard_copy.mjs";
import { clipboard_paste } from "../../../love/public/src/clipboard_paste.mjs";
import { app_calendar_paste_convert } from "../../../love/public/src/app_calendar_paste_convert.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_calendar_paste_main() {
  let input = "Monday, May 11⋅11:00am – 12:00pm";
  async function lambda2() {
    let fn = app_calendar_paste_convert;
    let paste = await clipboard_paste();
    let text = await fn(paste);
    await clipboard_copy(text);
  }
  let component = html_button(
    parent,
    "Click to paste the date/time from Google Calendar to copy for Pakistan",
    lambda2,
  );
}
