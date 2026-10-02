import { app_code_square_ringed } from "./app_code_square_ringed.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_code_colored } from "./app_code_explain_code_colored.mjs";
import { app_code_highlight_color_sixth } from "./app_code_highlight_color_sixth.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_code_explain_abs_apart_colored } from "./app_code_explain_abs_apart_colored.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_arrow_turned_draw } from "./app_code_arrow_turned_draw.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_arrow_inline } from "./app_code_arrow_inline.mjs";
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
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_rows_apart } from "./app_code_lesson_statement_name_rows_apart.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_grid_steps() {
  arguments_assert(arguments, 0);
  ("how many steps between two squares of a grid, moving up, down, left or right: let rows = Math.abs(r2 - r1); let cols = Math.abs(c2 - c1); let steps = rows + cols; - the last of three lessons, after Rows down and Rows apart. In DSA it is the distance between two cells of a grid when moves go along rows and columns, often called the Manhattan distance.");
  ("Columns first appear here, as the same line as the rows with c for r, so the lesson asks one new thing: that the two counts add. Not picked: a lesson of its own for columns, which would teach the rows line again under other names.");
  ("The answers 5, 4, 6, 2 and 7 all differ, and one pair has no rows to move, so a 0 is added once. The writing works row 1 column 1 to row 4 column 3, which no question repeats, and the example below is another square pair.");
  ("The example program starts at row 3, column 1 and ends at row 0, column 5, and its numbers are coloured as the writing colours them: the rows red, the columns purple, and the names rows and cols in the colours of their counts, asked by the human 2026-10-02. No number is both a row and a column, because a pointer colours a number by its text, so a 0 in both would have to wear one colour. Not picked: the earlier 2, 0, 0, 4, whose 0 was both.");
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
  let start_color = app_code_highlight_color_sixth();
  let row_color = app_code_highlight_color_third();
  let column_color = app_code_highlight_color_fourth();
  let rows_count_color = app_code_highlight_color_second();
  let columns_count_color = app_code_highlight_color_fifth();
  let end_color = app_code_highlight_color();
  let rows_worked = app_code_explain_abs_apart_colored(
    "4",
    "1",
    "3",
    row_color,
    rows_count_color,
  );
  let cols_worked = app_code_explain_abs_apart_colored(
    "3",
    "1",
    "2",
    column_color,
    columns_count_color,
  );
  let plain = app_shared_color_code_background();
  ("3 + 2 === 5 as one code chip, the count of rows and the count of columns in the colours the lines above give them, asked by the human 2026-10-02; the answer is the steps, so it wears the blue of the squares it counts, as in King steps");
  let total_worked = app_code_explain_code_colored(
    ["3", " " + plus + " ", "2", " " + same + " ", "5"],
    [rows_count_color, plain, columns_count_color, plain, end_color],
  );
  let row_word = app_code_explain_word_colored("row", row_color);
  let column_word = app_code_explain_word_colored("column", column_color);
  let v5 = app_code_explain_number_colored("1", row_color);
  let v6 = app_code_explain_number_colored("1", column_color);
  let v7 = app_code_explain_number_colored("4", row_color);
  let v8 = app_code_explain_number_colored("3", column_color);
  let question_said = app_code_explain_said([
    "How many steps are there from ",
    row_word,
    " ",
    v5,
    ", ",
    column_word,
    " ",
    v6,
    " to ",
    row_word,
    " ",
    v7,
    ", ",
    column_word,
    " ",
    v8,
    "?",
  ]);
  let v9 = app_code_explain_word_colored("rows", row_color);
  let v10 = app_code_explain_number_colored("1", row_color);
  let v11 = app_code_explain_number_colored("4", row_color);
  let rows_said = app_code_explain_said([
    "First the ",
    v9,
    ": from ",
    row_word,
    " ",
    v10,
    " to ",
    row_word,
    " ",
    v11,
    " is",
  ]);
  let v12 = app_code_explain_word_colored("columns", column_color);
  let v13 = app_code_explain_number_colored("1", column_color);
  let v14 = app_code_explain_number_colored("3", column_color);
  let columns_said = app_code_explain_said([
    "Then the ",
    v12,
    ": from ",
    column_word,
    " ",
    v13,
    " to ",
    column_word,
    " ",
    v14,
    " is",
  ]);
  function moves_draw(box) {
    "you in the middle square, an arrow in each square one step away, asked by the human 2026-10-01; the arrows are the drawn ones the code app uses elsewhere, which centre exactly where a typed arrow sits low";
    let v = app_code_arrow_turned_draw(270);
    let v2 = app_code_arrow_turned_draw(90);
    let v3 = app_code_arrow_turned_draw(180);
    let v4 = app_code_arrow_turned_draw(0);
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
    ("the count wears the blue of the squares it counts, asked by the human 2026-10-02: the steps are the blue squares, so the steps wear blue wherever they appear, in the writing, the worked line and the program");
    html_span_text(line, "And we travel ");
    let count = app_code_explain_number_colored("5", end_color);
    count(line);
    html_span_text(line, " ");
    let blue = app_code_explain_word_colored("blue-ringed squares", end_color);
    blue(line);
    html_span_text(line, " total");
  }
  function squares_draw(box) {
    "the two squares of the question, row 1 column 1 and row 4 column 3, with the rows and columns numbered, and a path between them filled in: down the rows first, then right along the columns, asked by the human 2026-10-01";
    "each path square has a thick blue ring for the path, and is filled green when it is one of the 3 squares down and orange when it is one of the 2 squares right, the colours of the rows count and the columns count, asked by the human 2026-10-02. Not picked: solid blue, which said the path but not which count each square is part of";
    let draw7 = app_code_square_ringed("", rows_count_color);
    let draw8 = app_code_square_ringed("", rows_count_color);
    let draw9 = app_code_square_ringed("", rows_count_color);
    let draw10 = app_code_square_ringed("", columns_count_color);
    let draw11 = app_code_square_ringed("🏁", columns_count_color);
    app_code_square_grid(box, 5, 4, true, [
      [1, 1, "🙂", start_color],
      [2, 1, draw7, end_color],
      [3, 1, draw8, end_color],
      [4, 1, draw9, end_color],
      [4, 2, draw10, end_color],
      [4, 3, draw11, end_color],
    ]);
  }
  let draw = app_code_explain_number_colored(r, row_color);
  let draw2 = app_code_explain_number_colored(c, column_color);
  let draw3 = app_code_explain_said([
    "Suppose the first square is at ",
    row_word,
    " ",
    draw,
    ", ",
    column_word,
    " ",
    draw2,
  ]);
  let draw4 = app_code_explain_number_colored(r2, row_color);
  let draw5 = app_code_explain_number_colored(c2, column_color);
  let draw6 = app_code_explain_said([
    "And the second square is at ",
    row_word,
    " ",
    draw4,
    ", ",
    column_word,
    " ",
    draw5,
  ]);
  let draw12 = app_code_explain_number_colored("3", rows_count_color);
  let draw13 = app_code_explain_number_colored("2", columns_count_color);
  let draw14 = app_code_explain_said([
    "If we travel ",
    draw12,
    " squares down and ",
    draw13,
    " squares to the right, then we will travel to the second position",
  ]);
  let draw15 = app_code_explain_number_colored("3", rows_count_color);
  let draw16 = app_code_explain_number_colored("2", columns_count_color);
  let draw17 = app_code_explain_said([
    "But how can we calculate the ",
    draw15,
    " squares down and ",
    draw16,
    " squares to the right from just the positions?",
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "Steps on a grid",
    title_code: line_steps,
    names,
    values_get,
    example_values: [3, 1, 0, 5],
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
      question_said,
      squares_draw,
      draw14,
      travel_said,
      app_code_explain_container_next,
      draw17,
      rows_said,
      rows_worked,
      columns_said,
      cols_worked,
      ["Each step moves one row or one column, so we add them together:"],
      total_worked,
      app_code_explain_container_next,
      draw3,
      draw6,
      ["Here is code that finds how many steps between the two squares:"],
    ],
    decoys: null,
    example_pointers: [
      [["3", "0"], row_color],
      [["1", "5"], column_color],
      [[r, r2], row_color],
      [[c, c2], column_color],
      [[steps, "7"], end_color],
      [[rows], rows_count_color],
      [[cols], columns_count_color],
    ],
  });
  return lesson;
}
