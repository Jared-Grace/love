import { html_cycle_code } from "./html_cycle_code.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { html_style_set } from "./html_style_set.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_arrow_inline } from "./app_code_arrow_inline.mjs";
import { app_code_arrow_turned } from "./app_code_arrow_turned.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_square_grid } from "./app_code_square_grid.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_rows_apart } from "./app_code_lesson_statement_name_rows_apart.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_grid_steps() {
  arguments_assert(arguments, 0);
  ("how many steps between two squares of a grid, moving up, down, left or right: let rows = Math.abs(r2 - r1); let cols = Math.abs(c2 - c1); let steps = rows + cols; - the last of three lessons, after Rows down and Rows apart. In DSA it is the distance between two cells of a grid when moves go along rows and columns, often called the Manhattan distance.");
  ("Columns first appear here, as the same line as the rows with c for r, so the lesson asks one new thing: that the two counts add. Not picked: a lesson of its own for columns, which would teach the rows line again under other names.");
  ("The answers 5, 4, 6, 2 and 7 all differ, and one pair has no rows to move, so a 0 is added once. The writing works row 1 column 1 to row 4 column 3, which no question repeats, and the example below is another square pair.");
  ("The writing is a first draft, not yet the human's, 2026-10-01.");
  let names = ["r1", "c1", "r2", "c2"];
  let [r, c, r2, c2] = names;
  let rows = "rows";
  let cols = "cols";
  let steps = "steps";
  let math_abs = "Math.abs";
  let minus = js_operator_minus_symbol();
  let plus = js_operator_plus_symbol();
  let same = js_operator_triple_equal_symbol();
  function apart_line(name, a, b) {
    "let name = Math.abs(b - a);";
    let less = js_code_binary_spaced_nb(b, minus, a);
    let apart = js_code_call_args(math_abs, [less]);
    let line = js_code_let_statement(name, apart);
    return line;
  }
  let line_rows = apart_line(rows, r, r2);
  let line_cols = apart_line(cols, c, c2);
  let added = js_code_binary_spaced_nb(rows, plus, cols);
  let line_steps = js_code_let_statement(steps, added);
  let step = {
    middle: [line_rows, line_cols, line_steps],
    logged: [steps],
  };
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [r, 5],
      [r2, 2],
    ],
    [line_rows],
    [rows],
  );
  function values_get() {
    "four of the five square pairs, in a fresh order each screen";
    let candidates = [
      [0, 0, 2, 3],
      [4, 1, 1, 2],
      [2, 5, 3, 0],
      [1, 2, 1, 4],
      [5, 4, 2, 0],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  function apart_worked(b, a, answer) {
    "Math.abs(b - a) === answer, with numbers";
    let less = js_code_binary_spaced_nb(b, minus, a);
    let call = js_code_call_args(math_abs, [less]);
    let line = js_code_binary_spaced_nb(call, same, answer);
    return line;
  }
  let rows_worked = apart_worked("4", "1", "3");
  let cols_worked = apart_worked("3", "1", "2");
  let total = js_code_binary_result_nb("3", plus, "2", "5");
  let start_color = app_code_highlight_color_second();
  let end_color = app_code_highlight_color();
  function arrow(degrees) {
    "a drawing of the code app's arrow turned degrees clockwise from rightwards, for one square";
    function draw(square) {
      app_code_arrow_turned(square, degrees);
    }
    return draw;
  }
  function moves_draw(box) {
    "you in the middle square, an arrow in each square one step away, asked by the human 2026-10-01; the arrows are the drawn ones the code app uses elsewhere, which centre exactly where a typed arrow sits low";
    let v = arrow(270);
    let v2 = arrow(90);
    let v3 = arrow(180);
    let v4 = arrow(0);
    app_code_square_grid(box, 3, 3, false, [
      [1, 1, "🙂", start_color],
      [0, 1, v, null],
      [2, 1, v2, null],
      [1, 0, v3, null],
      [1, 2, v4, null],
    ]);
  }
  function moves_said(box) {
    "the sentence naming the four moves, each direction word with its arrow next to it, asked by the human 2026-10-01; the same drawn arrows as the picture below it, so the words and the picture match";
    let line = html_div(box);
    html_span_text(line, "You can move one square at a time: up ");
    app_code_arrow_inline(line, 270);
    html_span_text(line, ", down ");
    app_code_arrow_inline(line, 90);
    html_span_text(line, ", left ");
    app_code_arrow_inline(line, 180);
    html_span_text(line, " or right ");
    app_code_arrow_inline(line, 0);
  }
  function travel_said(box) {
    "the count of the filled squares, with the words blue squares coloured as the squares are filled, asked by the human 2026-10-01, so the sentence points at the picture above it; bold, because coloured thin letters read faintly";
    let line = html_div(box);
    html_cycle_code(line, ["And we travel ", "5", " "]);
    let blue = html_span_text(line, "blue squares");
    html_font_color_set(blue, end_color);
    html_style_set(blue, "font-weight", "bold");
    html_span_text(line, " total");
  }
  function squares_draw(box) {
    "the two squares of the question, row 1 column 1 and row 4 column 3, with the rows and columns numbered, and a path between them filled in: down the rows first, then right along the columns, asked by the human 2026-10-01";
    app_code_square_grid(box, 5, 4, true, [
      [1, 1, "🙂", start_color],
      [2, 1, "", end_color],
      [3, 1, "", end_color],
      [4, 1, "", end_color],
      [4, 2, "", end_color],
      [4, 3, "🏁", end_color],
    ]);
  }
  let lesson = app_code_lesson_statement_formula({
    words: "Steps on a grid",
    title_code: line_steps,
    names,
    values_get,
    example_values: [2, 0, 0, 4],
    step,
    remember_lesson: app_code_lesson_statement_name_rows_apart,
    remember_parts: ["we can find how many rows apart two rows are:"],
    remember_lines,
    explain: [
      ["Suppose there is a grid of squares"],
      moves_said,
      moves_draw,
      [
        "For the grid of squares, its rows and its columns are both numbered starting with ",
        "0",
      ],
      [
        "How many steps are there from row ",
        "1",
        ", column ",
        "1",
        " to row ",
        "4",
        ", column ",
        "3",
        "?",
      ],
      squares_draw,
      [
        "If we travel ",
        "3",
        " squares down and ",
        "2",
        " squares to the right, then we will travel to the second position",
      ],
      travel_said,
      app_code_explain_container_next,
      [
        "But how can we calculate the ",
        "3",
        " squares down and ",
        "2",
        " squares to the right from just the positions?",
      ],
      ["First the rows: from row ", "1", " to row ", "4", " is"],
      ["", rows_worked],
      ["Then the columns: from column ", "1", " to column ", "3", " is"],
      ["", cols_worked],
      ["Each step moves one row or one column, so we add them together:"],
      ["", total],
      app_code_explain_container_next,
      ["Suppose the first square is at row ", r, ", column ", c],
      ["And the second square is at row ", r2, ", column ", c2],
      ["Here is code that finds how many steps between the two squares:"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
