import { list_size } from "./list_size.mjs";
import { list_skip } from "./list_skip.mjs";
import { text_space_nb } from "./text_space_nb.mjs";
import { list_map } from "./list_map.mjs";
import { list_concat } from "./list_concat.mjs";
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
  let shown = list_concat(chosen, blanks);
  let text = list_join_newline(shown);
  html_text_set_code_dark_lines(answer_div, text);
}
