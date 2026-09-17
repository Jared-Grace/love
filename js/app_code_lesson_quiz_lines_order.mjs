import { property_get } from "./property_get.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { html_div_code_dark } from "./html_div_code_dark.mjs";
import { html_div_text } from "./html_div_text.mjs";
import { app_code_lines_orders } from "./app_code_lines_orders.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { app_code_lesson_quiz_lines_show } from "./app_code_lesson_quiz_lines_show.mjs";
import { list_first } from "./list_first.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { app_code_lesson_quiz_pieces_select } from "./app_code_lesson_quiz_pieces_select.mjs";
export function app_code_lesson_quiz_lines_order(
  parent,
  info,
  qa,
  on_success,
  on_wrong,
  batch_get,
  correction_code_set,
) {
  "A quiz where the student puts the lines of a program in order by tapping them, out of a row holding every line the program has. Each line was already built on its own in an earlier lesson, so the one new thing asked is which line has to come first.";
  "It is put together from pieces the same way a line is, and the pieces here are whole lines. So a line tapped too early is refused the same way a token tapped too early is, and a line the program uses twice carries the same count.";
  "AN ORDER IS RIGHT WHEN IT LOGS WHAT THE PROGRAM LOGS. Lines that do not depend on each other may come either way round, so every such order is accepted, and the order shown when the student asks for the answer is one that begins with the lines already tapped.";
  "The lines stand in the row sorted rather than in the order the program has them, or the row would hand over the answer before the first tap.";
  let answer_property = property_get(info, "answer_property");
  let code = property_get(qa, answer_property);
  let lines = text_split_newline(code);
  let answer_div = html_div_code_dark(parent);
  let note_div = html_div_text(parent, "");
  let variations = app_code_lines_orders(code);
  let tokens_unique = list_unique(lines);
  list_sort_text(tokens_unique);
  let chosen = [];
  app_code_lesson_quiz_lines_show(answer_div, chosen, lines);
  let pieces = {
    variations,
    tokens_unique,
    chosen,
    buttons: null,
  };
  function show(variations_now, chosen_now) {
    let order = list_first(variations_now);
    let joined = list_join_newline(order);
    correction_code_set(joined);
    app_code_lesson_quiz_lines_show(answer_div, chosen_now, lines);
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
