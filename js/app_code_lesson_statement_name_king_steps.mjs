import { app_code_square_edged } from "./app_code_square_edged.mjs";
import { app_code_explain_code_colored } from "./app_code_explain_code_colored.mjs";
import { app_code_highlight_color_sixth } from "./app_code_highlight_color_sixth.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_code_explain_abs_apart_colored } from "./app_code_explain_abs_apart_colored.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_operator_triple_equal_symbol } from "./js_operator_triple_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_square_grid } from "./app_code_square_grid.mjs";
import { app_code_arrow_turned_draw } from "./app_code_arrow_turned_draw.mjs";
import { html_div } from "./html_div.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_grid_steps } from "./app_code_lesson_statement_name_grid_steps.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_king_steps() {
  arguments_assert(arguments, 0);
  ("how many steps between two squares of a grid when a step may also go diagonally, as a chess king moves: let r = Math.abs(r2 - r1); let c = Math.abs(c2 - c1); let steps = Math.max(r, c); - picked 2026-10-02 as the lesson after Grid steps, the same question with one change, so the one new thing is that the larger count is the answer rather than the two added. In DSA it is the distance between two cells of a grid when diagonal moves are allowed, often called the Chebyshev distance. Math.max was taught on its own in Larger.");
  ("The names r and c rather than Grid steps' rows and cols, because let steps = Math.max(rows, cols); is past the 30 characters a code line may be. Not picked: keeping rows and cols and calling the answer n, k or s, the only names short enough, which say nothing of what is counted; r and c say rows and columns in the letters r1, r2, c1 and c2 already use.");
  ("The answers 3, 4, 5, 2 and 6 all differ: two pairs have more rows than columns, two more columns than rows, and one the same of each, which is all diagonal. Adding the two counts, the mistake Grid steps would lead to, gives a different answer for every pair. The writing works the same squares as Grid steps, row 1 column 1 to row 4 column 3, so the two answers, 5 and 3, can be read against each other.");
  ("The reminder and the example both use row 3, column 1 to row 0, column 5, so Grid steps gives 7 and King steps 4 for the same squares. The example is coloured as Grid steps colours its own, with r and c in the colours of the counts.");
  ("The start square shows 🫅, a person with a crown, in place of the 🙂 Grid steps uses, asked by the human 2026-10-02: it is still you, now moving as a king, so the two pictures stay alike. The chess king ♚ stays in the writing, where it names the piece. Not picked: ♚ in the picture, a text character that a filled square draws in white, so it reads as the white piece; and 🤴, which shows on older phones but says prince. 🫅 came in 2021, so a phone older than that shows an empty box. The path stays solid blue: Grid steps fills its path green and orange for its steps down and right, but a diagonal step is both at once, so no one count colour fits it.");
  ("The writing is a first draft, not yet the human's, 2026-10-02.");
  let names = ["r1", "c1", "r2", "c2"];
  let [r1, c1, r2, c2] = names;
  let minus = js_operator_minus_symbol();
  let plus = js_operator_plus_symbol();
  let same = js_operator_triple_equal_symbol();
  let abs_name = "Math.abs";
  let max_name = "Math.max";
  function apart_line(name, a, b) {
    "let name = Math.abs(b - a);";
    let less = js_code_binary_spaced_nb(b, minus, a);
    let apart = js_code_call_args(abs_name, [less]);
    let line = js_code_let_statement(name, apart);
    return line;
  }
  let r = "r";
  let c = "c";
  let steps = "steps";
  let line_r = apart_line(r, r1, r2);
  let line_c = apart_line(c, c1, c2);
  let larger = js_code_call_args(max_name, [r, c]);
  let line_steps = js_code_let_statement(steps, larger);
  let step = {
    middle: [line_r, line_c, line_steps],
    logged: [steps],
  };
  let rows = "rows";
  let cols = "cols";
  let grid_rows = apart_line(rows, r1, r2);
  let grid_cols = apart_line(cols, c1, c2);
  let grid_added = js_code_binary_spaced_nb(rows, plus, cols);
  let grid_steps = js_code_let_statement(steps, grid_added);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [r1, 3],
      [c1, 1],
      [r2, 0],
      [c2, 5],
    ],
    [grid_rows, grid_cols, grid_steps],
    [steps],
  );
  function values_get() {
    "four of the five square pairs, in a fresh order each screen";
    let candidates = [
      [0, 0, 2, 3],
      [4, 1, 0, 2],
      [2, 5, 3, 0],
      [1, 2, 3, 4],
      [6, 4, 0, 1],
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
  ("a count such as the 2 diagonal steps is not a position, so it is a code chip with no colour of its own, as the counts are in Grid steps");
  let plain = app_shared_color_code_background();
  let count_two = app_code_explain_number_colored("2", plain);
  ("Math.max(3, 2) === 3 as one code chip, the count of rows and the count of columns in the colours the lines above give them, asked by the human 2026-10-02; the answer is the steps, so it wears the blue of the squares it counts");
  let max_worked = app_code_explain_code_colored(
    [max_name, "(", "3", ", ", "2", ") === ", "3"],
    [
      plain,
      plain,
      rows_count_color,
      plain,
      columns_count_color,
      plain,
      end_color,
    ],
  );
  let rows_word = app_code_explain_word_colored("rows", row_color);
  let columns_word = app_code_explain_word_colored("columns", column_color);
  let row_word = app_code_explain_word_colored("row", row_color);
  let column_word = app_code_explain_word_colored("column", column_color);
  let draw = app_code_explain_number_colored("1", row_color);
  let draw2 = app_code_explain_number_colored("1", column_color);
  let draw3 = app_code_explain_number_colored("4", row_color);
  let draw4 = app_code_explain_number_colored("3", column_color);
  let question_said = app_code_explain_said([
    "How many steps are there from ",
    app_code_explain_emoji_square("🫅", start_color),
    " ",
    row_word,
    " ",
    draw,
    ", ",
    column_word,
    " ",
    draw2,
    " to ",
    app_code_explain_emoji_square("🏁", end_color),
    " ",
    row_word,
    " ",
    draw3,
    ", ",
    column_word,
    " ",
    draw4,
    "?",
  ]);
  let draw6 = app_code_explain_number_colored("1", row_color);
  let draw7 = app_code_explain_number_colored("4", row_color);
  let rows_said = app_code_explain_said([
    "The ",
    rows_word,
    ": from ",
    row_word,
    " ",
    draw6,
    " to ",
    row_word,
    " ",
    draw7,
    " is",
  ]);
  let draw9 = app_code_explain_number_colored("1", column_color);
  let draw10 = app_code_explain_number_colored("3", column_color);
  let columns_said = app_code_explain_said([
    "The ",
    columns_word,
    ": from ",
    column_word,
    " ",
    draw9,
    " to ",
    column_word,
    " ",
    draw10,
    " is",
  ]);
  function moves_draw(box) {
    "you in the middle square and an arrow in each of the eight squares around, the four of Grid steps and the four diagonals";
    let draw11 = app_code_arrow_turned_draw(270);
    let draw12 = app_code_arrow_turned_draw(90);
    let draw13 = app_code_arrow_turned_draw(180);
    let draw14 = app_code_arrow_turned_draw(0);
    let draw15 = app_code_arrow_turned_draw(225);
    let draw16 = app_code_arrow_turned_draw(315);
    let draw17 = app_code_arrow_turned_draw(135);
    let draw18 = app_code_arrow_turned_draw(45);
    app_code_square_grid(box, 3, 3, false, [
      [1, 1, "🫅", start_color],
      [0, 1, draw11, null],
      [2, 1, draw12, null],
      [1, 0, draw13, null],
      [1, 2, draw14, null],
      [0, 0, draw15, null],
      [0, 2, draw16, null],
      [2, 0, draw17, null],
      [2, 2, draw18, null],
    ]);
  }
  function travel_said(box) {
    "the count of the filled squares, with the words blue squares coloured as the squares are filled, as Grid steps says it";
    let line = html_div(box);
    ("the count wears the blue of the squares it counts, asked by the human 2026-10-02: the steps are the blue squares, so the steps wear blue wherever they appear, in the writing, the worked line and the program");
    html_span_text(line, "And we travel ");
    let count = app_code_explain_number_colored("3", end_color);
    count(line);
    html_span_text(line, " ");
    let blue = app_code_explain_word_colored("blue squares", end_color);
    blue(line);
    html_span_text(line, " total");
  }
  function squares_draw(box) {
    "the same two squares as Grid steps, row 1 column 1 and row 4 column 3, and a path between them filled in: diagonally down and right twice, then down once";
    "each path square keeps its blue fill and shows how the step into it moved: a green bar down its left edge for a row, the colour of the rows count, and an orange bar along its top for a column, the colour of the columns count, asked by the human 2026-10-02. The two diagonal steps show both and the last step down shows only the left, so the picture holds 3 left bars and 2 top bars, the 3 rows and 2 columns of the worked lines below";
    let draw30 = app_code_square_edged(
      "",
      rows_count_color,
      columns_count_color,
    );
    let draw31 = app_code_square_edged(
      "",
      rows_count_color,
      columns_count_color,
    );
    let draw32 = app_code_square_edged("🏁", rows_count_color, null);
    app_code_square_grid(box, 5, 4, true, [
      [1, 1, "🫅", start_color],
      [2, 2, draw30, end_color],
      [3, 3, draw31, end_color],
      [4, 3, draw32, end_color],
    ]);
  }
  let draw19 = app_code_explain_said([
    "A diagonal step moves one ",
    row_word,
    " and one ",
    column_word,
    " at the same time",
  ]);
  let draw20 = app_code_explain_said([
    "So ",
    count_two,
    " diagonal steps move ",
    count_two,
    " ",
    rows_word,
    " and ",
    count_two,
    " ",
    columns_word,
  ]);
  let draw21 = app_code_explain_number_colored("1", plain);
  let draw22 = app_code_explain_said([
    "That finishes the ",
    columns_word,
    ", and ",
    draw21,
    " more step finishes the ",
    rows_word,
  ]);
  let draw23 = app_code_explain_said([
    "So the steps are the larger of the ",
    rows_word,
    " and the ",
    columns_word,
    ":",
  ]);
  let draw5 = app_code_explain_number_colored("3", end_color);
  let draw8 = app_code_explain_said([
    "But how can we calculate the ",
    draw5,
    " steps from just the two positions?",
  ]);
  let draw24 = app_code_explain_number_colored(r1, row_color);
  let draw25 = app_code_explain_number_colored(c1, column_color);
  let draw26 = app_code_explain_said([
    "Suppose the first square is at ",
    row_word,
    " ",
    draw24,
    ", ",
    column_word,
    " ",
    draw25,
  ]);
  let draw27 = app_code_explain_number_colored(r2, row_color);
  let draw28 = app_code_explain_number_colored(c2, column_color);
  let draw29 = app_code_explain_said([
    "And the second square is at ",
    row_word,
    " ",
    draw27,
    ", ",
    column_word,
    " ",
    draw28,
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "King steps on a grid",
    title_code: line_steps,
    names,
    values_get,
    example_values: [3, 1, 0, 5],
    step,
    remember_lesson: app_code_lesson_statement_name_grid_steps,
    remember_parts: ["we can find how many steps between two squares:"],
    remember_lines,
    explain: [
      ["Now suppose we can also move diagonally, as a king ♚ moves in chess"],
      ["You can move one square at a time in any direction:"],
      moves_draw,
      question_said,
      squares_draw,
      app_code_explain_said([
        "If we travel ",
        app_code_explain_number_colored("2", plain),
        " squares diagonally and then ",
        app_code_explain_number_colored("1", plain),
        " square down, then we will travel to the second position ",
        app_code_explain_emoji_square("🏁", end_color),
      ]),
      travel_said,
      app_code_explain_container_next,
      draw8,
      rows_said,
      rows_worked,
      columns_said,
      cols_worked,
      draw19,
      draw20,
      draw22,
      draw23,
      max_worked,
      app_code_explain_container_next,
      draw26,
      draw29,
      [
        "Here is code that finds how many steps a king ♚ takes between the two squares:",
      ],
    ],
    decoys: null,
    example_pointers: [
      [["3", "0"], row_color],
      [["1", "5"], column_color],
      [[r1, r2], row_color],
      [[c1, c2], column_color],
      [[steps, "4"], end_color],
      [[r], rows_count_color],
      [[c], columns_count_color],
    ],
  });
  return lesson;
}
