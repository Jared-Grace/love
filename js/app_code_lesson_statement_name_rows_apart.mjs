import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_console_log_statement } from "./js_code_console_log_statement.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_expression_absolute_value } from "./app_code_lesson_expression_absolute_value.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rows_apart() {
  arguments_assert(arguments, 0);
  ("how many rows apart two rows are, whichever is first: let rows = Math.abs(r2 - r1); - the second of three lessons toward the steps between two squares of a grid, after Rows down and before the rows and columns added.");
  ("Every screen has both directions: two of the five pairs go down and three go up, so four of five always holds one of each. The answers 4, 3, 7, 5 and 6 all differ. The writing works rows 5 and 2, the same rows as Rows down the other way round, so the -3 is met beside the 3 it should be; the example below is the same pair, which no question repeats.");
  ("Not picked: subtracting the smaller row from the larger with Math.max and Math.min, which is right but asks two calls where one does.");
  ("The writing is a first draft, not yet the human's, 2026-10-01.");
  let names = ["r1", "r2"];
  let r = list_first(names);
  let r2 = list_second(names);
  let rows = "rows";
  let abs = "Math.abs";
  let minus = js_operator_minus_symbol();
  let same = js_operator_triple_equal_symbol();
  let less = js_code_binary_spaced_nb(r2, minus, r);
  let apart = js_code_call_args(abs, [less]);
  let line_rows = js_code_let_statement(rows, apart);
  let step = {
    middle: [line_rows],
    logged: [rows],
  };
  let remember_call = js_code_call_args(abs, ["-4"]);
  let statement = js_code_console_log_statement(remember_call);
  let remember_lines = [statement];
  function values_get() {
    "four of the five pairs, in a fresh order each screen; two go down and three go up, so every screen has both";
    let candidates = [
      [6, 2],
      [1, 4],
      [7, 0],
      [3, 8],
      [9, 3],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let backwards = js_code_binary_result_nb("2", minus, "5", "-3");
  let left = js_code_call_args(abs, ["-3"]);
  let removed = js_code_binary_spaced_nb(left, same, "3");
  let left2 = js_code_call_args(abs, ["3"]);
  let kept = js_code_binary_spaced_nb(left2, same, "3");
  let lesson = app_code_lesson_statement_formula({
    words: "Rows apart",
    title_code: line_rows,
    names,
    values_get,
    example_values: [5, 2],
    step,
    remember_lesson: app_code_lesson_expression_absolute_value,
    remember_parts: ["", abs, " gives how far a number is from zero:"],
    remember_lines,
    explain: [
      [
        "Now suppose you sit in row ",
        "5",
        " and your friend sits in row ",
        "2",
      ],
      ["Your friend is ", "3", " rows up from you"],
      ["But subtracting gives:"],
      ["", backwards],
      [
        "The minus sign says up instead of down, but we only want how many rows: ",
        "3",
      ],
      app_code_explain_container_next,
      ["", abs, " removes the minus sign:"],
      ["", removed],
      ["And ", abs, " leaves a number without a minus sign the same:"],
      ["", kept],
      ["So ", apart, " is how many rows apart, whichever row is first"],
      ["Here is code that finds how many rows apart:"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
