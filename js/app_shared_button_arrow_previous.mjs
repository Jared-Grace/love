import { app_shared_emoji_mirror_if_rtl } from "./app_shared_emoji_mirror_if_rtl.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_button_notext } from "./app_shared_button_notext.mjs";
import { html_flex_row_center } from "./html_flex_row_center.mjs";
import { html_style_gap_em } from "./html_style_gap_em.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { emoji_arrow_left } from "./emoji_arrow_left.mjs";
export function app_shared_button_arrow_previous(parent, text, lambda) {
  "A wide button back to whatever comes before, wearing an arrow beside the words handed to it.";
  "The arrow and the words are two pieces standing side by side rather than one piece of writing. Joined into one they could only ever be read one way round, and a reader whose language runs right to left needs the arrow on the other end - which is something the pieces can be told to do and a single string cannot.";
  "The words arrive already chosen. What they say depends on the reader's language and what this button leads back to, and neither is anything a button knows.";
  arguments_assert(arguments, 3);
  let component = app_shared_button_notext(parent, lambda);
  html_flex_row_center(component);
  html_style_gap_em(component, "0.3");
  let arrow_ltr = emoji_arrow_left();
  let arrow = app_shared_emoji_mirror_if_rtl(arrow_ltr);
  html_span_text(component, arrow);
  html_span_text(component, text);
  return component;
}
