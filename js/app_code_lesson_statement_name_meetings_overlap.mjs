import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_get } from "./list_get.mjs";
import { js_operator_less_than_symbol } from "./js_operator_less_than_symbol.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { html_div_cycle_code } from "./html_div_cycle_code.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
import { app_code_lesson_statement_formula_answer_count } from "./app_code_lesson_statement_formula_answer_count.mjs";
import { app_code_lesson_expression_larger } from "./app_code_lesson_expression_larger.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_meetings_overlap() {
  arguments_assert(arguments, 0);
  ("whether two meetings overlap: let start = Math.max(s1, s2); let end = Math.min(e1, e2); let overlap = start < end; - picked by the human 2026-10-03 from a list of next lessons. In DSA it is the interval overlap check, used to merge ranges, to find clashes in a schedule, and to test whether two boxes touch.");
  ("The time two meetings share starts at the later start and ends at the earlier end, so the lesson is the previous one's Math.max and Math.min used on two meetings, and Larger is the reminder, quoted the same way the heater lesson quotes it.");
  ("< and not <=, a change from the list the human picked from: a meeting that ends at 10 and one that starts at 10 only touch, and nobody has to be in two rooms at once. Every screen asks one such pair, because it is the case the <= would get wrong. The name is overlap rather than ok, so the last line says what it checks.");
  ("Times are whole hours of the day, 8 to 16, so a learner reads 9 as nine o'clock without being taught a clock.");
  ("The answers are only true or false, so a question offers two buttons. Each screen asks two pairs that overlap, one of them a meeting inside the other, and two that do not, one of them a pair that only touches.");
  ("Start hours wear one colour and end hours another, in the writing and in its code, asked by the human 2026-10-03, so a learner can see Math.max is only ever handed starts and Math.min only ends. A number is coloured by the part it plays where it stands, so the 10 a meeting ends at and the 10 the next one starts at differ. The last example's program colours the same way: s1, s2, start and the start hours in one colour, e1, e2, end and the end hours in the other. The question programs stay plain, as in the other coloured formula lessons.");
  ("The writing of the first two screens and of the pair that only touches is the human's, 2026-10-03; the lines working Math.max and Math.min and the last screen are a first draft, not yet the human's.");
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
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let plain = app_shared_color_code_background();
  function from(text) {
    "a start hour, or a name holding one, as a chip in the start colour";
    let chip = app_code_explain_number_colored(text, start_color);
    return chip;
  }
  function till(text) {
    "an end hour, or a name holding one, as a chip in the end colour";
    let chip = app_code_explain_number_colored(text, end_color);
    return chip;
  }
  function call_worked(name, first, second, color) {
    "name(first, second) as one code chip, both hours in the colour of the part they play";
    let chip = app_code_explain_code_colored_inline(
      [name + "(", first, ", ", second, ")"],
      [plain, color, plain, color, plain],
    );
    return chip;
  }
  let spaced_before = js_code_binary_spaced_nb("", before, "");
  function check_worked(low, high) {
    "low < high as one code chip, the start hour in the start colour and the end hour in the end colour";
    let chip = app_code_explain_code_colored_inline(
      [low, spaced_before, high],
      [start_color, plain, end_color],
    );
    return chip;
  }
  let is_false = app_code_explain_number_colored("false", plain);
  let max_shared = call_worked(max_name, "9", "10", start_color);
  let min_shared = call_worked(min_name, "11", "12", end_color);
  let max_touch = call_worked(max_name, "9", "10", start_color);
  let min_touch = call_worked(min_name, "10", "11", end_color);
  let v = from("9");
  let v2 = till("11");
  let v3 = from("10");
  let v4 = till("12");
  let draw = app_code_explain_said([
    "Suppose one meeting is from ",
    v,
    " to ",
    v2,
    " o'clock, and another is from ",
    v3,
    " to ",
    v4,
  ]);
  let v5 = from("10");
  let v6 = till("11");
  let draw2 = app_code_explain_said([
    "From ",
    v5,
    " to ",
    v6,
    ", the first meeting has its last hour",
  ]);
  let v7 = from("10");
  let v8 = till("11");
  let draw3 = app_code_explain_said([
    "From ",
    v7,
    " to ",
    v8,
    ", the second meeting has its first hour",
  ]);
  let v9 = from("10");
  let v10 = till("11");
  let draw4 = app_code_explain_said([
    "So from ",
    v9,
    " to ",
    v10,
    " both meetings happen",
  ]);
  let v11 = from("10");
  let draw5 = app_code_explain_said(["", max_shared, " is ", v11]);
  let v12 = till("11");
  let draw6 = app_code_explain_said(["", min_shared, " is ", v12]);
  let v13 = from("10");
  let draw7 = app_code_explain_said(["The overlap starts at ", v13]);
  let v14 = till("11");
  let draw8 = app_code_explain_said(["The overlap ends at ", v14]);
  let v15 = check_worked("10", "11");
  let draw9 = app_code_explain_said(["", v15]);
  let v16 = from("10");
  let v17 = till("11");
  let draw10 = app_code_explain_said([
    "So the overlap starts (",
    v16,
    ") before it ends (",
    v17,
    ")",
  ]);
  let v18 = from("9");
  let v19 = till("10");
  let v20 = from("10");
  let v21 = till("11");
  let draw11 = app_code_explain_said([
    "But a meeting from ",
    v18,
    " to ",
    v19,
    " and one from ",
    v20,
    " to ",
    v21,
    " only touch; they don't have any actual overlap:",
  ]);
  let v22 = from("10");
  let draw12 = app_code_explain_said(["", max_touch, " is ", v22]);
  let v23 = till("10");
  let draw13 = app_code_explain_said(["", min_touch, " is ", v23]);
  let v24 = check_worked("10", "10");
  let draw14 = app_code_explain_said(["", v24, " is ", is_false]);
  let v25 = from(s);
  let v26 = till(e);
  let v27 = from(s2);
  let v28 = till(e2);
  let draw15 = app_code_explain_said([
    "Suppose the first meeting is from ",
    v25,
    " to ",
    v26,
    ", and the second is from ",
    v27,
    " to ",
    v28,
  ]);
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
      draw,
      draw2,
      draw3,
      draw4,
      ["So both meetings have overlap"],
      app_code_explain_container_next,
      ["The time they share starts at the later start:"],
      draw5,
      ["And it ends at the earlier end:"],
      draw6,
      draw7,
      draw8,
      draw9,
      draw10,
      ["So the meetings overlap"],
      app_code_explain_container_next,
      draw11,
      draw12,
      draw13,
      draw14,
      app_code_explain_container_next,
      draw15,
      ["Here is code that checks whether the two meetings overlap:"],
    ],
    decoys: null,
    example_pointers: [
      [[s, s2, start, "9", "10"], start_color],
      [[e, e2, end, "11", "12"], end_color],
    ],
    answer_count: 2,
  });
  return lesson;
}
