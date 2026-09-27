import { list_between_space_nb } from "./list_between_space_nb.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_grid_position_step } from "./app_code_lesson_statement_name_grid_position_step.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_grid_position } from "./app_code_lesson_statement_name_grid_position.mjs";
export function app_code_lesson_statement_name_digit_split() {
  arguments_assert(arguments, 0);
  ("a number's last digit: let digit = n % 10; - the number left in front of it is the next lesson's, split out at the human's word, 2026-09-27, so each lesson teaches one line. The explanation is the human's words and ends on the line itself; the chairs in rows of 10 that it used to explain by were cut with the rest. Not picked: keeping both lines here, which asked a learner to take in % and Math.floor at once.");
  ("Chosen for later use: adding up a number's digits, reversing a number, and checking one reads the same both ways all take one digit off at a time with this line and the next lesson's, once loops are taught.");
  ("It is the column lesson with rows of 10, so that lesson is the one remembered: a chair's column is its last digit.");
  ("No digit is 0, and the five answers differ.");
  ("The opening is the human's, 2026-09-27, sent without a lesson named: two whole numbers, the question of the last digit, and % 10 answering it on both. Picked this lesson because it is the only one that teaches % 10. Not picked: the column lesson, which uses % on chairs rather than digits.");
  let names = ["n"];
  let n = list_first(names);
  let ten = "10";
  let digit = "digit";
  let percent = js_operator_percent_symbol();
  let left_over = js_code_binary_spaced_nb(n, percent, ten);
  let line_digit = js_code_let_statement(digit, left_over);
  let step = {
    middle: [line_digit],
    logged: [digit],
  };
  let before = app_code_lesson_statement_name_grid_position_step();
  let middle_before = property_get(before, "middle");
  let logged_before = property_get(before, "logged");
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      ["chair", 23],
      ["columns", 10],
    ],
    middle_before,
    logged_before,
  );
  function values_get() {
    "four of the five, in a fresh order each screen";
    let candidates = [[47], [93], [258], [61], [734]];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let spaced = list_between_space_nb([percent, ten]);
  let by_ten = text_combine_multiple(spaced);
  let three = js_code_binary_result_nb("123", percent, ten, "3");
  let seven = js_code_binary_result_nb("4567", percent, ten, "7");
  let lesson = app_code_lesson_statement_formula({
    words: "Last digit",
    title_code: line_digit,
    names,
    values_get,
    example_values: [35],
    step,
    remember_lesson: app_code_lesson_statement_name_grid_position,
    remember_parts: ["we can find the row and column of a chair:"],
    remember_lines,
    explain: [
      ["Let's suppose we have a whole number, like 123 or 4567"],
      ["How can we get the last digit?"],
      ["Using ", by_ten, ":"],
      ["", three],
      ["", seven],
      ["", by_ten, " always returns the last digit"],
      ["", line_digit],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
