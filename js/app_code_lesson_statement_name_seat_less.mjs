import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { js_code_between_symbols } from "./js_code_between_symbols.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_statement_name_seat_zero } from "./app_code_lesson_statement_name_seat_zero.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_seat_less() {
  arguments_assert(arguments, 0);
  ("whether a seat is in a row numbered from 0, written the shorter way: let ok = 0 <= n && n < max; - picked by the human 2026-10-02, after the same check written with the last seat, n <= max - 1. In DSA it is how a bounds check is usually written, index < length, so a learner reading other code meets this form most.");
  ("The reminder is the previous lesson, Seat in the row from 0, quoted as its own program with that lesson's example numbers, 4 and 5, so the two checks can be read side by side.");
  ("The writing shows why the two checks agree on whole numbers: every seat up to the last, max - 1, is less than max, and the seat max is not. It does not say they agree for numbers with a fractional part, where they do not; the seats are whole numbers.");
  ("The answers are only true or false, so a question offers two buttons, two seats in the row and two outside it each screen, the seats outside mostly one past an edge, as in the previous lesson.");
  ("The writing is a first draft, not yet the human's, 2026-10-02.");
  let names = ["n", "max"];
  let n = list_first(names);
  let max = list_second(names);
  let ok = "ok";
  let last = "last";
  let minus = js_operator_minus_symbol();
  let less = js_operator_less_than_symbol();
  let at_most = js_operator_less_than_equal_symbol();
  let check = js_code_between_symbols("0", at_most, n, less, max);
  let line_ok = js_code_let_statement(ok, check);
  let step = {
    middle: [line_ok],
    logged: [ok],
  };
  let max_less = js_code_binary_spaced_nb(max, minus, "1");
  let line_last = js_code_let_statement(last, max_less);
  let check_last = js_code_between_symbols("0", at_most, n, at_most, last);
  let line_ok_last = js_code_let_statement(ok, check_last);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [n, 4],
      [max, 5],
    ],
    [line_last, line_ok_last],
    [ok],
  );
  function values_get() {
    "two seats in the row and two outside it, in a fresh order each screen";
    let insides = [
      [0, 5],
      [4, 5],
      [2, 6],
      [3, 4],
    ];
    let outsides = [
      [5, 5],
      [-1, 4],
      [6, 6],
      [7, 3],
    ];
    let taken_in = list_shuffle_take(insides, 2);
    let taken_out = list_shuffle_take(outsides, 2);
    let taken = list_concat(taken_in, taken_out);
    list_shuffle(taken);
    return taken;
  }
  let four_under = js_code_binary_spaced_nb("4", less, "5");
  let five_under = js_code_binary_spaced_nb("5", less, "5");
  let n_at_most = js_code_binary_spaced_nb(n, at_most, "4");
  let n_under = js_code_binary_spaced_nb(n, less, "5");
  let n_at_most_last = js_code_binary_spaced_nb(n, at_most, max_less);
  let n_under_max = js_code_binary_spaced_nb(n, less, max);
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Seat in the row, shorter",
    title_code: line_ok,
    names,
    values_get,
    example_values: [4, 5],
    step,
    remember_lesson: app_code_lesson_statement_name_seat_zero,
    remember_parts: [
      "we can check whether a seat is in a row numbered from ",
      "0",
      ":",
    ],
    remember_lines,
    explain: [
      ["Suppose a row has ", "5", " seats, numbered starting with ", "0", ":"],
      ["", "0", " ", "1", " ", "2", " ", "3", " ", "4"],
      ["The last seat is ", "4"],
      app_code_explain_container_next,
      ["Every seat in the row is less than ", "5", ", even the last seat:"],
      ["", four_under, " is ", "true"],
      [
        "But seat ",
        "5",
        " is not in the row, and it is not less than ",
        "5",
        ":",
      ],
      ["", five_under, " is ", "false"],
      ["So ", n_at_most, " and ", n_under, " check the same thing"],
      app_code_explain_container_next,
      [
        "Suppose the seat is called ",
        n,
        " and the number of seats is called ",
        max,
      ],
      ["Then ", n_at_most_last, " and ", n_under_max, " check the same thing"],
      ["And ", n_under_max, " is shorter"],
      ["Here is code that checks whether seat ", n, " is in the row:"],
    ],
    decoys: null,
    example_pointers: null,
    answer_count: 2,
  });
  return lesson;
}
