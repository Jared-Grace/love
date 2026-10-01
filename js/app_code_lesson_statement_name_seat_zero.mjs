import { js_code_between_symbols } from "./js_code_between_symbols.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_statement_name_last_seat } from "./app_code_lesson_statement_name_last_seat.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_seat_zero() {
  arguments_assert(arguments, 0);
  ("whether a seat is in a row whose seats are numbered from 0: let last = max - 1; let ok = 0 <= n && n <= last; - asked for by the human 2026-10-01, after the same check for seats numbered from 1. In DSA it is the bounds check made before reading a list at an index, whose last index is its length - 1.");
  ("The upper check is n <= max - 1 rather than n < max: the human judged it easier to read, 2026-10-01, because it says up to the last seat, which is what Last seat taught. n < max is the same check and could be its own later lesson. Not picked: n < max - 1, which leaves the last seat out.");
  ("Two lines, because let ok = 0 <= n && n <= max - 1; is longer than 30 characters. The first line is Last seat's own line with its names changed, so it reads as that lesson, and the second is the previous lesson's check with 0 and last for 1 and max.");
  ("The reminder is Last seat, quoted as that lesson's own program, with 5 seats.");
  ("The answers are only true or false, so a question offers two buttons, and each screen asks two seats that are in the row and two that are not. The seats outside are mostly one past an edge, -1 or max, because max is the seat a learner counting from 1 would wrongly call the last.");
  ("The writing is a first draft, not yet the human's, 2026-10-01.");
  let names = ["n", "max"];
  let n = list_first(names);
  let max = list_second(names);
  let last = "last";
  let ok = "ok";
  let minus = js_operator_minus_symbol();
  let at_most = js_operator_less_than_equal_symbol();
  function between(low, middle, high) {
    "low <= middle && middle <= high, as the previous lesson checks it";
    let both = js_code_between_symbols(low, at_most, middle, at_most, high);
    return both;
  }
  let max_less = js_code_binary_spaced_nb(max, minus, "1");
  let line_last = js_code_let_statement(last, max_less);
  let check = between("0", n, last);
  let line_ok = js_code_let_statement(ok, check);
  let step = {
    middle: [line_last, line_ok],
    logged: [ok],
  };
  let seats = "seats";
  let seats_less = js_code_binary_spaced_nb(seats, minus, "1");
  let seats_line = js_code_let_statement(last, seats_less);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [[seats, 5]],
    [seats_line],
    [last],
  );
  function values_get() {
    "two seats in the row and two outside it, in a fresh order each screen";
    let insides = [
      [0, 5],
      [4, 5],
      [2, 6],
      [3, 4],
    ];
    let outsides = [
      [5, 5],
      [-1, 4],
      [6, 6],
      [7, 3],
    ];
    let taken_in = list_shuffle_take(insides, 2);
    let taken_out = list_shuffle_take(outsides, 2);
    let taken = list_concat(taken_in, taken_out);
    list_shuffle(taken);
    return taken;
  }
  let v = between("0", "4", "4");
  let v2 = between("0", "5", "4");
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Seat in the row from 0",
    title_code: line_ok,
    names,
    values_get,
    example_values: [4, 5],
    step,
    remember_lesson: app_code_lesson_statement_name_last_seat,
    remember_parts: ["we can find the number of the last seat:"],
    remember_lines,
    explain: [
      ["Now suppose the seats are numbered starting with ", "0"],
      ["With ", "5", " seats, the seats are:"],
      ["", "0", " ", "1", " ", "2", " ", "3", " ", "4"],
      [
        "So if a row has ",
        max,
        " seats, when it's numbered starting at ",
        "0",
        ", then the last seat will have the number ",
        max_less,
      ],
      [
        "(If the seats had been numbered starting at ",
        "1",
        ", then the last seat would have the number ",
        max,
        ")",
      ],
      app_code_explain_container_next,
      [
        "So a seat is in the row when it is between ",
        "0",
        " and the last seat ",
        "4",
        ":",
      ],
      ["", v, " is ", "true"],
      ["But seat ", "5", " is not in the row:"],
      ["", v2, " is ", "false"],
      app_code_explain_container_next,
      [
        "Suppose the seat is called ",
        n,
        " and the number of seats is called ",
        max,
      ],
      ["Here is code that checks whether seat ", n, " is in the row:"],
    ],
    decoys: null,
    example_pointers: null,
    answer_count: 2,
  });
  return lesson;
}
