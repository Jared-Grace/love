import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_lesson_statement_name_value_name } from "./app_code_lesson_statement_name_value_name.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_map } from "./list_map.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export function app_code_lesson_statement_name_step_backwards_decoys(
  question,
  answer,
) {
  arguments_assert(arguments, 2);
  ("the wrong programs when one short line changes a name between two writings out: the name starting at the second number written out, the line run before both writings out, and the line run after both");
  ("Every one holds only the numbers on the screen. Filled from the other questions they held other numbers, so the one program starting at the first number on the screen was the answer every time and could be picked without reading what the line does.");
  ("They come to the second number and on, to the second number twice, and to the first number twice, so none of them writes out what the screen shows. Not picked: the opposite line, a-- for a++, because the first of these two lessons comes before a-- is taught, so that button would go for being unknown rather than for being wrong.");
  let lines = text_split_newline(answer);
  let held = list_first(lines);
  let logged = list_second(lines);
  let step = list_get(lines, 2);
  let written = text_split_newline(question);
  let second = list_second(written);
  let name = app_code_lesson_statement_name_value_name();
  let started = js_code_let_statement(name, second);
  let programs = [
    [started, logged, step, logged],
    [held, step, logged, logged],
    [held, logged, logged, step],
  ];
  let found = list_map(programs, list_join_newline);
  return found;
}
