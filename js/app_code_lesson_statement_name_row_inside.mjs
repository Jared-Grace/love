import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_greater_than_equal_symbol } from "./js_operator_greater_than_equal_symbol.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_names_binary_programs } from "./app_code_lesson_statement_names_binary_programs.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_statement_name_and } from "./app_code_lesson_statement_name_and.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_row_inside() {
  arguments_assert(arguments, 0);
  ("whether a row is inside a grid whose rows are numbered from 0: let ok_top = r >= 0; let ok_end = r < rows; let inside = ok_top && ok_end; - chosen by the human 2026-10-01 as the next formula lesson, after Last seat. In DSA it is the bounds check made before reading a list or a grid at an index.");
  ("Three lines rather than let inside = r >= 0 && r < rows;, which is longer than 30 characters and asks the learner to know that the comparisons are worked before the and, a thing no lesson has taught yet. Each line here is one thing a lesson already taught: comparing a name with a number, and joining two names with and.");
  ("The names say which edge each line checks. Not picked: above and below, which read backwards, since r >= 0 is true when the row is NOT above the grid; not_above and not_below, whose last line is longer than 30 characters.");
  ("The reminder is Two names joined with and, quoted as that lesson's own program, built by the same maker so it cannot drift from it.");
  ("The answers are only true or false, so a question offers two buttons, as the lessons comparing two names do, and each screen asks two rows that are inside and two that are not. The rows outside are one past each edge, -1 and the row count itself, and further out, because one past the edge is the mistake this lesson is about.");
  ("The writing is a first draft, not yet the human's, 2026-10-01.");
  let names = ["r", "rows"];
  let r = list_first(names);
  let rows = list_second(names);
  let ok_top = "ok_top";
  let ok_end = "ok_end";
  let inside = "inside";
  let at_least = js_operator_greater_than_equal_symbol();
  let under = js_operator_less_than_symbol();
  let and_symbol = js_operator_and_symbol();
  let top_check = js_code_binary_spaced_nb(r, at_least, "0");
  let line_top = js_code_let_statement(ok_top, top_check);
  let end_check = js_code_binary_spaced_nb(r, under, rows);
  let line_end = js_code_let_statement(ok_end, end_check);
  let both = js_code_binary_spaced_nb(ok_top, and_symbol, ok_end);
  let line_inside = js_code_let_statement(inside, both);
  let step = {
    middle: [line_top, line_end, line_inside],
    logged: [inside],
  };
  let remember_code = app_code_lesson_statement_names_binary_programs(
    and_symbol,
    [[true, false]],
    "a_and_b",
  );
  let s = list_first(remember_code);
  let remember_lines = text_split_newline(s);
  function values_get() {
    "two rows inside the grid and two outside it, in a fresh order each screen";
    let insides = [
      [2, 5],
      [0, 4],
      [3, 6],
      [1, 3],
    ];
    let outsides = [
      [5, 5],
      [-1, 4],
      [6, 4],
      [-2, 3],
    ];
    let taken_in = list_shuffle_take(insides, 2);
    let taken_out = list_shuffle_take(outsides, 2);
    let taken = list_concat(taken_in, taken_out);
    list_shuffle(taken);
    return taken;
  }
  let top_example = js_code_binary_spaced_nb("2", at_least, "0");
  let end_example = js_code_binary_spaced_nb("2", under, "4");
  let past_example = js_code_binary_spaced_nb("4", under, "4");
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Row inside the grid",
    title_code: line_end,
    names,
    values_get,
    example_values: [2, 4],
    step,
    remember_lesson: app_code_lesson_statement_name_and,
    remember_parts: [
      "we can ask whether two names are both true (",
      and_symbol,
      "):",
    ],
    remember_lines,
    explain: [
      ["Suppose a grid has ", "4", " rows"],
      [
        "Its rows are numbered starting with ",
        "0",
        ": rows ",
        "0",
        ", ",
        "1",
        ", ",
        "2",
        " and ",
        "3",
      ],
      ["Is row ", "2", " inside the grid?"],
      app_code_explain_container_next,
      ["The top row is ", "0", ", so a row inside is at least ", "0", ":"],
      ["", top_example, " is ", "true"],
      ["The last row is ", "3", ", so a row inside is less than ", "4", ":"],
      ["", end_example, " is ", "true"],
      ["Both are true, so row ", "2", " is inside the grid"],
      [
        "But row ",
        "4",
        " is not inside, because ",
        past_example,
        " is ",
        "false",
      ],
      app_code_explain_container_next,
      [
        "Suppose the row is called ",
        r,
        " and the number of rows is called ",
        rows,
      ],
      ["Then ", top_check, " checks that ", r, " is not above the top row"],
      ["And ", end_check, " checks that ", r, " is not below the last row"],
      ["The row is inside only when both are true"],
      ["Here is code that checks whether row ", r, " is inside the grid:"],
    ],
    decoys: null,
    example_pointers: null,
    answer_count: 2,
  });
  return lesson;
}
