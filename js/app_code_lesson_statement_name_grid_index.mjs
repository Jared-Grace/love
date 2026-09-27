import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_last } from "./list_last.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_grid_position_step } from "./app_code_lesson_statement_name_grid_position_step.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_seat_grid } from "./app_code_seat_grid.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_grid_position } from "./app_code_lesson_statement_name_grid_position.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
export function app_code_lesson_statement_name_grid_index() {
  arguments_assert(arguments, 0);
  ("the number of a seat from its row and column: let start = row * width; let index = start + column; - the grid-position lesson turned around");
  ("The example is the grid-position lesson's example turned back, row 2 column 1 in rows of 3 being seat 7, so the two lessons read as one fact seen from both ends, over the same picture.");
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
  function grid_draw(box) {
    "row 2, column 1 among 9 seats in rows of 3";
    app_code_seat_grid(box, 9, 3, 7);
  }
  let code = js_code_binary_result_nb("2", times, "3", "6");
  let code2 = js_code_binary_result_nb("6", plus, "1", "7");
  let lesson = app_code_lesson_statement_formula({
    words: "Seat number from row and column",
    title_code: line_start,
    names,
    values_get,
    example_values: [2, 1, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_grid_position,
    remember_parts: ["we found the ", row, " and ", column, " of seat 7:"],
    remember_lines,
    explain: [
      ["Now we go the other way: from a row and column to the seat number"],
      grid_draw,
      ["Here ", width, " is 3, and the green seat is in row 2, column 1"],
      ["Which number is it?"],
      ["The blue seats are the 2 whole rows before it"],
      ["2 rows of 3 seats hold 6 seats:"],
      ["", code],
      ["So row 2 starts at seat 6: ", line_start],
      ["Then we count 1 along the row, for column 1:"],
      ["", code2],
      ["So the seat is number 7: ", line_index],
      ["Row 2, column 1 in rows of 3 is seat 7:"],
    ],
    decoys: null,
  });
  return lesson;
}
