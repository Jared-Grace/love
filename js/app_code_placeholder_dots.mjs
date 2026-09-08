import { arguments_assert } from "./arguments_assert.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_placeholder_color } from "./app_code_placeholder_color.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
export function app_code_placeholder_dots(host) {
  arguments_assert(arguments, 1);
  ("the three dots standing in for a part of a line that is not being shown, drawn in the placeholder grey, handed back so a caller may say something more about them");
  ("ONE PLACE, BECAUSE THE DOTS ARE A WORD OF THIS COURSE'S OWN. They mean fill this in yourself, and a learner learns that from meeting them in the same grey every time. Written out at each site, the two halves of that - the characters and the colour - could part company, and a set of dots that came out white would read as code the learner was being shown rather than as a gap they were being handed.");
  ("The grey is asked for here rather than taken in, because a caller choosing the colour is a caller who can choose a wrong one. A gap wearing a different colour on purpose is not this thing at all - the string lesson has one, painted in the value colour to say the value is exactly what sits between the quotes, and it draws its own.");
  let dots = html_span_text(host, "...");
  let color = app_code_placeholder_color();
  html_font_color_set(dots, color);
  return dots;
}
