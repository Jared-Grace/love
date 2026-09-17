import { property_get } from "./property_get.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { html_div_code_dark } from "./html_div_code_dark.mjs";
import { html_text_align_left } from "./html_text_align_left.mjs";
import { html_div } from "./html_div.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { list_map } from "./list_map.mjs";
import { list_get } from "./list_get.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { object_copy_property_set } from "./object_copy_property_set.mjs";
import { app_code_lesson_quiz_token_select_pieces } from "./app_code_lesson_quiz_token_select_pieces.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_set } from "./list_set.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_lesson_quiz_token_select_code_show } from "./app_code_lesson_quiz_token_select_code_show.mjs";
import { app_code_lesson_quiz_pieces_select } from "./app_code_lesson_quiz_pieces_select.mjs";
export function app_code_lesson_quiz_line_missing(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
) {
  "A quiz where one line of a program is missing and the student builds it from its pieces, with every other line shown in its place. Every line shape was already built on its own in an earlier lesson, so the one new thing asked is what this line has to be, given the lines around it.";
  "The line is built exactly the way the unscramble builds one, and it grows in the gap where it belongs, so the student reads the finished program while building rather than a line on its own.";
  "THE GAP IS DRAWN WITH A DASHED EDGE, and it is as tall as a line from the start. Blank, it would read as a program with an empty line in it; outlined, it reads as a place to fill.";
  "WHAT IS SHOWN AS THE ANSWER IS THE WHOLE PROGRAM, with the line in it written the way the student is building it, so the answer never says a correct beginning of theirs was a mistake.";
  let answer_property = property_get(info, "answer_property");
  let code = property_get(qa, answer_property);
  let lines = text_split_newline(code);
  ("WHICH LINE IS MISSING IS ASKED OF THE QUIZ, not chosen here, because this is drawn afresh for every question and so cannot remember which line the last one left out");
  let line_next = property_get(info, "line_next");
  let index = line_next(lines);
  let program = html_div_code_dark(parent);
  html_text_align_left(program);
  function line_draw(line) {
    let row = html_div(program);
    html_text_set(row, line);
    return row;
  }
  let rows = list_map(lines, line_draw);
  let answer_div = list_get(rows, index);
  html_style_set(answer_div, "outline", "1px dashed");
  let note_div = html_div_text(parent, "");
  let line_missing = list_get(lines, index);
  let qa_line = object_copy_property_set(qa, answer_property, line_missing);
  let pieces = app_code_lesson_quiz_token_select_pieces(
    info,
    qa_line,
    answer_div,
  );
  function line_code_set(line_code) {
    let lines_filled = list_copy(lines);
    list_set(lines_filled, index, line_code);
    let joined = list_join_newline(lines_filled);
    correction_code_set(joined);
  }
  function show(variations, chosen) {
    app_code_lesson_quiz_token_select_code_show(
      variations,
      chosen,
      answer_div,
      line_code_set,
    );
  }
  app_code_lesson_quiz_pieces_select(
    parent,
    note_div,
    pieces,
    show,
    on_success,
    on_wrong,
  );
}
