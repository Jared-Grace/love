import { list_size } from "./list_size.mjs";
import { list_skip } from "./list_skip.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
import { app_code_lines_indent_braces } from "./app_code_lines_indent_braces.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { html_text_set_code_dark_lines } from "./html_text_set_code_dark_lines.mjs";
export function app_code_lesson_quiz_lines_show(answer_div, chosen, lines) {
  "Write the lines tapped so far into the panel above the lines to choose from, one under another, with a blank line held for every line still to come.";
  "THE BLANK LINES ARE THERE SO NOTHING MOVES. The panel is as tall as the finished program from the moment the question opens, so a tap adds words to a line that was already there instead of pushing the buttons below it further down the screen, under the learner's finger.";
  let size = list_size(chosen);
  let rest = list_skip(lines, size);
  function line_blank(line) {
    let blank = text_space_nb();
    return blank;
  }
  let blanks = list_map(rest, line_blank);
  ("2026-10-23, at the human's asking: the lines tapped are indented by the { } of the order they were tapped in, since another right order can put a line inside a { } it was not inside before, or outside one it was");
  let a = app_code_lines_indent_braces(chosen);
  let shown = list_concat(a, blanks);
  let text = list_join_newline(shown);
  html_text_set_code_dark_lines(answer_div, text);
}
