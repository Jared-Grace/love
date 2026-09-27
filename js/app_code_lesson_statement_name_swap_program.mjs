import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_add } from "./list_add.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
export function app_code_lesson_statement_name_swap_program(
  lets,
  middle,
  logged,
) {
  arguments_assert(arguments, 3);
  ("the lines of one program in the swapping lessons: the names started with their numbers, then the lines the lesson is about, then each name the lesson asks about written out in turn");
  ("lets is a list of [name, number] pairs, because the reminder of the copying lesson starts one name and every other program here starts two");
  let lines = [];
  for (let pair of lets) {
    let name = list_first(pair);
    let value = list_second(pair);
    let item = js_code_let_statement(name, value);
    list_add(lines, item);
  }
  for (let line of middle) {
    list_add(lines, line);
  }
  for (let name of logged) {
    let item2 = js_code_console_log_statement(name);
    list_add(lines, item2);
  }
  return lines;
}
