import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
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
  let math_abs = "Math.abs";
  let minus = js_operator_minus_symbol();
  let same = js_operator_triple_equal_symbol();
  let less = js_code_binary_spaced_nb(r2, minus, r);
  let apart = js_code_call_args(math_abs, [less]);
  let line_rows = js_code_let_statement(rows, apart);
  let step = {
    middle: [line_rows],
    logged: [rows],
  };
  ("The reminder quotes lesson 102 in its own shape, each expression beside what it is: Math.abs(-4) is 4, and Math.abs(4) is 4 - the negative made positive, then the positive kept, as that lesson's examples go. A learner was puzzled by console.log(Math.abs(-4)), because lesson 102 never put Math.abs inside console.log; the human's rule, 2026-10-01, is that a reminder quotes only the exact code the lesson taught. Not picked: console.log(Math.abs(-4)), two calls nested where the lesson taught one; nor let distance = Math.abs(-4); then console.log(distance);, which drops the nesting but is still not the lesson's code.");
  function remember_lines(box) {
    "lesson 102 in its own shape, each expression beside what it is";
    let negative = js_code_call_args(math_abs, ["-4"]);
    html_div_cycle_code(box, ["", negative, " is ", "4"]);
    let positive = js_code_call_args(math_abs, ["4"]);
    html_div_cycle_code(box, ["", positive, " is ", "4"]);
  }
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
  let left = js_code_call_args(math_abs, ["-3"]);
  let removed = js_code_binary_spaced_nb(left, same, "3");
  let left2 = js_code_call_args(math_abs, ["3"]);
  let kept = js_code_binary_spaced_nb(left2, same, "3");
  let lesson = app_code_lesson_statement_formula({
    words: "Rows apart",
    title_code: line_rows,
    names,
    values_get,
    example_values: [5, 2],
    step,
    remember_lesson: app_code_lesson_expression_absolute_value,
    remember_parts: ["", math_abs, " gives how far a number is from zero:"],
    remember_lines,
    explain: [
      [
        "Now suppose you sit in a later row ",
        "5",
        " and your friend sits in an earlier row ",
        "2",
      ],
      ["Your friend is ", "3", " rows up from you"],
      ["But subtracting gives:"],
      ["", backwards],
      ["Now there's a minus sign"],
      ["We don't want the minus sign"],
      ["We just want the number without the minus sign"],
      ["We just want the number of rows: ", "3"],
      app_code_explain_container_next,
      ["", math_abs, " removes the minus sign:"],
      ["", removed],
      ["And ", math_abs, " leaves a number without a minus sign the same:"],
      ["", kept],
      ["So ", apart, " is how many rows apart, whichever row is earlier"],
      ["Here is code that finds how many rows apart:"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
