import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_code_lesson_reference_draw } from "./app_code_lesson_reference_draw.mjs";
import { fn_name } from "./fn_name.mjs";
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
import { app_code_chair_grid } from "./app_code_chair_grid.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_line_pointed_draw } from "./app_code_line_pointed_draw.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_remainder } from "./app_code_lesson_statement_name_remainder.mjs";
export function app_code_lesson_statement_name_grid_position() {
  arguments_assert(arguments, 0);
  ("the row and column of a numbered chair in rows of chairs: let row = Math.floor(chair / columns); let column = chair % columns;");
  ("Chairs are numbered from 0, as positions in code are, so chair 0 is row 0 column 0. The writing says it with chairs rather than lists, which are not taught yet.");
  ("No two programs share an answer, and neither line of an answer is the number of columns it divides by.");
  ("The writing follows the human's outline, 2026-09-27, one light blue container per group of its lines: the chairs, how they are numbered with the grid, the row, the column by taking away the rows before, and the column by the remainder, so % arrives as a shortcut for a subtraction the reader has just done.");
  ("Every pointed thing wears the grid's colour for it: chair 7 the green, the blue chairs and the first and last of them the blue, a row number the row headings' colour and a column number the column headings'. A number that only counts, such as the 2 in 2 whole rows, stays plain writing, so a colour always means a place on the grid. The one exception is the 3 chairs in a row, which wears the fifth colour everywhere it is said or divided by, so the 3 in 7 / 3 and 7 % 3 is seen to be the row's width, asked by the human 2026-09-27. The 6 chairs in the rows before are listed out, 0 to 5, each in the blue the grid fills them with, so the 6 is seen to be those chairs rather than said. Asked by the human, 2026-09-27; not picked: tinting the chairs by row or column, which would bury the blue and green the explanation leans on.");
  ("The names are chair and columns, the human's choice, 2026-09-27, so the formula reads as the sentence it is; the reasons and the names not picked are with the lines, in ",
    fn_name("app_code_lesson_statement_name_grid_position_step"),
    ".");
  let names = ["chair", "columns"];
  let step = app_code_lesson_statement_name_grid_position_step();
  let middle = property_get(step, "middle");
  let line_column = list_second(middle);
  let chair = list_first(names);
  let columns = list_second(names);
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
    app_code_chair_grid(box, 9, 3, 7);
  }
  let blue = "blue chairs";
  let color_before = app_code_highlight_color();
  let color_chair = app_code_highlight_color_second();
  let color_row = app_code_highlight_color_third();
  let color_column = app_code_highlight_color_fourth();
  let color_count = app_code_highlight_color_fifth();
  function pointed(parts, row_numbers, column_numbers) {
    "a line wearing the grid's colours: the blue chairs blue, chair 7 green, the row and column numbers it names in the headings' colours, and the 3 chairs in a row in the fifth colour";
    let draw = app_code_line_pointed_draw(parts, [
      [[blue], color_before],
      [["7"], color_chair],
      [row_numbers, color_row],
      [column_numbers, color_column],
      [["3"], color_count],
    ]);
    return draw;
  }
  let next = app_code_explain_container_next;
  let combined = js_code_binary_spaced_nb(chair, slash, columns);
  let row_formula = js_code_call_args(name, [combined]);
  let divided = js_code_binary_spaced_nb("7", slash, "3");
  let floored = js_code_call_args(name, [divided]);
  let row_found = js_code_binary_spaced_nb(floored, same, "2");
  let code = js_code_binary_result_nb("7", minus, "6", "1");
  let column_formula = js_code_binary_spaced_nb(chair, percent, columns);
  let code2 = js_code_binary_result_nb("7", percent, "3", "1");
  let held = app_code_line_pointed_draw(
    [
      "Those 2 rows hold 6 chairs: ",
      "0",
      " ",
      "1",
      " ",
      "2",
      " ",
      "3",
      " ",
      "4",
      " ",
      "5",
    ],
    [[["0", "1", "2", "3", "4", "5"], color_before]],
  );
  let v = pointed(
    ["So the three columns are: ", "0", ", ", "1", " and ", "2"],
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
    ["The ", "", blue, "", " are the whole rows before chair ", "7"],
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
    ["How do we calculate the column of chair ", "7", "?"],
    [],
    [],
  );
  let v10 = pointed(
    ["Here's one way to calculate the column of chair ", "7", ":"],
    [],
    [],
  );
  let v11 = pointed(
    [
      "Chair ",
      "7",
      " is 1 past that group of 6, so it is in column ",
      "1",
      ":",
    ],
    [],
    ["1"],
  );
  let v12 = pointed(["", code], [], ["1"]);
  let v13 = pointed(
    ["Here's another way to calculate the column of chair ", "7", ":"],
    [],
    [],
  );
  let v14 = pointed(
    ["", "1", " is what is left over, which you already know is the remainder"],
    [],
    ["1"],
  );
  function remainder_draw(box, context) {
    "the remainder sentence, ending with which lesson taught the remainder as a button to it, so a learner who does not know it can go and look";
    let line = v14(box);
    html_span_text_content(line, ", from ");
    app_code_lesson_reference_draw(
      line,
      context,
      app_code_lesson_statement_name_remainder,
    );
    html_span_text_content(line, ":");
  }
  let count_line = pointed(
    ["Here, there are ", "3", " columns: each row has ", "3", " chairs"],
    [],
    [],
  );
  let v15 = pointed(["", code2], [], ["1"]);
  let v16 = pointed(
    [
      "Chair ",
      "7",
      " in rows of ",
      "3",
      " is in row ",
      "2",
      ", column ",
      "1",
      ":",
    ],
    ["2"],
    ["1"],
  );
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
      next,
      v9,
      v10,
      held,
      v11,
      v12,
      next,
      v13,
      remainder_draw,
      ["", column_formula],
      v15,
      v16,
    ],
    decoys: null,
  });
  return lesson;
}
