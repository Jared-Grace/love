import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_code_between_symbols } from "./js_code_between_symbols.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
import { range } from "./range.mjs";
import { equal } from "./equal.mjs";
import { app_code_square_grid } from "./app_code_square_grid.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_statement_name_seat_less } from "./app_code_lesson_statement_name_seat_less.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_grid_inside() {
  arguments_assert(arguments, 0);
  ("whether a square is inside a grid whose rows and columns are numbered from 0: let in_r = 0 <= r && r < rows; let in_c = 0 <= c && c < cols; let ok = in_r && in_c; - picked by the human 2026-10-02 from a list of next lessons. In DSA it is the check made before stepping to a neighbouring square of a grid, so a search never reads past an edge.");
  ("The new idea is only that a square needs two checks, one for its row and one for its column, and both must pass. Each check is Seat in the row, shorter, with its names changed, so that lesson is the reminder.");
  ("0 <= r rather than r >= 0, asked about by the human 2026-10-02: the seat lessons already put the 0 on the left, so the check reads in number-line order, r between its two bounds, as 0 <= r < rows does in maths. r >= 0 says the same and would be one more form to learn here for nothing.");
  ("Three lines, because one line holding all four comparisons is longer than 30 characters. Not picked: let ok = in_r && in_c; folded into the logged line, which would log a whole expression rather than a name.");
  ("The answers are only true or false, so a question offers two buttons, two squares inside the grid and two outside it each screen; the squares outside are one past an edge, some by their row and some by their column, so neither check alone is enough.");
  ("The pictures and colours are Grid steps' own, asked for by the human 2026-10-02: the same grid with its row numbers red and its column numbers purple, and the count of rows green and the count of columns orange.");
  ("The grid is blue, its word and its squares, and one more row and one more column are drawn around it without blue, asked by the human 2026-10-02, so a square outside the grid is a square the learner can see that is not blue. The face has no square of colour behind it, because teal is the start of a path in Grid steps and King steps, and there is no path here. Not picked: the earlier picture of the face on a lone dashed square past the grid's right edge, which showed a square that is not there rather than one that is not blue.");
  ("The grid is 3 rows by 5 columns and the square asked about is row 2, column 4, so no number is both a row and a column or a row and a count, because a pointer colours a number by its text. Not picked: the earlier 3 by 4 grid with row 2, column 3, whose 3 was both a column and the count of rows.");
  ("The writing is a first draft, not yet the human's, 2026-10-02.");
  let names = ["r", "c", "rows", "cols"];
  let r = "r";
  let c = "c";
  let rows = "rows";
  let cols = "cols";
  let in_r = "in_r";
  let in_c = "in_c";
  let ok = "ok";
  let less = js_operator_less_than_symbol();
  let at_most = js_operator_less_than_equal_symbol();
  let and_op = js_operator_and_symbol();
  let check_r = js_code_between_symbols("0", at_most, r, less, rows);
  let line_r = js_code_let_statement(in_r, check_r);
  let check_c = js_code_between_symbols("0", at_most, c, less, cols);
  let line_c = js_code_let_statement(in_c, check_c);
  let both = js_code_binary_spaced_nb(in_r, and_op, in_c);
  let line_ok = js_code_let_statement(ok, both);
  let step = {
    middle: [line_r, line_c, line_ok],
    logged: [ok],
  };
  let n = "n";
  let max = "max";
  let check_seat = js_code_between_symbols("0", at_most, n, less, max);
  let line_seat = js_code_let_statement(ok, check_seat);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [n, 4],
      [max, 5],
    ],
    [line_seat],
    [ok],
  );
  function values_get() {
    "two squares inside the grid and two outside it, in a fresh order each screen";
    let insides = [
      [2, 4, 3, 5],
      [0, 0, 3, 4],
      [1, 4, 2, 5],
      [3, 1, 4, 2],
    ];
    let outsides = [
      [3, 2, 3, 4],
      [2, 5, 3, 5],
      [-1, 1, 2, 5],
      [1, -1, 4, 2],
    ];
    let taken_in = list_shuffle_take(insides, 2);
    let taken_out = list_shuffle_take(outsides, 2);
    let taken = list_concat(taken_in, taken_out);
    list_shuffle(taken);
    return taken;
  }
  let grid_color = app_code_highlight_color();
  let row_color = app_code_highlight_color_third();
  let column_color = app_code_highlight_color_fourth();
  let rows_count_color = app_code_highlight_color_second();
  let columns_count_color = app_code_highlight_color_fifth();
  let plain = app_shared_color_code_background();
  let grid_word = app_code_explain_word_colored("grid", grid_color);
  let blue_word = app_code_explain_word_colored("blue", grid_color);
  let row_word = app_code_explain_word_colored("row", row_color);
  let column_word = app_code_explain_word_colored("column", column_color);
  let is_true = app_code_explain_number_colored("true", plain);
  let is_false = app_code_explain_number_colored("false", plain);
  let spaced_at_most = js_code_binary_spaced_nb("", at_most, "");
  let spaced_less = js_code_binary_spaced_nb("", less, "");
  let spaced_and = js_code_binary_spaced_nb("", and_op, "");
  function between_worked(middle, high, middle_color, high_color) {
    "0 <= middle && middle < high as one code chip, the middle and the high in the colours the picture gives them";
    let chip = app_code_explain_code_colored_inline(
      ["0", spaced_at_most, middle, spaced_and, middle, spaced_less, high],
      [plain, plain, middle_color, plain, middle_color, plain, high_color],
    );
    return chip;
  }
  function both_worked(right) {
    "true && right as one code chip";
    let chip = app_code_explain_code_colored_inline(
      ["true", spaced_and, right],
      [plain, plain, plain],
    );
    return chip;
  }
  function grid_draw_face(face_row, face_column) {
    "the 3 by 5 grid in blue with one more row and one more column drawn around it without blue, and the face on the square given, or on no square when the row is -1";
    function draw(box) {
      let marks = [];
      for (let row of range(4)) {
        for (let column of range(6)) {
          let inside = less_than(row, 3) && less_than(column, 5);
          let face = equal(row, face_row) && equal(column, face_column);
          let text = face ? "🙂" : "";
          let color = inside ? grid_color : null;
          if (inside || face) {
            marks.push([row, column, text, color]);
          }
        }
      }
      app_code_square_grid(box, 4, 6, true, marks);
    }
    return draw;
  }
  let row_two = between_worked("2", "3", row_color, rows_count_color);
  let column_four = between_worked("4", "5", column_color, columns_count_color);
  let column_five = between_worked("5", "5", column_color, columns_count_color);
  let three = app_code_explain_number_colored("3", rows_count_color);
  let five = app_code_explain_number_colored("5", columns_count_color);
  let two_row = app_code_explain_number_colored("2", row_color);
  let four_column = app_code_explain_number_colored("4", column_color);
  let five_column = app_code_explain_number_colored("5", column_color);
  let grid_said = app_code_explain_said([
    "Suppose a ",
    grid_word,
    " has ",
    three,
    " rows and ",
    five,
    " columns",
  ]);
  let draw2 = app_code_explain_number_colored("0", plain);
  let numbered_said = app_code_explain_said([
    "The ",
    grid_word,
    "'s rows and columns are both numbered starting with ",
    draw2,
  ]);
  let blue_said = app_code_explain_said([
    "The squares that are ",
    blue_word,
    " are part of the ",
    grid_word,
  ]);
  let not_blue_said = app_code_explain_said([
    "The squares that are not ",
    blue_word,
    " are not part of the ",
    grid_word,
  ]);
  let both_said = app_code_explain_said([
    "A square is inside the ",
    grid_word,
    " when its ",
    row_word,
    " is inside the ",
    grid_word,
    " and its ",
    column_word,
    " is inside the ",
    grid_word,
  ]);
  let inside_said = app_code_explain_said([
    "🙂 ",
    row_word,
    " ",
    two_row,
    ", ",
    column_word,
    " ",
    four_column,
    " is inside the ",
    grid_word,
    ":",
  ]);
  let row_two_said = app_code_explain_said(["", row_two, " is ", is_true]);
  let column_four_said = app_code_explain_said([
    "",
    column_four,
    " is ",
    is_true,
  ]);
  let v = both_worked("true");
  let true_true_said = app_code_explain_said(["", v, " is ", is_true]);
  let outside_said = app_code_explain_said([
    "🙂 ",
    row_word,
    " ",
    two_row,
    ", ",
    column_word,
    " ",
    five_column,
    " is not inside the ",
    grid_word,
    ":",
  ]);
  let no_column_said = app_code_explain_said([
    "But the ",
    grid_word,
    " has no ",
    column_word,
    " ",
    five_column,
    ":",
  ]);
  let column_five_said = app_code_explain_said([
    "",
    column_five,
    " is ",
    is_false,
  ]);
  let v2 = both_worked("false");
  let true_false_said = app_code_explain_said(["", v2, " is ", is_false]);
  let r_chip = app_code_explain_number_colored(r, row_color);
  let c_chip = app_code_explain_number_colored(c, column_color);
  let rows_chip = app_code_explain_number_colored(rows, rows_count_color);
  let cols_chip = app_code_explain_number_colored(cols, columns_count_color);
  let names_said = app_code_explain_said([
    "Suppose the ",
    row_word,
    " is called ",
    r_chip,
    " and the ",
    column_word,
    " is called ",
    c_chip,
  ]);
  let counts_said = app_code_explain_said([
    "And suppose the number of rows is called ",
    rows_chip,
    " and the number of columns is called ",
    cols_chip,
  ]);
  let code_said = app_code_explain_said([
    "Here is code that checks whether the square at ",
    row_word,
    " ",
    r_chip,
    ", ",
    column_word,
    " ",
    c_chip,
    " is inside the ",
    grid_word,
    ":",
  ]);
  let v3 = grid_draw_face(-1, -1);
  let v4 = grid_draw_face(2, 4);
  let v5 = grid_draw_face(2, 5);
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Square inside the grid",
    title_code: line_ok,
    names,
    values_get,
    example_values: [2, 4, 3, 5],
    step,
    remember_lesson: app_code_lesson_statement_name_seat_less,
    remember_parts: [
      "we can check whether a seat is in a row numbered from ",
      "0",
      ":",
    ],
    remember_lines,
    explain: [
      grid_said,
      numbered_said,
      v3,
      blue_said,
      not_blue_said,
      both_said,
      app_code_explain_container_next,
      inside_said,
      v4,
      row_two_said,
      column_four_said,
      true_true_said,
      app_code_explain_container_next,
      outside_said,
      v5,
      row_two_said,
      no_column_said,
      column_five_said,
      true_false_said,
      app_code_explain_container_next,
      names_said,
      counts_said,
      code_said,
    ],
    decoys: null,
    example_pointers: [
      [["2", r, in_r], row_color],
      [["4", c, in_c], column_color],
      [["3", rows], rows_count_color],
      [["5", cols], columns_count_color],
    ],
    answer_count: 2,
  });
  return lesson;
}
