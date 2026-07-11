import { country_pakistan } from "../../../love/public/src/country_pakistan.mjs";
import { html_p_text_multiple } from "../../../love/public/src/html_p_text_multiple.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
import { list_join_newline } from "../../../love/public/src/list_join_newline.mjs";
import { html_font_color_set_red } from "../../../love/public/src/html_font_color_set_red.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { text_split_newline } from "../../../love/public/src/text_split_newline.mjs";
import { html_div_text_multiple } from "../../../love/public/src/html_div_text_multiple.mjs";
import { html_p } from "../../../love/public/src/html_p.mjs";
import { list_join_newline_2 } from "../../../love/public/src/list_join_newline_2.mjs";
import { app_calendar_paste_convert } from "../../../love/public/src/app_calendar_paste_convert.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { clipboard_transform } from "../../../love/public/src/clipboard_transform.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
export function app_calendar_paste_main(context) {
  let root = property_get(context, "root");
  let output = null;
  let p = html_p_text_multiple(root, [
    "Click to paste the date/time from Google Calendar to copy",
    "Request date/time for: ",
  ]);
  let pakistan = country_pakistan();
  let kenya = {
    name: "Kenya",
    zone: "Africa/Nairobi",
    flag: "🇰🇪",
  };
  let bangladesh = {
    name: "Bangladesh",
    zone: "Asia/Dhaka",
    flag: "🇧🇩",
  };
  let india = {
    name: "India",
    zone: "Asia/Kolkata",
    flag: "🇮🇳",
  };
  let countries = [pakistan, kenya, bangladesh, india];
  function lambda3(country) {
    let name = property_get(country, "name");
    let flag = property_get(country, "flag");
    let combined = text_combine_multiple([name, " ", flag]);
    let component = html_button(root, combined, lambda2);
    async function lambda2() {
      html_clear(output);
      let lines = null;
      let red = false;
      function lambda(input) {
        try {
          let r = app_calendar_paste_convert(input, country);
          let date_time_zones = property_get(r, "date_time_zones");
          let joined = list_join_newline_2([
            "Do you want me to share the word of God on this day and time?",
            date_time_zones,
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
        let joined = list_join_newline(lines);
        return joined;
      }
      await clipboard_transform(lambda);
    }
  }
  each(countries, lambda3);
  output = html_p(root);
}
