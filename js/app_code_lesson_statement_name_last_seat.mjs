import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { app_code_chair_emoji } from "./app_code_chair_emoji.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_pages_read } from "./app_code_lesson_statement_name_pages_read.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_last_seat() {
  arguments_assert(arguments, 0);
  ("the number of the last seat in a row numbered from 0: let last = seats - 1; - chosen by the human 2026-10-01 as the next formula lesson, after Pages read. In DSA it is the last index of a list, which is one less than its length because the first index is 0.");
  ("The reminder is Pages read, quoted as that lesson's own program: first 3, last 7, then after and pages. It is the same counting the other way round: there the + 1 counts the page started on, here the - 1 takes back the seat numbered 0.");
  ("The seats are chairs, as in the rows lessons, and numbered from 0 as those were. The answers 2, 5, 7, 9 and 11 all differ, and none is the 4 that the writing and the example work, for 5 seats.");
  ("The writing is a first draft, not yet the human's, 2026-10-01.");
  let names = ["seats"];
  let seats = list_first(names);
  let last = "last";
  let minus = js_operator_minus_symbol();
  let plus = js_operator_plus_symbol();
  let less = js_code_binary_spaced_nb(seats, minus, "1");
  let line_last = js_code_let_statement(last, less);
  let step = {
    middle: [line_last],
    logged: [last],
  };
  let first = "first";
  let after = "after";
  let pages = "pages";
  let pages_less = js_code_binary_spaced_nb(last, minus, first);
  let line_after = js_code_let_statement(after, pages_less);
  let pages_more = js_code_binary_spaced_nb(after, plus, "1");
  let line_pages = js_code_let_statement(pages, pages_more);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [first, 3],
      [last, 7],
    ],
    [line_after, line_pages],
    [pages],
  );
  function values_get() {
    "four of the five counts of seats, in a fresh order each screen";
    let candidates = [[3], [6], [8], [10], [12]];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let emoji = app_code_chair_emoji();
  let worked = js_code_binary_result_nb("5", minus, "1", "4");
  let combined = text_combine("Suppose there is a row of 5 seats ", emoji);
  let lesson = app_code_lesson_statement_formula({
    words: "Last seat",
    title_code: line_last,
    names,
    values_get,
    example_values: [5],
    step,
    remember_lesson: app_code_lesson_statement_name_pages_read,
    remember_parts: [
      "we can count the pages from a first page to a last page:",
    ],
    remember_lines,
    explain: [
      [combined],
      ["The seats are numbered starting with ", "0"],
      ["So the seats are ", "0", ", ", "1", ", ", "2", ", ", "3", " and ", "4"],
      ["What number is the last seat?"],
      ["The last seat is ", "4", ", not ", "5"],
      app_code_explain_container_next,
      [
        "If the seats were numbered starting with ",
        "1",
        ", then the last seat would be ",
        "5",
      ],
      ["Starting with ", "0", " makes every seat's number ", "1", " less"],
      ["So we subtract ", "1", ":"],
      ["", worked],
      app_code_explain_container_next,
      ["Suppose the number of seats is called ", seats],
      ["Then the last seat is ", less],
      ["Here is code that finds the number of the last seat:"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
