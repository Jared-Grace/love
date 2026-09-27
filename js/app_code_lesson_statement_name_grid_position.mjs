import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_statement_name_grid_position_step } from "./app_code_lesson_statement_name_grid_position_step.mjs";
import { property_get } from "./property_get.mjs";
import { list_second } from "./list_second.mjs";
import { list_first } from "./list_first.mjs";
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
import { app_code_line_ends_middle_draw } from "./app_code_line_ends_middle_draw.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_remainder } from "./app_code_lesson_statement_name_remainder.mjs";
export function app_code_lesson_statement_name_grid_position() {
  arguments_assert(arguments, 0);
  ("the row and column of a numbered chair in rows of equal width: let row = Math.floor(index / width); let column = index % width;");
  ("Chairs are numbered from 0, as positions in code are, so chair 0 is row 0 column 0. The writing says it with chairs rather than lists, which are not taught yet.");
  ("No two programs share an answer, and neither line of an answer is the width it divides by.");
  ("The writing follows the human's outline, 2026-09-27, one light blue container per group of its lines: the chairs, how they are numbered with the grid, the row, the column by taking away the rows before, and the column by the remainder, so % arrives as a shortcut for a subtraction the reader has just done. Chair 7 wears the grid's green and the blue chairs the grid's blue.");
  ("Picked: the code keeps the names index and width. Not picked: the outline's chair_number and column_count, because the title line let column = chair_number % column_count; is past the 30-character title limit, the row line wraps on a phone, and the next lesson, which goes the other way, names them index and width. The writing says what each name means where the formula first appears.");
  let names = ["index", "width"];
  let step = app_code_lesson_statement_name_grid_position_step();
  let middle = property_get(step, "middle");
  let line_column = list_second(middle);
  let index = list_first(names);
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
    "chair 7 among 9 chairs in rows of 3";
    app_code_seat_grid(box, 9, 3, 7);
  }
  let blue = "blue chairs";
  function pointed(parts) {
    "a line whose 7 wears the grid's green and whose blue chairs wear its blue";
    let draw = app_code_line_ends_middle_draw(parts, [blue], ["7"]);
    return draw;
  }
  let next = app_code_explain_container_next;
  let combined = js_code_binary_spaced_nb(index, slash, width);
  let row_formula = js_code_call_args(name, [combined]);
  let divided = js_code_binary_spaced_nb("7", slash, "3");
  let floored = js_code_call_args(name, [divided]);
  let row_found = js_code_binary_spaced_nb(floored, same, "2");
  let code = js_code_binary_result_nb("7", minus, "6", "1");
  let column_formula = js_code_binary_spaced_nb(index, percent, width);
  let code2 = js_code_binary_result_nb("7", percent, "3", "1");
  let v = pointed(["How do we calculate the row of chair ", "7", "?"]);
  let v2 = pointed([
    "The ",
    "",
    blue,
    "",
    " are the whole rows before chair 7",
  ]);
  let v3 = pointed(["How do we calculate the column of chair ", "7", "?"]);
  let v4 = pointed([
    "Here's one way to calculate the column of chair ",
    "7",
    ":",
  ]);
  let v5 = pointed([
    "Here's another way to calculate the column of chair ",
    "7",
    ":",
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "Row and column of a chair",
    title_code: line_column,
    names,
    values_get,
    example_values: [7, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_remainder,
    remember_parts: ["we can give the remainder (", percent, ") a name:"],
    remember_lines,
    explain: [
      ["Suppose there are chairs"],
      ["The chairs are in rows and columns"],
      ["So the chairs make a rectangle"],
      next,
      ["The chairs are numbered: 0, 1, 2, ..."],
      ["So the first chair is 0"],
      ["The second chair is 1"],
      ["The third chair is 2"],
      ["And so on"],
      ["The chairs in the first row are numbered, first"],
      [
        "Once all the chairs in the first row are numbered, then the chairs in the second row are numbered",
      ],
      ["This continues with the third and fourth rows, and so on"],
      grid_draw,
      ["Here, there are 3 columns: each row has 3 chairs"],
      ["So the three columns are: 0, 1 and 2"],
      ["The rows are also counted starting with 0"],
      ["So the first row is row 0"],
      ["The second row is row 1"],
      ["And so on"],
      next,
      v,
      v2,
      ["2 whole rows fit, so chair 7 is in row 2"],
      [
        "We can use this formula, where ",
        index,
        " is the chair's number and ",
        width,
        " is how many columns:",
      ],
      ["", row_formula],
      ["", row_found],
      next,
      v3,
      v4,
      ["Those 2 rows hold 6 chairs (0 to 5)"],
      ["Chair 7 is 1 past them, so it is in column 1:"],
      ["", code],
      next,
      v5,
      ["1 is what is left over, which you already know is the remainder:"],
      ["", column_formula],
      ["", code2],
      ["Chair 7 in rows of 3 is in row 2, column 1:"],
    ],
    decoys: null,
  });
  return lesson;
}
