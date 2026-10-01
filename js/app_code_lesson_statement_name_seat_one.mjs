import { js_code_between_symbols } from "./js_code_between_symbols.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
import { js_operator_and_symbol } from "./js_operator_and_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_chair_emoji } from "./app_code_chair_emoji.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_expression_in_between } from "./app_code_lesson_expression_in_between.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_seat_one() {
  arguments_assert(arguments, 0);
  ("whether a seat is in a row whose seats are numbered from 1: let ok = 1 <= n && n <= max; - asked for by the human 2026-10-01, before the same check for seats numbered from 0, so the in-between check is met first where the first and last seats are the plain numbers 1 and max. In DSA it is the bounds check made before reading a list at an index.");
  ("The reminder is In between, quoted in its own shape, an expression beside its value: 2 < 5 && 5 < 8 is true. That lesson writes < and this one <=, because the first and last seats are in the row; comparing with <= was taught in its own lessons.");
  ("The answers are only true or false, so a question offers two buttons, and each screen asks two seats that are in the row and two that are not. The seats outside are mostly one past an edge, 0 or max + 1, because one past the edge is the mistake this check is for.");
  ("The writing is a first draft, not yet the human's, 2026-10-01.");
  let names = ["n", "max"];
  let n = list_first(names);
  let max = list_second(names);
  let ok = "ok";
  let less = js_operator_less_than_symbol();
  let at_most = js_operator_less_than_equal_symbol();
  let and_symbol = js_operator_and_symbol();
  function between(low, middle, high) {
    "low <= middle && middle <= high, the check this lesson is about";
    let both = js_code_between_symbols(low, at_most, middle, at_most, high);
    return both;
  }
  let check = between("1", n, max);
  let line_ok = js_code_let_statement(ok, check);
  let step = {
    middle: [line_ok],
    logged: [ok],
  };
  function remember_lines(box) {
    "lesson In between in its own shape, the expression beside what it is";
    let left = js_code_binary_spaced_nb("2", less, "5");
    let right = js_code_binary_spaced_nb("5", less, "8");
    let both = js_code_binary_spaced_nb(left, and_symbol, right);
    html_div_cycle_code(box, ["", both, " is ", "true"]);
  }
  function values_get() {
    "two seats in the row and two outside it, in a fresh order each screen";
    let insides = [
      [3, 5],
      [1, 4],
      [6, 6],
      [2, 7],
    ];
    let outsides = [
      [0, 5],
      [6, 5],
      [0, 3],
      [5, 4],
    ];
    let taken_in = list_shuffle_take(insides, 2);
    let taken_out = list_shuffle_take(outsides, 2);
    let taken = list_concat(taken_in, taken_out);
    list_shuffle(taken);
    return taken;
  }
  let emoji = app_code_chair_emoji();
  let seats_said = text_combine(" seats ", emoji);
  let v = between("1", "3", "5");
  let v2 = between("1", "6", "5");
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Seat in the row",
    title_code: line_ok,
    names,
    values_get,
    example_values: [3, 5],
    step,
    remember_lesson: app_code_lesson_expression_in_between,
    remember_parts: ["we can check whether a number is between two others:"],
    remember_lines,
    explain: [
      ["Suppose a row has ", "5", seats_said],
      ["The seats are numbered starting with ", "1"],
      ["", "1", " ", "2", " ", "3", " ", "4", " ", "5"],
      ["Is seat ", "3", " in the row?"],
      app_code_explain_container_next,
      [
        "A seat like ",
        "3",
        " is in the row when it is between ",
        "1",
        " and ",
        "5",
      ],
      [
        "The first seat ",
        "1",
        " and the last seat ",
        "5",
        " are in the row too, so we use ",
        at_most,
        ":",
      ],
      ["", v, " is ", "true"],
      ["But seat ", "6", " is not in the row:"],
      ["", v2, " is ", "false"],
      app_code_explain_container_next,
      [
        "Suppose the seat is called ",
        n,
        " and the number of seats is called ",
        max,
      ],
      ["Then the seat is in the row when ", check],
      ["Here is code that checks whether seat ", n, " is in the row:"],
    ],
    decoys: null,
    example_pointers: null,
    answer_count: 2,
  });
  return lesson;
}
