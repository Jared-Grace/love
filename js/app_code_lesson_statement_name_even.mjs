import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_expression_remainder_2 } from "./app_code_lesson_expression_remainder_2.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_even() {
  arguments_assert(arguments, 0);
  ("whether a number is even: let even = n % 2 === 0; - picked by the human 2026-10-02 from a list of next lessons. In DSA it is the parity check, used to take every other item, to split work into two turns, and to tell the middle of an odd-length list from the two middles of an even one.");
  ("The remainder by 2 lesson already says even numbers leave 0 and odd numbers leave 1, so that lesson is the reminder, and the new idea is only writing that sentence as a check that gives true or false.");
  ("One line: it is 23 characters, and the % is worked before the === as the lessons on arithmetic beside a comparison taught. Not picked: n % 2 === 1 for odd, which fails for a negative odd number in JavaScript, where -3 % 2 is -1; checking for 0 is right for every whole number, so even is the one taught.");
  ("The answers are only true or false, so a question offers two buttons, two even numbers and two odd numbers each screen. 0 is among the even numbers, because it is the one a learner is least sure of.");
  ("The writing is a first draft, not yet the human's, 2026-10-02.");
  let names = ["n"];
  let n = "n";
  let even = "even";
  let percent = js_operator_percent_symbol();
  let same = js_operator_triple_equal_symbol();
  let remainder = js_code_binary_spaced_nb(n, percent, "2");
  let check = js_code_binary_spaced_nb(remainder, same, "0");
  let line_even = js_code_let_statement(even, check);
  let step = {
    middle: [line_even],
    logged: [even],
  };
  let left = "left";
  let line_left = js_code_let_statement(left, remainder);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [[n, 7]],
    [line_left],
    [left],
  );
  function values_get() {
    "two even numbers and two odd numbers, in a fresh order each screen";
    let evens = [[4], [10], [0], [16]];
    let odds = [[7], [3], [13], [1]];
    let taken_even = list_shuffle_take(evens, 2);
    let taken_odd = list_shuffle_take(odds, 2);
    let taken = list_concat(taken_even, taken_odd);
    list_shuffle(taken);
    return taken;
  }
  let eight = js_code_binary_result_nb("8", percent, "2", "0");
  let seven = js_code_binary_result_nb("7", percent, "2", "1");
  let eight_check = js_code_binary_spaced_nb("0", same, "0");
  let seven_check = js_code_binary_spaced_nb("1", same, "0");
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Is a number even",
    title_code: line_even,
    names,
    values_get,
    example_values: [10],
    step,
    remember_lesson: app_code_lesson_expression_remainder_2,
    remember_parts: [
      "the remainder of dividing by ",
      "2",
      " is ",
      "0",
      " for an even number and ",
      "1",
      " for an odd number:",
    ],
    remember_lines,
    explain: [
      ["", "8", " is even, so dividing it by ", "2", " leaves ", "0", ":"],
      ["", eight],
      ["", "7", " is odd, so dividing it by ", "2", " leaves ", "1", ":"],
      ["", seven],
      app_code_explain_container_next,
      ["So a number is even when its remainder is ", "0"],
      ["For ", "8", ":"],
      ["", eight_check, " is ", "true"],
      ["For ", "7", ":"],
      ["", seven_check, " is ", "false"],
      app_code_explain_container_next,
      ["Suppose the number is called ", n],
      ["Here is code that checks whether ", n, " is even:"],
    ],
    decoys: null,
    example_pointers: null,
    answer_count: 2,
  });
  return lesson;
}
