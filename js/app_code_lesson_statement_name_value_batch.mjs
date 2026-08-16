import { add } from "./add.mjs";
import { app_code_lesson_operators_value_max } from "./app_code_lesson_operators_value_max.mjs";
import { app_code_lesson_statement_name_value_names } from "./app_code_lesson_statement_name_value_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { list_chunk } from "./list_chunk.mjs";
import { list_first } from "./list_first.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { list_map_concat_multiple } from "./list_map_concat_multiple.mjs";
import { list_second } from "./list_second.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { range_map } from "./range_map.mjs";
import { text_to } from "./text_to.mjs";
export function app_code_lesson_statement_name_value_batch() {
  arguments_assert(arguments, 0);
  ("the four programs a screen of this lesson asks about: two that give one value a name and write it out, and two that give two values names and write out only the second");
  ("The four answers are all different, because the wrong answers a question offers are the other questions' answers, and two questions coming out the same would put two right buttons on one screen.");
  ("Each pair of numbers is used twice over - once asked on its own, once as the name that is NOT written out. So the value a learner lands on by reading the wrong line is always sitting there as a button, which is the only way this lesson can be got wrong on purpose rather than by luck.");
  let names = app_code_lesson_statement_name_value_names();
  let name_first = list_first(names);
  let name_second = list_second(names);
  function held_of(name, value) {
    "the line that gives a value a name";
    let right = text_to(value);
    let code = js_code_let_statement(name, right);
    return code;
  }
  function one_name(value) {
    "a name given a value, and that same name written out";
    let held = held_of(name_first, value);
    let logged = js_code_console_log_statement(name_first);
    let lines = [held, logged];
    let code = list_join_newline(lines);
    return code;
  }
  function two_names(other, value) {
    "two names given values, and only the second of them written out";
    let held_other = held_of(name_first, other);
    let held = held_of(name_second, value);
    let logged = js_code_console_log_statement(name_second);
    let lines = [held_other, held, logged];
    let code = list_join_newline(lines);
    return code;
  }
  function number_of(index) {
    "the numbers a value may be, one through the largest this course uses";
    let number = add(index, 1);
    return number;
  }
  function pair_to_codes(pair) {
    "the two questions a pair of numbers makes";
    let first = list_first(pair);
    let second = list_second(pair);
    let alone = one_name(first);
    let beside = two_names(first, second);
    let codes = [alone, beside];
    return codes;
  }
  let max = app_code_lesson_operators_value_max();
  let numbers = range_map(max, number_of);
  let taken = list_shuffle_take(numbers, 4);
  let pairs = list_chunk(taken, 2);
  let codes = list_map_concat_multiple(pairs, pair_to_codes);
  return codes;
}
