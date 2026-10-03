import { arguments_assert } from "./arguments_assert.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_asterisk_symbol } from "./js_operator_asterisk_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { js_code_binary_result_nb } from "./js_code_binary_result_nb.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_last_seat } from "./app_code_lesson_statement_name_last_seat.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_page_start() {
  arguments_assert(arguments, 0);
  ("the first photo on a page, when photos are numbered from 0 and pages from 1: let before = page - 1; let first = before * size; - picked by the human 2026-10-02 from a list of next lessons. In DSA it is the offset of a page of results, and the start of a block of equal size in a list.");
  ("Photos from 0 and pages from 1, because that is how each is met: a position in code counts from 0, and a page a person turns to counts from 1. Taking one off the page turns the one count into the other, so the line is Last seat's own line with its names changed, and that lesson is the reminder.");
  ("Two short lines, as the formula lessons split into short statements are. Not picked: let first = (page - 1) * size; which the bracket lessons would allow but which asks for the minus and the times at once. The name before says what the first line counts: the pages before this one.");
  ("Every screen asks about page 1, because that is where the minus matters most: its first photo is 0, and page * size would wrongly give the first photo of page 2. The other three are from four ordinary pages. The five answers differ.");
  ("The writing was read by the human and deployed, 2026-10-03; they added that the seats are counted starting at 0 to the reminder.");
  let names = ["page", "size"];
  let page = "page";
  let size = "size";
  let before = "before";
  let first = "first";
  let minus = js_operator_minus_symbol();
  let times = js_operator_asterisk_symbol();
  let less = js_code_binary_spaced_nb(page, minus, "1");
  let line_before = js_code_let_statement(before, less);
  let product = js_code_binary_spaced_nb(before, times, size);
  let line_first = js_code_let_statement(first, product);
  let step = {
    middle: [line_before, line_first],
    logged: [first],
  };
  let seats = "seats";
  let last = "last";
  let seats_less = js_code_binary_spaced_nb(seats, minus, "1");
  let seats_line = js_code_let_statement(last, seats_less);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [[seats, 5]],
    [seats_line],
    [last],
  );
  function values_get() {
    "page 1 every time, and three of four ordinary pages, in a fresh order each screen";
    let ordinary = list_shuffle_take(
      [
        [3, 10],
        [2, 5],
        [4, 6],
        [5, 3],
      ],
      3,
    );
    let all = list_concat([[1, 10]], ordinary);
    list_shuffle(all);
    return all;
  }
  let pages_before = js_code_binary_result_nb("3", minus, "1", "2");
  let photos_before = js_code_binary_result_nb("2", times, "10", "20");
  let lesson = app_code_lesson_statement_formula({
    words: "First photo on a page",
    title_code: line_first,
    names,
    values_get,
    example_values: [3, 10],
    step,
    remember_lesson: app_code_lesson_statement_name_last_seat,
    remember_parts: [
      "we can find the number of the last seat, when we count starting at ",
      "0",
      ":",
    ],
    remember_lines,
    explain: [
      ["Suppose photos are numbered starting with ", "0"],
      ["And each page shows ", "10", " photos"],
      ["Pages are numbered starting with ", "1"],
      ["Page ", "1", " shows photos ", "0", " - ", "9"],
      ["Page ", "2", " shows photos ", "10", " - ", "19"],
      ["Page ", "3", " shows photos ", "20", " - ", "29"],
      app_code_explain_container_next,
      ["Before page ", "3", " there are ", "2", " pages:"],
      ["", pages_before],
      ["Those ", "2", " pages show ", "10", " photos each:"],
      ["", photos_before],
      ["Those are photos ", "0", " - ", "19"],
      ["So the first photo on page ", "3", " is photo ", "20"],
      app_code_explain_container_next,
      [
        "Suppose the page is called ",
        page,
        " and the number of photos on each page is called ",
        size,
      ],
      ["Here is code that finds the first photo on page ", page, ":"],
    ],
    decoys: null,
    example_pointers: null,
  });
  return lesson;
}
