import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_grid_position_step } from "./app_code_lesson_statement_name_grid_position_step.mjs";
import { property_get } from "./property_get.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_remainder } from "./app_code_lesson_statement_name_remainder.mjs";
export function app_code_lesson_statement_name_grid_position() {
  arguments_assert(arguments, 0);
  ("the row and column of a numbered seat in rows of equal width: let row = Math.floor(index / width); let column = index % width;");
  ("Seats are numbered from 0, as positions in code are, so seat 0 is row 0 column 0. The writing says it with seats rather than lists, which are not taught yet.");
  ("No two programs share an answer, and neither line of an answer is the width it divides by.");
  let names = ["index", "width"];
  let step = app_code_lesson_statement_name_grid_position_step();
  let middle = property_get(step, "middle");
  let line_column = list_second(middle);
  let width = list_second(names);
  let percent = js_operator_percent_symbol();
  let name_a = "a";
  let name_b = "b";
  let left = js_code_binary_spaced_nb(name_a, percent, name_b);
  let remainder = "remainder";
  let line_remainder = js_code_let_statement(remainder, left);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [name_a, 14],
      [name_b, 4],
    ],
    [line_remainder],
    [remainder],
  );
  function values_get() {
    "four of the five pairs, in a fresh order each screen";
    let candidates = [
      [10, 4],
      [9, 2],
      [14, 5],
      [11, 4],
      [13, 4],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let name = js_code_math_floor_name();
  let lesson = app_code_lesson_statement_formula({
    words: "Row and column of a seat",
    title_code: line_column,
    names,
    values_get,
    example_values: [7, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_remainder,
    remember_parts: ["we can give the remainder (", percent, ") a name:"],
    remember_lines,
    explain: [
      ["Seats are numbered 0, 1, 2, and so on, in rows of ", width, " seats"],
      [
        "The row is how many whole rows fit before the seat, rounded down with ",
        name,
      ],
      ["The column is what is left over: ", line_column],
      ["Seat 7 in rows of 3 is in row 2, column 1, counting from 0:"],
    ],
    decoys: null,
  });
  return lesson;
}
