import { html_style_width_fit_content } from "./html_style_width_fit_content.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function html_div_code_lines(parent, lines) {
  arguments_assert(arguments, 2);
  ("a program standing on several lines, painted as one code chip that keeps its line breaks");
  ("Its single-line twin paints one line into its own chip, so a program of three lines came out as three chips stacked up. The quiz and the worked example have always painted the same program as one chip, because a lesson hands one painter to both; this is that painter reached from a box read before the questions start, so a learner meets the program in one shape on every screen of the lesson.");
  ("Lines with nothing said between them are one program. Where a lesson has something to say between two lines, the lines are handed over separately, and the break in the writing is the thing being shown.");
  ("the chip is drawn only as wide as its widest line, because every other code chip in these boxes is, and a program painted edge to edge would read as a panel of its own rather than as the same chip with more in it.");
  let text = list_join_newline(lines);
  let div = html_div(parent);
  html_text_set_code_dark_lines(div, text);
  html_style_width_fit_content(div);
  return div;
}
