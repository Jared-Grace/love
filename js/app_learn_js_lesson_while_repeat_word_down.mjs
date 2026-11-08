import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_greater_than_symbol } from "./js_operator_greater_than_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_add } from "./list_add.mjs";
import { subtract } from "./subtract.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { list_get } from "./list_get.mjs";
import { app_learn_js_container_light_blue } from "./app_learn_js_container_light_blue.mjs";
import { app_learn_js_remember_from_lesson } from "./app_learn_js_remember_from_lesson.mjs";
import { app_learn_js_lesson_while_repeat_word } from "./app_learn_js_lesson_while_repeat_word.mjs";
import { app_learn_js_div_cycle_code } from "./app_learn_js_div_cycle_code.mjs";
import { app_learn_js_while_word_three_runs } from "./app_learn_js_while_word_three_runs.mjs";
import { app_learn_js_lesson_statement_title_name_id } from "./app_learn_js_lesson_statement_title_name_id.mjs";
import { app_learn_js_lesson_repeat_word_generic } from "./app_learn_js_lesson_repeat_word_generic.mjs";
export function app_learn_js_lesson_while_repeat_word_down() {
  arguments_assert(arguments, 0);
  ('a while that writes out the same word each run while n counts down: let n = 3; while (n > 0) { console.log("joy"); n--; } writes out joy three times');
  ("The one new fact is that n can count the runs downwards just as well as upwards: nothing about the word depends on which way it goes.");
  ("Recommended by Claude 2026-11-03 and chosen by the human, to sit straight after The same word each run, which counts up.");
  ("The writing is a first draft by Claude 2026-11-03.");
  let greater = js_operator_greater_than_symbol();
  let minus = js_operator_minus_symbol();
  let name = "n";
  function program_lines(low, high, said_word) {
    'let n = high; while (n > low) { console.log("word"); n--; }';
    let code = js_code_let_statement(name, high);
    let condition = js_code_binary_spaced_nb(name, greater, low);
    let logged = app_code_word_console_log_statement(said_word);
    let changed = js_code_update_statement(name, minus);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      logged,
      changed,
    ]);
    let lines = list_concat([code], while_lines);
    return lines;
  }
  function values_of(low, high) {
    "every value n holds when the while asks and the answer is true";
    let values = [];
    let value = high;
    while (greater_than(value, low)) {
      list_add(values, value);
      value = subtract(value, 1);
    }
    return values;
  }
  function above(root, context) {
    "The same word each run remembered, then the same word with n counting down";
    let fruits = fruits_of_the_spirit();
    let joy = list_get(fruits, 1);
    let box_one = app_learn_js_container_light_blue(root);
    app_learn_js_remember_from_lesson(
      box_one,
      context,
      app_learn_js_lesson_while_repeat_word,
      ["A ", "while", " can write out the same word each run."],
    );
    let box_two = app_learn_js_container_light_blue(root);
    app_learn_js_div_cycle_code(box_two, [
      "",
      name,
      " can count the runs down instead of up:",
    ]);
    let lines2 = program_lines(0, 3, joy);
    app_learn_js_while_word_three_runs(box_two, lines2, joy, greater, 3, -1);
  }
  let name_id = app_learn_js_lesson_statement_title_name_id(
    "The same word, counting down",
    "while (n > 0) { ... n--; }",
  );
  let lesson = app_learn_js_lesson_repeat_word_generic(
    program_lines,
    values_of,
    above,
    name_id,
  );
  return lesson;
}
