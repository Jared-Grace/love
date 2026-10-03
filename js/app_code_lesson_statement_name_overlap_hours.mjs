import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_code_highlight_color_third } from "./app_code_highlight_color_third.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_meetings_overlap } from "./app_code_lesson_statement_name_meetings_overlap.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_overlap_hours() {
  arguments_assert(arguments, 0);
  ("how many hours two meetings overlap: let gap = end - start; let hours = Math.max(gap, 0); - chosen by Claude 2026-10-03, when the human asked for another lesson without naming one. In DSA it is the length of the overlap of two ranges, used to total shared time and to measure how much two boxes cover each other; the Math.max with 0 is the step that is forgotten, and a negative length is the bug it leaves.");
  ("It starts from the overlap's start and end rather than from the two meetings, because Do two meetings overlap already finds those, so that lesson is the reminder and the new idea is only the length and the 0 floor. Not picked: the middle of a range, which Middle already teaches, and the four meeting times as names, which would put five lines in every program.");
  ("Two lines, because let hours = Math.max(end - start, 0); is longer than 30 characters. The name gap is short enough to keep the second line inside 30, and it reads true either way: the room between the start and the end, which is less than 0 when the end comes first. Not picked: length and diff, which put the second line past 30 characters.");
  ("Start hours are blue and end hours green, as in Do two meetings overlap, so end - start can be read as a later number less an earlier one. The overlap wears a third colour, asked by the human 2026-10-04: every length, the -1 that is too small, the 0 it becomes and the 0 it is held at, and in the last example's program the names gap and hours and the number written out.");
  ("Each screen asks three overlaps of different lengths and one pair that does not overlap, so the four answers differ and exactly one is the 0 the Math.max makes.");
  ("The writing is the human's, 2026-10-04, apart from the reminder and the last two lines, which are a first draft. The colon after So the overlap is 2 hours long was dropped, because nothing follows it on that screen.");
  let names = ["start", "end"];
  let start = list_first(names);
  let end = list_second(names);
  let gap = "gap";
  let hours = "hours";
  let minus = js_operator_minus_symbol();
  let difference = js_code_binary_spaced_nb(end, minus, start);
  let line_gap = js_code_let_statement(gap, difference);
  let floored = js_code_call_args("Math.max", [gap, "0"]);
  let line_hours = js_code_let_statement(hours, floored);
  let step = {
    middle: [line_gap, line_hours],
    logged: [hours],
  };
  let s = "s1";
  let e = "e1";
  let s2 = "s2";
  let e2 = "e2";
  let later = js_code_call_args("Math.max", [s, s2]);
  let line_start = js_code_let_statement(start, later);
  let earlier = js_code_call_args("Math.min", [e, e2]);
  let line_end = js_code_let_statement(end, earlier);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [s, 9],
      [e, 11],
      [s2, 10],
      [e2, 12],
    ],
    [line_start, line_end],
    [start, end],
  );
  function values_get() {
    "three overlaps of different lengths and one pair that does not overlap, in a fresh order each screen";
    let overlapping = list_shuffle_take(
      [
        [10, 12],
        [13, 16],
        [9, 10],
        [8, 12],
      ],
      3,
    );
    let separate = list_shuffle_take(
      [
        [11, 10],
        [14, 12],
      ],
      1,
    );
    let all = list_concat(overlapping, separate);
    list_shuffle(all);
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let overlap_color = app_code_highlight_color_third();
  let plain = app_shared_color_code_background();
  function from(text) {
    "a start hour, or the name holding it, as a chip in the start colour";
    let chip = app_code_explain_number_colored(text, start_color);
    return chip;
  }
  function till(text) {
    "an end hour, or the name holding it, as a chip in the end colour";
    let chip = app_code_explain_number_colored(text, end_color);
    return chip;
  }
  function lasting(text) {
    "how long the overlap is, as a chip in the overlap colour";
    let chip = app_code_explain_number_colored(text, overlap_color);
    return chip;
  }
  let spaced_minus = js_code_binary_spaced_nb("", minus, "");
  function gap_worked(high, low) {
    "high - low as one code chip, the end hour in the end colour and the start hour in the start colour";
    let chip = app_code_explain_code_colored_inline(
      [high, spaced_minus, low],
      [end_color, plain, start_color],
    );
    return chip;
  }
  let max_floor = app_code_explain_code_colored_inline(
    ["Math.max(", "-1", ", ", "0", ")"],
    [plain, overlap_color, plain, overlap_color, plain],
  );
  let v = from("10");
  let v2 = till("12");
  let draw = app_code_explain_said([
    "Suppose two meetings overlap from ",
    v,
    " to ",
    v2,
  ]);
  let v3 = gap_worked("12", "10");
  let v4 = lasting("2");
  let draw2 = app_code_explain_said(["", v3, " is ", v4]);
  let v5 = lasting("2");
  let draw3 = app_code_explain_said(["So the overlap is ", v5, " hours long"]);
  let v6 = from("9");
  let v7 = till("10");
  let v8 = from("11");
  let v9 = till("12");
  let draw4 = app_code_explain_said([
    "But suppose one meeting is from ",
    v6,
    " to ",
    v7,
    ", and another is from ",
    v8,
    " to ",
    v9,
  ]);
  let v10 = from("11");
  let v11 = till("10");
  let draw5 = app_code_explain_said([
    "The later start is ",
    v10,
    ", and the earlier end is ",
    v11,
  ]);
  let v12 = gap_worked("10", "11");
  let v13 = lasting("-1");
  let draw6 = app_code_explain_said(["", v12, " is ", v13]);
  let v14 = lasting("-1");
  let draw7 = app_code_explain_said([
    "But meetings cannot overlap for ",
    v14,
    " hours",
  ]);
  let v15 = lasting("0");
  let draw8 = app_code_explain_said([
    "We want the overlap to be ",
    v15,
    " hours",
  ]);
  let v16 = lasting("0");
  let draw9 = app_code_explain_said([
    "So we want: if the overlap is negative, then make the overlap ",
    v16,
    " instead of negative",
  ]);
  let v17 = lasting("0");
  let draw10 = app_code_explain_said(["", max_floor, ", which is ", v17]);
  let v18 = from(start);
  let v19 = till(end);
  let draw11 = app_code_explain_said([
    "Suppose the overlap starts at ",
    v18,
    " and ends at ",
    v19,
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "How long two meetings overlap",
    title_code: line_hours,
    names,
    values_get,
    example_values: [11, 10],
    step,
    remember_lesson: app_code_lesson_statement_name_meetings_overlap,
    remember_parts: [
      "we can find when the overlap of two meetings starts and ends:",
    ],
    remember_lines,
    explain: [
      draw,
      draw2,
      draw3,
      app_code_explain_container_next,
      draw4,
      draw5,
      draw6,
      draw7,
      draw8,
      draw9,
      ["Here's the code for that:"],
      draw10,
      app_code_explain_container_next,
      draw11,
      ["Here is code that finds how many hours the meetings overlap:"],
    ],
    decoys: null,
    example_pointers: [
      [[start, "11"], start_color],
      [[end, "10"], end_color],
      [[gap, hours, "0"], overlap_color],
    ],
  });
  return lesson;
}
