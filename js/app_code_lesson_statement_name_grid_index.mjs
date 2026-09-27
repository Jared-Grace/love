import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
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
import { app_code_chair_grid } from "./app_code_chair_grid.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_line_pointed_draw } from "./app_code_line_pointed_draw.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_grid_position } from "./app_code_lesson_statement_name_grid_position.mjs";
export function app_code_lesson_statement_name_grid_index() {
  arguments_assert(arguments, 0);
  ("the number of a chair from its row and column: let start = row * columns; let chair = start + column; - the grid-position lesson turned around");
  ("The example is the grid-position lesson's example turned back, row 2 column 1 in rows of 3 being chair 7, so the two lessons read as one fact seen from both ends, over the same picture. It shares that lesson's names and colours: the blue chairs blue, chair 7 and the green chair green, a row number the row headings' colour and a column number the column headings', and the 3 chairs in a row the fifth colour, as in that lesson.");
  ("No two programs share an answer, and no answer is one of the numbers on its own screen.");
  let names = ["row", "column", "columns"];
  let row = list_first(names);
  let column = list_second(names);
  let columns = list_last(names);
  let start = "start";
  let chair = "chair";
  let times = js_operator_asterisk_symbol();
  let plus = js_operator_plus_symbol();
  let multiplied = js_code_binary_spaced_nb(row, times, columns);
  let line_start = js_code_let_statement(start, multiplied);
  let added = js_code_binary_spaced_nb(start, plus, column);
  let line_chair = js_code_let_statement(chair, added);
  let step = {
    middle: [line_start, line_chair],
    logged: [chair],
  };
  let before = app_code_lesson_statement_name_grid_position_step();
  let middle2 = property_get(before, "middle");
  let logged2 = property_get(before, "logged");
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [chair, 7],
      [columns, 3],
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
    "row 2, column 1 among 9 chairs in rows of 3";
    app_code_chair_grid(box, 9, 3, 7);
  }
  let blue = "blue chairs";
  let green = "green chair";
  let color_before = app_code_highlight_color();
  let color_chair = app_code_highlight_color_second();
  let color_row = app_code_highlight_color_third();
  let color_column = app_code_highlight_color_fourth();
  let color_count = app_code_highlight_color_fifth();
  function pointed(parts) {
    "a line wearing the grid's colours: the blue chairs blue, chair 7 green, row 2 and column 1 in the headings' colours, and the 3 chairs in a row in the fifth colour";
    let draw = app_code_line_pointed_draw(parts, [
      [[blue], color_before],
      [[green, "7"], color_chair],
      [["2"], color_row],
      [["1"], color_column],
      [["3"], color_count],
    ]);
    return draw;
  }
  let code = js_code_binary_result_nb("2", times, "3", "6");
  let code2 = js_code_binary_result_nb("6", plus, "1", "7");
  let v = pointed([
    "Here there are ",
    "3",
    " columns, and the ",
    "",
    green,
    "",
    " is in row ",
    "2",
    ", column ",
    "1",
  ]);
  let v2 = pointed(["The ", "", blue, "", " are the 2 whole rows before it"]);
  let v_held = pointed(["2 rows of ", "3", " chairs hold 6 chairs:"]);
  let v3 = pointed(["", code]);
  let v4 = pointed(["So row ", "2", " starts at chair 6: ", line_start]);
  let v5 = pointed(["Then we count 1 along the row, for column ", "1", ":"]);
  let v6 = pointed(["", code2]);
  let v7 = pointed(["So the chair is number ", "7", ": ", line_chair]);
  let v8 = pointed([
    "Row ",
    "2",
    ", column ",
    "1",
    " in rows of ",
    "3",
    " is chair ",
    "7",
    ":",
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "Chair number from row and column",
    title_code: line_start,
    names,
    values_get,
    example_values: [2, 1, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_grid_position,
    remember_parts: ["we found the ", row, " and ", column, " of chair 7:"],
    remember_lines,
    explain: [
      ["Now we go the other way: from a row and column to the chair number"],
      grid_draw,
      v,
      ["Which number is it?"],
      v2,
      v_held,
      v3,
      v4,
      v5,
      v6,
      v7,
      v8,
    ],
    decoys: null,
  });
  return lesson;
}
