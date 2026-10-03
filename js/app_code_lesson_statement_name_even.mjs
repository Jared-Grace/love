import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_expression_remainder_2 } from "./app_code_lesson_expression_remainder_2.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_even() {
  arguments_assert(arguments, 0);
  ("whether a number is even: let even = n % 2 === 0; - picked by the human 2026-10-02 from a list of next lessons. In DSA it is the parity check, used to take every other item, to split work into two turns, and to tell the middle of an odd-length list from the two middles of an even one.");
  ("The remainder by 2 lesson already says even numbers leave 0 and odd numbers leave 1, so that lesson is the reminder, and the new idea is only writing that sentence as a check that gives true or false.");
  ("One line: it is 23 characters, and the % is worked before the === as the lessons on arithmetic beside a comparison taught. Not picked: n % 2 === 1 for odd, which fails for a negative odd number in JavaScript, where -3 % 2 is -1; checking for 0 is right for every whole number, so even is the one taught.");
  ("The answers are only true or false, so a question offers two buttons, two even numbers and two odd numbers each screen. 0 is among the even numbers, because it is the one a learner is least sure of.");
  ("Every remainder is blue, its value and the word, asked by the human 2026-10-03, so the 0 or 1 that dividing leaves can be followed from the working into the check. The 0 the remainder is checked against stays plain, because it is the number asked for, not a remainder. The reminder from the remainder by 2 lesson is left uncoloured: it is drawn by that shared reminder, whose code pieces take colour only from names a lesson hands out.");
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
  let remainder_color = app_code_highlight_color();
  let plain = app_shared_color_code_background();
  let spaced_percent = js_code_binary_spaced_nb("", percent, "");
  let spaced_same = js_code_binary_spaced_nb("", same, "");
  function remainder_worked(number, left_over) {
    "number % 2 === left_over as one code chip, the remainder coloured as every remainder on this screen is";
    let chip = app_code_explain_code_colored_inline(
      [number, spaced_percent, "2", spaced_same, left_over],
      [plain, plain, plain, plain, remainder_color],
    );
    return chip;
  }
  function check_worked(left_over) {
    "left_over === 0 as one code chip, the remainder coloured and the 0 it is checked against plain";
    let chip = app_code_explain_code_colored_inline(
      [left_over, spaced_same, "0"],
      [remainder_color, plain, plain],
    );
    return chip;
  }
  let remainder_word = app_code_explain_word_colored(
    "remainder",
    remainder_color,
  );
  let zero = app_code_explain_number_colored("0", remainder_color);
  let one = app_code_explain_number_colored("1", remainder_color);
  let eight_chip = app_code_explain_number_colored("8", plain);
  let seven_chip = app_code_explain_number_colored("7", plain);
  let two_chip = app_code_explain_number_colored("2", plain);
  let is_true = app_code_explain_number_colored("true", plain);
  let is_false = app_code_explain_number_colored("false", plain);
  let eight_said = app_code_explain_said([
    "",
    eight_chip,
    " is even, so dividing it by ",
    two_chip,
    " leaves ",
    zero,
    ":",
  ]);
  let seven_said = app_code_explain_said([
    "",
    seven_chip,
    " is odd, so dividing it by ",
    two_chip,
    " leaves ",
    one,
    ":",
  ]);
  let v = remainder_worked("8", "0");
  let eight_worked_said = app_code_explain_said(["", v]);
  let v2 = remainder_worked("7", "1");
  let seven_worked_said = app_code_explain_said(["", v2]);
  let even_said = app_code_explain_said([
    "So a number is even when its ",
    remainder_word,
    " is ",
    zero,
  ]);
  let v3 = check_worked("0");
  let eight_check_said = app_code_explain_said(["", v3, " is ", is_true]);
  let v4 = check_worked("1");
  let seven_check_said = app_code_explain_said(["", v4, " is ", is_false]);
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
      eight_said,
      eight_worked_said,
      seven_said,
      seven_worked_said,
      app_code_explain_container_next,
      even_said,
      ["For ", "8", ":"],
      eight_check_said,
      ["For ", "7", ":"],
      seven_check_said,
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
