import { html_text_set } from "../../../love/public/src/html_text_set.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { app_calendar_paste_convert } from "../../../love/public/src/app_calendar_paste_convert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { clipboard_transform } from "../../../love/public/src/clipboard_transform.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_calendar_paste_main(context) {
  let root = property_get(context, "root");
  let p2 = null;
  async function lambda2() {
    function lambda(input) {
      let date_time_zones = app_calendar_paste_convert(input);
      let joined = list_join_newline_2([
        date_time_zones,
        "Do you want a meeting on this day and time?",
      ]);
      html_text_set(component2, text);
      return joined;
    }
    await clipboard_transform(lambda);
  }
  let p = html_p_text(
    root,
    "Click to paste the date/time from Google Calendar to copy for Pakistan",
  );
  let component = html_button(root, "Request date/time", lambda2);
  p2 = html_p(root);
}
