import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { clipboard_transform } from "../../../love/public/src/clipboard_transform.mjs";
import { app_calendar_paste_convert } from "../../../love/public/src/app_calendar_paste_convert.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_calendar_paste_main(context) {
  let root2 = property_get(context, "root");
  async function lambda2() {
    await clipboard_transform(app_calendar_paste_convert);
  }
  let p = html_p_text(root, text);
  let component = html_button(
    parent,
    "Click to paste the date/time from Google Calendar to copy for Pakistan",
    lambda2,
  );
}
