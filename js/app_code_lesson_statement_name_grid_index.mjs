import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_last } from "./list_last.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_grid_position_step } from "./app_code_lesson_statement_name_grid_position_step.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { property_get } from "./property_get.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_grid_position } from "./app_code_lesson_statement_name_grid_position.mjs";
export function app_code_lesson_statement_name_grid_index() {
  arguments_assert(arguments, 0);
  ("the number of a seat from its row and column: let start = row * width; let index = start + column; - the grid-position lesson turned around");
  ("The example is the grid-position lesson's example turned back, row 2 column 1 in rows of 3 being seat 7, so the two lessons read as one fact seen from both ends.");
  ("No two programs share an answer, and no answer is one of the numbers on its own screen.");
  let names = ["row", "column", "width"];
  let row = list_first(names);
  let column = list_second(names);
  let width = list_last(names);
  let start = "start";
  let index = "index";
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let multiplied = js_code_binary_spaced_nb(row, times, width);
  let line_start = js_code_let_statement(start, multiplied);
  let added = js_code_binary_spaced_nb(start, plus, column);
  let line_index = js_code_let_statement(index, added);
  let step = {
    middle: [line_start, line_index],
    logged: [index],
  };
  let before = app_code_lesson_statement_name_grid_position_step();
  let middle2 = property_get(before, "middle");
  let logged2 = property_get(before, "logged");
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [index, 7],
      [width, 3],
    ],
    middle2,
    logged2,
  );
  function values_get() {
    "four of the five lists, in a fresh order each screen";
    let candidates = [
      [2, 1, 4],
      [3, 2, 5],
      [1, 4, 6],
      [4, 0, 3],
      [2, 5, 7],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let lesson = app_code_lesson_statement_formula({
    words: "Seat number from row and column",
    names,
    values_get,
    example_values: [2, 1, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_grid_position,
    remember_parts: ["we found the ", row, " and ", column, " of seat 7:"],
    remember_lines,
    explain: [
      ["Going back, every row before this one is full: ", line_start],
      ["Then we count along the row: ", line_index],
    ],
    decoys: null,
  });
  return lesson;
}
