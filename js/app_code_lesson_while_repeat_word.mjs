import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { fruits_of_the_spirit } from "./fruits_of_the_spirit.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_word_console_log_statement } from "./app_code_word_console_log_statement.mjs";
import { js_code_update_statement } from "./js_code_update_statement.mjs";
import { js_keyword_while } from "./js_keyword_while.mjs";
import { js_code_keyword_block_lines_multiple } from "./js_code_keyword_block_lines_multiple.mjs";
import { list_concat } from "./list_concat.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { list_get } from "./list_get.mjs";
import { app_code_container_light_blue } from "./app_code_container_light_blue.mjs";
import { app_code_remember_from_lesson } from "./app_code_remember_from_lesson.mjs";
import { app_code_lesson_while_increment } from "./app_code_lesson_while_increment.mjs";
import { app_code_div_cycle_code } from "./app_code_div_cycle_code.mjs";
import { app_code_while_word_three_runs } from "./app_code_while_word_three_runs.mjs";
import { app_code_lesson_statement_title_name_id } from "./app_code_lesson_statement_title_name_id.mjs";
import { app_code_lesson_repeat_word_generic } from "./app_code_lesson_repeat_word_generic.mjs";
export function app_code_lesson_while_repeat_word() {
  arguments_assert(arguments, 0);
  ('a while that writes out the same word each run: let n = 0; while (n < 3) { console.log("joy"); n++; } writes out joy three times');
  ("The one new fact is that n need not be what is written out: here it only counts the runs, which is the first time in the course a while repeats something that does not change.");
  ("Recommended by Claude 2026-11-02 and chosen by the human, to sit after n++ and n-- have come into a while, and before a while has two names in it.");
  ("A program starts at zero, or at another number, so the count cannot always be copied off the number n is compared against.");
  ("The writing is a first draft by Claude 2026-11-02.");
  let less = js_operator_less_than_symbol();
  let plus = js_operator_plus_symbol();
  let fruits = fruits_of_the_spirit();
  let name = "n";
  function program_lines(start, bound, said_word) {
    'let n = start; while (n < bound) { console.log("word"); n++; }';
    let code = js_code_let_statement(name, start);
    let condition = js_code_binary_spaced_nb(name, less, bound);
    let logged = app_code_word_console_log_statement(said_word);
    let changed = js_code_update_statement(name, plus);
    let keyword = js_keyword_while();
    let while_lines = js_code_keyword_block_lines_multiple(keyword, condition, [
      logged,
      changed,
    ]);
    let lines = list_concat([code], while_lines);
    return lines;
  }
  function values_of(start, bound) {
    "every value n holds when the while asks and the answer is true";
    let values = [];
    let value = start;
    while (less_than(value, bound)) {
      list_add(values, value);
      value = add(value, 1);
    }
    return values;
  }
  function above(root, context) {
    "While adding one remembered, then a while that writes out one word each run while n only counts";
    let joy = list_get(fruits, 1);
    let box_one = app_code_container_light_blue(root);
    app_code_remember_from_lesson(
      box_one,
      context,
      app_code_lesson_while_increment,
      ["", "n++", " inside a ", "while", " adds one to ", name, " each run."],
    );
    let box_two = app_code_container_light_blue(root);
    app_code_div_cycle_code(box_two, [
      "A ",
      "while",
      " can write out the same word each run, and ",
      name,
      " only counts the runs:",
    ]);
    let lines3 = program_lines(0, 3, joy);
    app_code_while_word_three_runs(box_two, lines3, joy, less, 0, 1);
  }
  let name_id = app_code_lesson_statement_title_name_id(
    "The same word each run",
    '{ console.log("joy"); n++; }',
  );
  let lesson = app_code_lesson_repeat_word_generic(
    program_lines,
    values_of,
    above,
    name_id,
  );
  return lesson;
}
