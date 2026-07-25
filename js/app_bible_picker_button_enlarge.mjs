import { html_style_set } from "./html_style_set.mjs";
import { html_style_padding_x } from "./html_style_padding_x.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { html_style_margin_x } from "./html_style_margin_x.mjs";
import { html_style_margin_y } from "./html_style_margin_y.mjs";
export function app_bible_picker_button_enlarge(button) {
  "the book/chapter/verse pickers are the primary touch surface on a phone, so give each choice a fatter tap target and real breathing room left-and-right, instead of the tight default tile spacing where the buttons nearly touch";
  html_style_set(button, "font-size", "1.15em");
  html_style_padding_x(button, "0.85em");
  html_style_padding_y(button, "0.4em");
  html_style_margin_x(button, "0.28em");
  html_style_margin_y(button, "0.28em");
}
