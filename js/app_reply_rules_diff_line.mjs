import { arguments_assert } from "./arguments_assert.mjs";
import { html_pre_text } from "./html_pre_text.mjs";
import { html_style_margin } from "./html_style_margin.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { html_style_hanging_indent } from "./html_style_hanging_indent.mjs";
export function app_reply_rules_diff_line(block, text) {
  arguments_assert(arguments, 2);
  ("One row of a drawn change: the line's own text kept exactly as it is spaced, wrapped rather than run off the side of the screen, and returned so the row can be coloured.");
  ("★ IT WRAPS BECAUSE IT IS READ ON A PHONE. Preformatted text does not wrap by default, so a long line of code pushes the whole page sideways and takes every other line with it - and a reader who has to drag the page left and right to read one line is not checking the change, they are fighting the screen. Wrapping keeps the indentation, which is the one thing preformatted text was chosen for.");
  ("★ THE WRAPPED REMAINDER IS PUSHED IN PAST THE SIGN, so the left-hand column holds signs and nothing else. A remainder starting hard against the left edge would sit exactly where a plus or a minus sits and read as another line of the change, which is the one misreading this whole drawing exists to prevent.");
  let line = html_pre_text(block, text);
  html_style_margin(line, "0");
  html_style_white_space(line, "pre-wrap");
  html_style_hanging_indent(line, "1.4em");
  return line;
}
