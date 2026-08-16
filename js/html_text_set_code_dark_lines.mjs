import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_text_set_code_dark } from "./html_text_set_code_dark.mjs";
export function html_text_set_code_dark_lines(component, text) {
  arguments_assert(arguments, 2);
  ("code standing on more than one line, written into a code chip that keeps the line breaks it was handed");
  ("A chip left to itself lets the browser fold every run of blank space into a single space, and a newline is blank space, so a program written on three lines arrives as one long line with no sign that anything was lost.");
  ("The breaks are kept and a wrap is still allowed, so a line too wide for a narrow phone folds inside the chip rather than pushing the whole page sideways.");
  html_text_set_code_dark(component, text);
  html_style_white_space(component, "pre-wrap");
}
