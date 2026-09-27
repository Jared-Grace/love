import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_grid_position_step } from "./app_code_lesson_statement_name_grid_position_step.mjs";
import { property_get } from "./property_get.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { app_code_seat_grid } from "./app_code_seat_grid.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_remainder } from "./app_code_lesson_statement_name_remainder.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
export function app_code_lesson_statement_name_grid_position() {
  arguments_assert(arguments, 0);
  ("the row and column of a numbered seat in rows of equal width: let row = Math.floor(index / width); let column = index % width;");
  ("Seats are numbered from 0, as positions in code are, so seat 0 is row 0 column 0. The writing says it with seats rather than lists, which are not taught yet.");
  ("No two programs share an answer, and neither line of an answer is the width it divides by.");
  ("The writing follows the human's ask, 2026-09-27: a numbered grid, its dimensions, and two ways to reach the answer. Picked: the row by whole rows before the seat, and the column two ways, by taking those rows' seats away and by the remainder, so % arrives as a shortcut for a subtraction the reader has just done. Not picked: counting on the picture against the formula, which the picture already invites without writing.");
  let names = ["index", "width"];
  let step = app_code_lesson_statement_name_grid_position_step();
  let middle = property_get(step, "middle");
  let line_column = list_second(middle);
  let width = list_second(names);
  let percent = js_operator_percent_symbol();
  let slash = js_operator_division_symbol();
  let minus = js_operator_minus_symbol();
  let same = js_operator_triple_equal_symbol();
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
  function grid_draw(box) {
    "seat 7 among 9 seats in rows of 3";
    app_code_seat_grid(box, 9, 3, 7);
  }
  let divided = js_code_binary_spaced_nb("7", slash, "3");
  let floored = js_code_call_args(name, [divided]);
  let row_found = js_code_binary_spaced_nb(floored, same, "2");
  let code = js_code_binary_result_nb("7", minus, "6", "1");
  let code2 = js_code_binary_result_nb("7", percent, "3", "1");
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
      grid_draw,
      ["Here ", width, " is 3: each row has 3 seats"],
      ["Columns are counted across the top: 0, 1 and 2"],
      ["Rows are counted down the side, also from 0"],
      ["Which row and column is seat 7, in green?"],
      ["Row: the blue seats are the whole rows before seat 7"],
      ["2 whole rows fit, so seat 7 is in row 2:"],
      ["", row_found],
      ["Column, one way: those 2 rows hold 6 seats, 0 to 5"],
      ["Seat 7 is 1 past them, so it is in column 1:"],
      ["", code],
      ["Column, another way: 1 is what is left over, the remainder:"],
      ["", code2],
      ["Seat 7 in rows of 3 is in row 2, column 1:"],
    ],
    decoys: null,
  });
  return lesson;
}
