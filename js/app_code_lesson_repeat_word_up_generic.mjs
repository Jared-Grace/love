import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { app_code_word_three_runs_example } from "./app_code_word_three_runs_example.mjs";
import { app_code_word_three_runs_walk } from "./app_code_word_three_runs_walk.mjs";
import { app_code_lesson_repeat_word_generic } from "./app_code_lesson_repeat_word_generic.mjs";
export function app_code_lesson_repeat_word_up_generic(
  program_write,
  above_inner,
  name_id,
) {
  arguments_assert(arguments, 3);
  ('a loop that writes out the same word each run while n counts up: let n = 0; loop (n < 3) { console.log("joy"); n++; } writes out joy three times');
  ("What differs between lessons is the title, what is shown above, and how the whole program is written, which program_write does when handed the let, the condition and the two lines. Above is handed example, which draws the program of 0 and 3 and what it writes out, and walk, which says what it does run by run.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let fruits = fruits_of_the_spirit();
  let joy = list_get(fruits, 1);
  let name = "n";
  function program_lines_written(write, start, bound, said_word) {
    'let n = start; the loop asking n < bound around console.log("word"); n++;';
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let logged = app_code_word_console_log_statement(said_word);
    let changed = js_code_update_statement(name, plus);
    let lines = write(code, condition, [logged, changed]);
    return lines;
  }
  function program_lines(start, bound, said_word) {
    let lines2 = program_lines_written(program_write, start, bound, said_word);
    return lines2;
  }
  function values_of(start, bound) {
    "every value n holds when the loop asks and the answer is true";
    let values = [];
    let value = start;
    while (less_than(value, bound)) {
      list_add(values, value);
      value = add(value, 1);
    }
    return values;
  }
  function example(root, write) {
    "the program of 0 and 3, written with write, and what it writes out";
    let lines3 = program_lines_written(write, 0, 3, joy);
    app_code_word_three_runs_example(root, lines3, joy);
  }
  function walk(root) {
    "what the program of 0 and 3 does, run by run, until what it asks is false";
    app_code_word_three_runs_walk(root, joy, less, 0, 1);
  }
  function above(root, context) {
    above_inner(root, context, example, walk);
  }
  let lesson = app_code_lesson_repeat_word_generic(
    program_lines,
    values_of,
    above,
    name_id,
  );
  return lesson;
}
