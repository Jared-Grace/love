import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { app_code_lesson_statement_name_grid_position_step } from "./app_code_lesson_statement_name_grid_position_step.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_name_middle_step } from "./app_code_lesson_statement_name_middle_step.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_chair_grid } from "./app_code_chair_grid.mjs";
import { app_code_chair_line_pointed } from "./app_code_chair_line_pointed.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_line_pointed_draw } from "./app_code_line_pointed_draw.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
import { js_code_math_floor_name } from "./js_code_math_floor_name.mjs";
import { js_operator_division_symbol } from "./js_operator_division_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_middle } from "./app_code_lesson_statement_name_middle.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
export function app_code_lesson_statement_name_grid_row() {
  arguments_assert(arguments, 0);
  ("the row of a numbered chair in rows of chairs: let row = Math.floor(chair / columns); - the first half of the row-and-column lesson, split out so each lesson teaches one line");
  ("Split from the row-and-column lesson at the human's word, 2026-09-27, so a learner meets the row alone and then the column with the row already known. Its line is the row-and-column lesson's first line, asked of that lesson's own lines rather than written again, so the two cannot drift. Not picked: splitting the other way round, column first, which would teach % before the picture of whole rows that makes it make sense.");
  ("Chairs are numbered from 0, as positions in code are, so chair 0 is row 0 column 0. The writing says it with chairs rather than lists, which are not taught yet. It reminds the lesson before it, the middle, whose Math.floor of a division is the tool this line uses.");
  ("No two programs share an answer, and no answer is the number of columns it divides by or the chair it starts from.");
  ("The title shows the right side of the line alone, Math.floor(chair / columns), because the whole line runs past the 30 characters a title holds.");
  let names = ["chair", "columns"];
  let chair = list_first(names);
  let columns = list_second(names);
  let both = app_code_lesson_statement_name_grid_position_step();
  let middle_both = property_get(both, "middle");
  let logged_both = property_get(both, "logged");
  let line_row = list_first(middle_both);
  let row = list_first(logged_both);
  let step = {
    middle: [line_row],
    logged: [row],
  };
  let middle_step = app_code_lesson_statement_name_middle_step();
  let middle_lines = property_get(middle_step, "middle");
  let middle_logged = property_get(middle_step, "logged");
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      ["low", 2],
      ["high", 7],
    ],
    middle_lines,
    middle_logged,
  );
  function values_get() {
    "four of the five pairs, in a fresh order each screen";
    let candidates = [
      [10, 4],
      [9, 2],
      [17, 5],
      [11, 2],
      [13, 2],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  function grid_draw(box) {
    "chair 7 among 9 chairs in rows of 3";
    app_code_chair_grid(box, 9, 3, 7);
  }
  let pointed = app_code_chair_line_pointed;
  let color_before = app_code_highlight_color();
  function chairs_pointed(parts) {
    "a line about the first chairs, whose numbers wear the blue those chairs are filled with in the grid";
    let draw = app_code_line_pointed_draw(parts, [
      [["0", "1", "2"], color_before],
    ]);
    return draw;
  }
  let numbered = chairs_pointed([
    "The chairs are numbered: ",
    "0",
    ", ",
    "1",
    ", ",
    "2",
    ", ...",
  ]);
  let first_chair = chairs_pointed(["So the first chair is ", "0"]);
  let second_chair = chairs_pointed(["The second chair is ", "1"]);
  let third_chair = chairs_pointed(["The third chair is ", "2"]);
  let next = app_code_explain_container_next;
  let name = js_code_math_floor_name();
  let slash = js_operator_division_symbol();
  let same = js_operator_triple_equal_symbol();
  let combined = js_code_binary_spaced_nb(chair, slash, columns);
  let row_formula = js_code_call_args(name, [combined]);
  let divided = js_code_binary_spaced_nb("7", slash, "3");
  let floored = js_code_call_args(name, [divided]);
  let row_found = js_code_binary_spaced_nb(floored, same, "2");
  let count_line = pointed(
    ["Here, there are ", "3", " columns: each row has ", "3", " chairs"],
    [],
    [],
  );
  let v = pointed(
    ["So the ", "3", " columns are: ", "0", ", ", "1", " and ", "2"],
    [],
    ["0", "1", "2"],
  );
  let v2 = pointed(
    ["The rows are also counted starting with ", "0"],
    ["0"],
    [],
  );
  let v3 = pointed(["So the first row is row ", "0"], ["0"], []);
  let v4 = pointed(["The second row is row ", "1"], ["1"], []);
  let v5 = pointed(["How do we calculate the row of chair ", "7", "?"], [], []);
  let v6 = pointed(
    ["The ", "", "blue chairs", "", " are the whole rows before chair ", "7"],
    [],
    [],
  );
  let v7 = pointed(
    ["2 whole rows fit, so chair ", "7", " is in row ", "2"],
    ["2"],
    [],
  );
  let v8 = pointed(["", row_found], ["2"], []);
  let v9 = pointed(
    ["Chair ", "7", " in rows of ", "3", " is in row ", "2", ":"],
    ["2"],
    [],
  );
  let color = app_code_highlight_color_second();
  let color2 = app_code_highlight_color_fifth();
  let color3 = app_code_highlight_color_third();
  let lesson = app_code_lesson_statement_formula({
    words: "Row of a chair",
    title_code: row_formula,
    names,
    values_get,
    example_values: [7, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_middle,
    remember_parts: ["we can divide and round down:"],
    remember_lines,
    explain: [
      ["Suppose there are chairs"],
      ["The chairs are in rows and columns"],
      ["So the chairs make a rectangle"],
      next,
      numbered,
      first_chair,
      second_chair,
      third_chair,
      ["And so on"],
      ["The chairs in the first row are numbered, first"],
      [
        "Once all the chairs in the first row are numbered, then the chairs in the second row are numbered",
      ],
      ["This continues with the third and fourth rows, and so on"],
      grid_draw,
      count_line,
      v,
      v2,
      v3,
      v4,
      ["And so on"],
      next,
      v5,
      v6,
      v7,
      ["We can use this formula:"],
      ["", row_formula],
      v8,
      v9,
    ],
    decoys: null,
    example_pointers: [
      [["7"], color],
      [["3"], color2],
      [["2"], color3],
    ],
  });
  return lesson;
}
