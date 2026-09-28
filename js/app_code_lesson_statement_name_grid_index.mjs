import { list_join_newline } from "./list_join_newline.mjs";
import { eval_console_log_lines } from "./eval_console_log_lines.mjs";
import { app_code_code_lines_writes_out } from "./app_code_code_lines_writes_out.mjs";
import { html_div } from "./html_div.mjs";
import { app_code_lesson_reference_draw } from "./app_code_lesson_reference_draw.mjs";
import { app_code_lesson_statement_name_grid_row } from "./app_code_lesson_statement_name_grid_row.mjs";
import { app_code_line_pointed_draw } from "./app_code_line_pointed_draw.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { html_span_text_content } from "./html_span_text_content.mjs";
import { app_code_span_text_highlight_color } from "./app_code_span_text_highlight_color.mjs";
import { each_index } from "./each_index.mjs";
import { greater_than } from "./greater_than.mjs";
import { app_code_chair_line_pointed } from "./app_code_chair_line_pointed.mjs";
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
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_grid_position } from "./app_code_lesson_statement_name_grid_position.mjs";
export function app_code_lesson_statement_name_grid_index() {
  arguments_assert(arguments, 0);
  ("the number of a chair from its row and column: let start = row * columns; let chair = start + column; - the grid-position lesson turned around");
  ("The example is the grid-position lesson's example turned back, row 2 column 1 in rows of 3 being chair 7, so the two lessons read as one fact seen from both ends, over the same picture. It shares that lesson's names and colours: the blue chairs blue, chair 7 and the green chair green, a row number the row headings' colour and a column number the column headings', and the 3 chairs in a row the fifth colour, as in that lesson.");
  ("No two programs share an answer, and no answer is one of the numbers on its own screen.");
  ("The reminder shows only the column lesson's program, the lesson it names, then says the lesson before that found the row, with a button to it and the row line, 2026-09-28. The human asked whether it should show just one of the two and wrote row; read as the previous lesson's own line, which is the column, since the row is its own lesson one further back. Not picked: the row program alone, which is not what the previous lesson taught; and both lines in one program, as before, which showed two lessons as one. Its lines are drawn by the chair lessons' one pointed line, so the words row and column wear the headings' colours here as they do there.");
  ("Wording from the human, 2026-09-27: the sum 2 * 3 === 6 is followed by the chairs it counts, 0 to 5 in blue, and the step to the chair says why it adds 1 - because the chair is in column 1 - rather than counting along the row. The list is drawn beside the chip rather than through the pointed line, because that line colours every 1 the column colour and every 2 the row colour, and these 1 and 2 are chairs.");
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
  let line_row = list_first(middle2);
  let second = list_second(middle2);
  let second2 = list_second(logged2);
  let remember_program = app_code_lesson_statement_name_swap_program(
    [
      [chair, 7],
      [columns, 3],
    ],
    [second],
    [second2],
  );
  function remember_lines(box, context) {
    "the column lesson's own program, then one line saying the lesson before it found the row, with a button to it and the row's line";
    let code_before = list_join_newline(remember_program);
    let output_before = eval_console_log_lines(code_before);
    app_code_code_lines_writes_out(box, remember_program, output_before);
    let line = html_div(box);
    html_span_text_content(line, "And the lesson before it, ");
    app_code_lesson_reference_draw(
      line,
      context,
      app_code_lesson_statement_name_grid_row,
    );
    html_span_text_content(line, ", found its ");
    app_code_span_text_highlight_color(line, row, color_row);
    html_span_text_content(line, ":");
    let draw = app_code_line_pointed_draw(["", line_row], []);
    draw(box);
  }
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
  let color_chair = app_code_highlight_color_second();
  let color_row = app_code_highlight_color_third();
  let color_column = app_code_highlight_color_fourth();
  let color_count = app_code_highlight_color_fifth();
  function pointed(parts) {
    "a line wearing the grid's colours: the blue chairs blue, chair 7 green, row 2 and column 1 in the headings' colours, and the 3 chairs in a row in the fifth colour";
    let draw = app_code_chair_line_pointed(parts, ["2"], ["1"]);
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
  let color_before = app_code_highlight_color();
  function held_draw(box) {
    "the sum 2 * 3 === 6, then the 6 chairs it counts listed out, 0 to 5, each in the blue the grid fills them with, as the column lesson lists them";
    let line = v3(box);
    html_span_text_content(line, " (");
    let listed = ["0", "1", "2", "3", "4", "5"];
    function listed_draw(text, index) {
      if (greater_than(index, 0)) {
        html_span_text_content(line, " ");
      }
      app_code_span_text_highlight_color(line, text, color_before);
    }
    each_index(listed, listed_draw);
    html_span_text_content(line, ")");
  }
  let v4 = pointed(["So row ", "2", " starts at chair 6: ", line_start]);
  let v5 = pointed(["Then we add 1 because the chair is in column ", "1", ":"]);
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
  let v9 = pointed([
    "Now we go the other way: from a row and column to the chair number",
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "Chair number from row and column",
    title_code: line_start,
    names,
    values_get,
    example_values: [2, 1, 3],
    step,
    remember_lesson: app_code_lesson_statement_name_grid_position,
    remember_parts: ["we found the ", column, " of chair 7:"],
    remember_lines,
    explain: [
      v9,
      grid_draw,
      v,
      ["Which number is it?"],
      v2,
      v_held,
      held_draw,
      v4,
      v5,
      v6,
      v7,
      v8,
    ],
    decoys: null,
    example_pointers: [
      [["7"], color_chair],
      [["3"], color_count],
      [["2"], color_row],
      [["1"], color_column],
    ],
  });
  return lesson;
}
