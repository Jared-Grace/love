import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_plus_symbol } from "./js_operator_plus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_rows_down } from "./app_code_lesson_statement_name_rows_down.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_pages_read() {
  arguments_assert(arguments, 0);
  ("how many pages from one page to a later one, counting both: let after = last - first; let pages = after + 1; - chosen by the human 2026-10-01 as the next formula lesson. In DSA it is how many items a range holds when both ends count, and forgetting the + 1 is the off-by-one mistake, often called the fencepost error.");
  ("Two lines rather than let pages = last - first + 1;, which fits in 30 characters but asks the learner to read two operators in one line, a thing no lesson has taught yet. The first line's name says what subtracting counts: the pages after the first one. Not picked: apart, which says how far and not what is counted.");
  ("The reminder is Rows down, the same subtraction this lesson starts from, quoted as that lesson's own program: r1 2, r2 5, rows = r2 - r1.");
  ("Four of five pairs each screen, the last page always past the first; the answers 6, 9, 2, 3 and 7 all differ, and none is the 5 the writing and the example work, from page 3 to page 7.");
  ("The writing is a first draft, not yet the human's, 2026-10-01.");
  let names = ["first", "last"];
  let first = list_first(names);
  let last = list_second(names);
  let after = "after";
  let pages = "pages";
  let minus = js_operator_minus_symbol();
  let plus = js_operator_plus_symbol();
  let less = js_code_binary_spaced_nb(last, minus, first);
  let line_after = js_code_let_statement(after, less);
  let more = js_code_binary_spaced_nb(after, plus, "1");
  let line_pages = js_code_let_statement(pages, more);
  let step = {
    middle: [line_after, line_pages],
    logged: [pages],
  };
  let r = "r1";
  let r2 = "r2";
  let rows = "rows";
  let rows_less = js_code_binary_spaced_nb(r2, minus, r);
  let rows_line = js_code_let_statement(rows, rows_less);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [r, 2],
      [r2, 5],
    ],
    [rows_line],
    [rows],
  );
  function values_get() {
    "four of the five pairs, the last page always past the first, in a fresh order each screen";
    let candidates = [
      [2, 7],
      [1, 9],
      [4, 5],
      [10, 12],
      [5, 11],
    ];
    let taken = list_shuffle_take(candidates, 4);
    return taken;
  }
  let subtracted = js_code_binary_result_nb("7", minus, "3", "4");
  let added = js_code_binary_result_nb("4", plus, "1", "5");
  let lesson = app_code_lesson_statement_formula({
    words: "Pages read",
    title_code: line_pages,
    names,
    values_get,
    example_values: [3, 7],
    step,
    remember_lesson: app_code_lesson_statement_name_rows_down,
    remember_parts: ["we can find how many rows down:"],
    remember_lines,
    explain: [
      ["Suppose you read a book 📖"],
      ["You read from page ", "3", " to page ", "7"],
      ["How many pages did you read?"],
      [
        "Let's count them: page ",
        "3",
        ", ",
        "4",
        ", ",
        "5",
        ", ",
        "6",
        " and ",
        "7",
      ],
      ["That is ", "5", " pages"],
      app_code_explain_container_next,
      ["But subtracting gives:"],
      ["", subtracted],
      [
        "Subtracting counts the pages after page ",
        "3",
        ": ",
        "4",
        ", ",
        "5",
        ", ",
        "6",
        " and ",
        "7",
      ],
      ["It misses page ", "3", ", the page you started on"],
      ["So we add ", "1", " for page ", "3", ":"],
      ["", added],
      app_code_explain_container_next,
      [
        "Suppose the first page you read is called ",
        first,
        " and the last page is called ",
        last,
      ],
      ["Then ", less, " counts the pages after ", first],
      ["And adding ", "1", " counts ", first, " too"],
      ["Here is code that finds how many pages you read:"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
