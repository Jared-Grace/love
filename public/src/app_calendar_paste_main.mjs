import { html_font_color_set_red } from "../../../love/public/src/html_font_color_set_red.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { html_div_text_multiple } from "../../../love/public/src/html_div_text_multiple.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { app_calendar_paste_convert } from "../../../love/public/src/app_calendar_paste_convert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { clipboard_transform } from "../../../love/public/src/clipboard_transform.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_calendar_paste_main(context) {
  let root = property_get(context, "root");
  let output = null;
  async function lambda2() {
    html_clear(output);
    let lines = null;
    let red = false;
    function lambda(input) {
      try {
        let date_time_zones = app_calendar_paste_convert(input);
        let joined = list_join_newline_2([
          date_time_zones,
          "Do you want a meeting on this day and time?",
        ]);
        lines = text_split_newline(joined);
      } catch (e) {
        lines = ["Invalid input:", input, e];
        red = true;
      }
      let ds = html_div_text_multiple(output, lines);
      if (red) {
        each(ds, html_font_color_set_red);
      }
      return joined;
    }
    await clipboard_transform(lambda);
  }
  let p = html_p_text(
    root,
    "Click to paste the date/time from Google Calendar to copy for Pakistan",
  );
  let component = html_button(root, "Request date/time", lambda2);
  output = html_p(root);
}
