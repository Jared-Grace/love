import { html_style_margin } from "./html_style_margin.mjs";
import { song_image_couplets_title } from "./song_image_couplets_title.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { html_div_paragraph_small } from "./html_div_paragraph_small.mjs";
import { html_body_div_page_dark } from "./html_body_div_page_dark.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { song_image_audit_row } from "./song_image_audit_row.mjs";
import { song_image_color_text_quiet } from "./song_image_color_text_quiet.mjs";
export function song_image_audit_preview() {
  "the whole hymn laid out for checking against Scripture, on the sandbox app at the hash song_image_audit: every couplet in the order it is sung, with its picture, the verses its words rest on, the verses its symbol rests on, and an account of each";
  "the hash is written as plain words rather than as a spelled function name, because that is what it is - a key in the previews registry, which nothing answers to as a function";
  "all thirty-six are shown and not the thirty-two distinct ones, because the thing being checked is the film, and in the film a repeated couplet is sung again and its picture is shown again. A list of distinct symbols would be a check on the drawing rather than on what a viewer sees.";
  let root = html_body_div_page_dark();
  html_style_set(root, "max-width", "860px");
  html_style_margin(root, "0 auto");
  let title = html_div(root);
  html_style_font_size(title, "26px");
  html_style_set(title, "font-weight", "700");
  let text = song_image_couplets_title();
  html_text_set(title, text);
  let subtitle = html_div_paragraph_small(root);
  let style_value = song_image_color_text_quiet();
  html_style_set(subtitle, "color", style_value);
  let said =
    "every couplet as it is sung, with the picture it is sung over, " +
    "what the words rest on in Scripture and what the picture rests on";
  html_text_set(subtitle, said);
  let couplets = song_image_couplets();
  for (let couplet of couplets) {
    song_image_audit_row(root, couplet);
  }
  return root;
}
