import { list_get } from "./list_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_expression_larger } from "./app_code_lesson_expression_larger.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_meetings_overlap() {
  arguments_assert(arguments, 0);
  ("whether two meetings overlap: let start = Math.max(s1, s2); let end = Math.min(e1, e2); let overlap = start < end; - picked by the human 2026-10-03 from a list of next lessons. In DSA it is the interval overlap check, used to merge ranges, to find clashes in a schedule, and to test whether two boxes touch.");
  ("The time two meetings share starts at the later start and ends at the earlier end, so the lesson is the previous one's Math.max and Math.min used on two meetings, and Larger is the reminder, quoted the same way the heater lesson quotes it.");
  ("< and not <=, a change from the list the human picked from: a meeting that ends at 10 and one that starts at 10 only touch, and nobody has to be in two rooms at once. Every screen asks one such pair, because it is the case the <= would get wrong. The name is overlap rather than ok, so the last line says what it checks.");
  ("Times are whole hours of the day, 8 to 16, so a learner reads 9 as nine o'clock without being taught a clock.");
  ("The answers are only true or false, so a question offers two buttons. Each screen asks two pairs that overlap, one of them a meeting inside the other, and two that do not, one of them a pair that only touches.");
  ("The writing is a first draft, not yet the human's, 2026-10-03.");
  let names = ["s1", "e1", "s2", "e2"];
  let s = list_first(names);
  let e = list_second(names);
  let s2 = list_get(names, 2);
  let e2 = list_get(names, 3);
  let start = "start";
  let end = "end";
  let overlap = "overlap";
  let max_name = "Math.max";
  let min_name = "Math.min";
  let before = js_operator_less_than_symbol();
  let later = js_code_call_args(max_name, [s, s2]);
  let line_start = js_code_let_statement(start, later);
  let earlier = js_code_call_args(min_name, [e, e2]);
  let line_end = js_code_let_statement(end, earlier);
  let check = js_code_binary_spaced_nb(start, before, end);
  let line_overlap = js_code_let_statement(overlap, check);
  let step = {
    middle: [line_start, line_end, line_overlap],
    logged: [overlap],
  };
  function remember_lines(box) {
    "Larger and Smaller in their own shape, the call beside what it is";
    let larger = js_code_call_args(max_name, ["3", "8"]);
    html_div_cycle_code(box, ["", larger, " is ", "8"]);
    let smaller = js_code_call_args(min_name, ["3", "8"]);
    html_div_cycle_code(box, ["", smaller, " is ", "3"]);
  }
  function values_get() {
    "two pairs that overlap, one inside the other, and two that do not, one that only touches, in a fresh order each screen";
    let crossing = list_shuffle_take(
      [
        [9, 11, 10, 12],
        [13, 15, 14, 16],
        [10, 12, 9, 11],
      ],
      1,
    );
    let inside = list_shuffle_take(
      [
        [8, 12, 9, 10],
        [13, 14, 12, 16],
      ],
      1,
    );
    let touching = list_shuffle_take(
      [
        [9, 10, 10, 11],
        [14, 16, 12, 14],
      ],
      1,
    );
    let apart = list_shuffle_take(
      [
        [9, 10, 13, 14],
        [14, 16, 8, 11],
      ],
      1,
    );
    let overlapping = list_concat(crossing, inside);
    let separate = list_concat(touching, apart);
    let all = list_concat(overlapping, separate);
    list_shuffle(all);
    return all;
  }
  let max_shared = js_code_call_args(max_name, ["9", "10"]);
  let min_shared = js_code_call_args(min_name, ["11", "12"]);
  let shared_check = js_code_binary_spaced_nb("10", before, "11");
  let max_touch = js_code_call_args(max_name, ["9", "10"]);
  let min_touch = js_code_call_args(min_name, ["10", "11"]);
  let touch_check = js_code_binary_spaced_nb("10", before, "10");
  let lesson = app_code_lesson_statement_formula_answer_count({
    words: "Do two meetings overlap",
    title_code: line_overlap,
    names,
    values_get,
    example_values: [9, 11, 10, 12],
    step,
    remember_lesson: app_code_lesson_expression_larger,
    remember_parts: ["we can find the larger and the smaller of two numbers:"],
    remember_lines,
    explain: [
      [
        "Suppose one meeting is from ",
        "9",
        " to ",
        "11",
        " o'clock, and another is from ",
        "10",
        " to ",
        "12",
      ],
      ["Both meetings happen from ", "10", " to ", "11", ", so they overlap"],
      app_code_explain_container_next,
      ["The time they share starts at the later start:"],
      ["", max_shared, " is ", "10"],
      ["And it ends at the earlier end:"],
      ["", min_shared, " is ", "11"],
      ["It starts before it ends, so the meetings overlap:"],
      ["", shared_check, " is ", "true"],
      app_code_explain_container_next,
      [
        "But a meeting from ",
        "9",
        " to ",
        "10",
        " and one from ",
        "10",
        " to ",
        "11",
        " only touch:",
      ],
      ["", max_touch, " is ", "10"],
      ["", min_touch, " is ", "10"],
      ["", touch_check, " is ", "false"],
      app_code_explain_container_next,
      [
        "Suppose the first meeting is from ",
        s,
        " to ",
        e,
        ", and the second is from ",
        s2,
        " to ",
        e2,
      ],
      ["Here is code that checks whether the two meetings overlap:"],
    ],
    decoys: null,
    example_pointers: null,
    answer_count: 2,
  });
  return lesson;
}
