import { app_shared_emoji_mirror_if_rtl } from "./app_shared_emoji_mirror_if_rtl.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_notext } from "./app_shared_button_notext.mjs";
import { html_flex_row_center } from "./html_flex_row_center.mjs";
import { html_style_gap_em } from "./html_style_gap_em.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { emoji_arrow_right } from "./emoji_arrow_right.mjs";
export function app_shared_button_arrow_next(parent, text, lambda) {
  "A wide button on to whatever comes after, wearing an arrow beside the words handed to it.";
  "Its neighbour going the other way says why the arrow and the words are kept as two pieces. The one difference here is which of them comes first, and that is what puts each arrow on the outer edge of the pair.";
  arguments_assert(arguments, 3);
  let component = app_shared_button_notext(parent, lambda);
  html_flex_row_center(component);
  html_style_gap_em(component, "0.3");
  let arrow_ltr = emoji_arrow_right();
  let arrow = app_shared_emoji_mirror_if_rtl(arrow_ltr);
  html_span_text(component, text);
  html_span_text(component, arrow);
  return component;
}
