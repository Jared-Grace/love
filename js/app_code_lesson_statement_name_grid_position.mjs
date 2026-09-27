import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_code_lesson_statement_name_grid_position_step } from "./app_code_lesson_statement_name_grid_position_step.mjs";
import { property_get } from "./property_get.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_percent_symbol } from "./js_operator_percent_symbol.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_chair_grid } from "./app_code_chair_grid.mjs";
import { app_code_chair_line_pointed } from "./app_code_chair_line_pointed.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_line_pointed_draw } from "./app_code_line_pointed_draw.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_code_lesson_reference_draw } from "./app_code_lesson_reference_draw.mjs";
import { app_code_lesson_statement_name_remainder } from "./app_code_lesson_statement_name_remainder.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_grid_row } from "./app_code_lesson_statement_name_grid_row.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
export function app_code_lesson_statement_name_grid_position() {
  arguments_assert(arguments, 0);
  ("the row and column of a numbered chair in rows of chairs: let row = Math.floor(chair / columns); let column = chair % columns;");
  ("The row is taught by the lesson before this one, ",
    fn_name("app_code_lesson_statement_name_grid_row"),
    ", split out at the human's word, 2026-09-27; this lesson reminds it and teaches only the column, so its explanation opens on the grid the reader has just seen rather than on chairs from the start.");
  ("No two programs share an answer, and no answer is the number of columns it divides by.");
  ("THE PROGRAM FINDS THE COLUMN ONLY, at the human's question, 2026-09-27: why work out the row here, when the lesson before teaches it? It had written out both so the two lessons ended as one fact; now each lesson's program is its own formula, and the row is only reminded and read off the grid. The shared step still holds both lines, for the lesson after this one, which turns both around.");
  ("The writing follows the human's outline, 2026-09-27, one light blue container per group of its lines: the grid again, the column by taking away the rows before, and the column by the remainder, so % arrives as a shortcut for a subtraction the reader has just done.");
  ("Every pointed thing wears the grid's colour for it, as the row lesson's does, drawn by the one line both use. A number that only counts, such as the 2 in 2 whole rows, stays plain writing, so a colour always means a place on the grid. The one exception is the 3 chairs in a row, which wears the fifth colour everywhere it is said or divided by, so the 3 in 7 / 3 and 7 % 3 is seen to be the row's width, asked by the human 2026-09-27. The 6 chairs in the rows before are listed out, 0 to 5, each in the blue the grid fills them with, so the 6 is seen to be those chairs rather than said.");
  ("The names are chair and columns, the human's choice, 2026-09-27, so the formula reads as the sentence it is; the reasons and the names not picked are with the lines, in ",
    fn_name("app_code_lesson_statement_name_grid_position_step"),
    ".");
  let names = ["chair", "columns"];
  let both = app_code_lesson_statement_name_grid_position_step();
  let middle = property_get(both, "middle");
  let logged = property_get(both, "logged");
  let line_row = list_first(middle);
  let line_column = list_second(middle);
  let row = list_first(logged);
  let column = list_second(logged);
  let step = {
    middle: [line_column],
    logged: [column],
  };
  let chair = list_first(names);
  let columns = list_second(names);
  let percent = js_operator_percent_symbol();
  let minus = js_operator_minus_symbol();
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [chair, 7],
      [columns, 3],
    ],
    [line_row],
    [row],
  );
  function values_get() {
    "four of the five pairs, in a fresh order each screen";
    let candidates = [
      [10, 4],
      [14, 5],
      [11, 4],
      [17, 6],
      [13, 7],
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
  let next = app_code_explain_container_next;
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
  let row_known = pointed(
    [
      "Chair ",
      "7",
      " is in row ",
      "2",
      ", after the ",
      "",
      "blue chairs",
      "",
      "",
    ],
    ["2"],
    [],
  );
  let v = pointed(
    ["There are ", "3", " columns: ", "0", ", ", "1", " and ", "2"],
    [],
    ["0", "1", "2"],
  );
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
  let v15 = pointed(["", code2], [], ["1"]);
  let v16 = pointed(
    ["Chair ", "7", " in rows of ", "3", " is in column ", "1", ":"],
    [],
    ["1"],
  );
  let color = app_code_highlight_color_second();
  let color2 = app_code_highlight_color_fifth();
  let color4 = app_code_highlight_color_fourth();
  let v2 = pointed(["", column_formula], [], []);
  let lesson = app_code_lesson_statement_formula({
    words: "Column of a chair",
    title_code: line_column,
    names,
    values_get,
    example_values: [7, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_grid_row,
    remember_parts: ["we found the ", row, " of chair 7:"],
    remember_lines,
    explain: [
      grid_draw,
      row_known,
      v,
      next,
      v9,
      v10,
      held,
      v11,
      v12,
      next,
      v13,
      remainder_draw,
      v2,
      v15,
      v16,
    ],
    decoys: null,
    example_pointers: [
      [["7"], color],
      [["3"], color2],
      [["1"], color4],
    ],
  });
  return lesson;
}
