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
      [2, 3, 3, 4],
      [0, 0, 3, 4],
      [1, 4, 2, 5],
      [3, 1, 4, 2],
    ];
    let outsides = [
      [3, 2, 3, 4],
      [2, 4, 3, 4],
      [-1, 1, 2, 5],
      [1, -1, 4, 2],
    ];
    let taken_in = list_shuffle_take(insides, 2);
    let taken_out = list_shuffle_take(outsides, 2);
    let taken = list_concat(taken_in, taken_out);
    list_shuffle(taken);
    return taken;
  }
  let row_two = js_code_between_symbols("0", at_most, "2", less, "3");
  let column_three = js_code_between_symbols("0", at_most, "3", less, "4");
  let column_four = js_code_between_symbols("0", at_most, "4", less, "4");
  let true_true = js_code_binary_spaced_nb("true", and_op, "true");
  let true_false = js_code_binary_spaced_nb("true", and_op, "false");
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Square inside the grid",
    title_code: line_ok,
    names,
    values_get,
    example_values: [2, 3, 3, 4],
    step,
    remember_lesson: app_code_lesson_statement_name_seat_less,
    remember_parts: [
      "we can check whether a seat is in a row numbered from ",
      "0",
      ":",
    ],
    remember_lines,
    explain: [
      [
        "Suppose a grid has ",
        "3",
        " rows and ",
        "4",
        " columns, numbered starting with ",
        "0",
      ],
      ["The rows are ", "0", " ", "1", " ", "2"],
      ["The columns are ", "0", " ", "1", " ", "2", " ", "3"],
      [
        "A square is inside the grid when its row is inside the grid and its column is inside the grid",
      ],
      app_code_explain_container_next,
      ["Row ", "2", ", column ", "3", " is inside the grid:"],
      ["", row_two, " is ", "true"],
      ["", column_three, " is ", "true"],
      ["", true_true, " is ", "true"],
      app_code_explain_container_next,
      ["Row ", "2", ", column ", "4", " is not inside the grid:"],
      ["", row_two, " is ", "true"],
      ["But there is no column ", "4", ":"],
      ["", column_four, " is ", "false"],
      ["", true_false, " is ", "false"],
      app_code_explain_container_next,
      ["Suppose the row is called ", r, " and the column is called ", c],
      [
        "And suppose the number of rows is called ",
        rows,
        " and the number of columns is called ",
        cols,
      ],
      [
        "Here is code that checks whether the square at row ",
        r,
        ", column ",
        c,
        " is inside the grid:",
      ],
    ],
    decoys: null,
    example_pointers: null,
    answer_count: 2,
  });
  return lesson;
}
