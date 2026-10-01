import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_chair_emoji } from "./app_code_chair_emoji.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_subtract } from "./app_code_lesson_statement_name_subtract.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_rows_down() {
  arguments_assert(arguments, 0);
  ("how many rows down from one row to a later one: let rows = r2 - r1; - the first of three lessons toward the steps between two squares of a grid, then Math.abs for either direction, then rows and columns added. The split was chosen by the human 2026-10-01, so each lesson asks one new thing. Not picked: a lesson for rows and another for columns, which would teach the same line twice under other names.");
  ("The names r1 and r2 rather than row1 and row2 because the lesson after this one wraps the same subtraction in Math.abs, and Math.abs(row2 - row1) is past the 30 characters a code line may be. Every question has r2 past r1, so the answer is never negative - the negative is the next lesson's question.");
  ("The rows of chairs are the ones the row-and-column lessons met, numbered from 0. The answers 4, 5, 1, 7 and 3 all differ, and the example below is rows 2 and 5, which the writing works, so no question repeats it.");
  ("The writing is a first draft, not yet the human's, 2026-10-01.");
  let names = ["r1", "r2"];
  let r = list_first(names);
  let r2 = list_second(names);
  let rows = "rows";
  let minus = js_operator_minus_symbol();
  let less = js_code_binary_spaced_nb(r2, minus, r);
  let line_rows = js_code_let_statement(rows, less);
  let step = {
    middle: [line_rows],
    logged: [rows],
  };
  let a = "a";
  let b = "b";
  let difference = "difference";
  let right = js_code_binary_spaced_nb(a, minus, b);
  let code = js_code_let_statement(difference, right);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [a, 9],
      [b, 4],
    ],
    [code],
    [difference],
  );
  function values_get() {
    "four of the five pairs, the second row always past the first, in a fresh order each screen";
    let candidates = [
      [0, 4],
      [1, 6],
      [3, 4],
      [2, 9],
      [5, 8],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let emoji = app_code_chair_emoji();
  let worked = js_code_binary_result_nb("5", minus, "2", "3");
  let combined = text_combine("Suppose there are rows of chairs ", emoji);
  let lesson = app_code_lesson_statement_formula({
    words: "Rows down",
    title_code: line_rows,
    names,
    values_get,
    example_values: [2, 5],
    step,
    remember_lesson: app_code_lesson_statement_name_subtract,
    remember_parts: ["we can subtract one name from another:"],
    remember_lines,
    explain: [
      [combined],
      ["The rows are numbered starting with ", "0"],
      ["You sit in row ", "2", " and your friend sits in row ", "5"],
      ["How many rows down from you is your friend?"],
      [
        "Row ",
        "3",
        " is ",
        "1",
        " row down, row ",
        "4",
        " is ",
        "2",
        " rows down, and row ",
        "5",
        " is ",
        "3",
        " rows down",
      ],
      ["We can find the ", "3", " by subtracting:"],
      ["", worked],
      app_code_explain_container_next,
      [
        "Suppose your row is called ",
        r,
        " and your friend's row is called ",
        r2,
      ],
      ["Then ", less, " is how many rows down from you your friend is"],
      ["Here is code that finds how many rows down:"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
