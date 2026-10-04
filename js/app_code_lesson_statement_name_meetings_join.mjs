import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { list_get } from "./list_get.mjs";
import { js_code_call_args } from "./js_code_call_args.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { app_code_lesson_statement_name_swap_program } from "./app_code_lesson_statement_name_swap_program.mjs";
import { list_shuffle_take } from "./list_shuffle_take.mjs";
import { list_concat } from "./list_concat.mjs";
import { list_shuffle } from "./list_shuffle.mjs";
import { app_code_highlight_color } from "./app_code_highlight_color.mjs";
import { app_code_highlight_color_second } from "./app_code_highlight_color_second.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { app_code_explain_number_colored } from "./app_code_explain_number_colored.mjs";
import { app_code_explain_code_colored_inline } from "./app_code_explain_code_colored_inline.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_meetings_overlap } from "./app_code_lesson_statement_name_meetings_overlap.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_meetings_join() {
  arguments_assert(arguments, 0);
  ("when two overlapping meetings together start and end: let start = Math.min(s1, s2); let end = Math.max(e1, e2); - chosen by Claude 2026-10-04, when the human asked for another lesson building on the meetings lessons. In DSA it is the step of merging intervals: two ranges that overlap become one range, from the earlier start to the later end.");
  ("It is Do two meetings overlap turned around: the overlap takes the later start and the earlier end, and joining takes the earlier start and the later end. So that lesson is the reminder, and the writing sets the two side by side. Not picked: the length of the joined time, which would put a third line on every program and repeat How long two meetings overlap.");
  ("Every pair asked overlaps or touches, because two meetings with time between them do not make one block, and checking that first is the previous lesson's job. One pair is always a meeting inside the other, where the joined time is just the longer meeting. The answers of a screen all differ.");
  ("Start hours are blue and end hours green, as in the other meetings lessons, in the writing and in the last example's program.");
  ("The writing is the human's, 2026-10-04.");
  let names = ["s1", "e1", "s2", "e2"];
  let s = list_first(names);
  let e = list_second(names);
  let s2 = list_get(names, 2);
  let e2 = list_get(names, 3);
  let start = "start";
  let end = "end";
  let max_name = "Math.max";
  let min_name = "Math.min";
  let earlier = js_code_call_args(min_name, [s, s2]);
  let line_start = js_code_let_statement(start, earlier);
  let later = js_code_call_args(max_name, [e, e2]);
  let line_end = js_code_let_statement(end, later);
  let step = {
    middle: [line_start, line_end],
    logged: [start, end],
  };
  let overlap_start = js_code_call_args(max_name, [s, s2]);
  let overlap_line_start = js_code_let_statement(start, overlap_start);
  let overlap_end = js_code_call_args(min_name, [e, e2]);
  let overlap_line_end = js_code_let_statement(end, overlap_end);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [s, 9],
      [e, 11],
      [s2, 10],
      [e2, 12],
    ],
    [overlap_line_start, overlap_line_end],
    [start, end],
  );
  function values_get() {
    "a meeting inside another every screen, and three of four pairs that cross or touch, in a fresh order each screen";
    let others = list_shuffle_take(
      [
        [9, 11, 10, 12],
        [14, 16, 12, 15],
        [9, 10, 10, 11],
        [13, 15, 14, 16],
      ],
      3,
    );
    let all = list_concat([[8, 12, 9, 10]], others);
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
  let min_joined = call_worked(min_name, "9", "10", start_color);
  let max_joined = call_worked(max_name, "11", "12", end_color);
  let v = from("9");
  let v2 = till("11");
  let v3 = from("10");
  let v4 = till("12");
  let draw = app_code_explain_said([
    "For example, suppose one meeting is from ",
    v,
    " to ",
    v2,
    ", and the other is from ",
    v3,
    " to ",
    v4,
  ]);
  let v5 = from("9");
  let v6 = till("12");
  let draw2 = app_code_explain_said([
    "Together, the two meetings take the time from ",
    v5,
    " to ",
    v6,
  ]);
  let v7 = from("9");
  let draw3 = app_code_explain_said(["", min_joined, " is ", v7]);
  let v8 = till("12");
  let draw4 = app_code_explain_said(["", max_joined, " is ", v8]);
  let v9 = from(s);
  let v10 = till(e);
  let v11 = from(s2);
  let v12 = till(e2);
  let draw5 = app_code_explain_said([
    "Suppose the first meeting is from ",
    v9,
    " to ",
    v10,
    ", and the second is from ",
    v11,
    " to ",
    v12,
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "Join two overlapping meetings",
    title_code: line_end,
    names,
    values_get,
    example_values: [9, 11, 10, 12],
    step,
    remember_lesson: app_code_lesson_statement_name_meetings_overlap,
    remember_parts: [
      "we can find when the overlap of two meetings starts and ends:",
    ],
    remember_lines,
    explain: [
      ["Suppose we have two meetings that overlap"],
      draw,
      draw2,
      app_code_explain_container_next,
      ["When does the first meeting start?"],
      [
        "We can use ",
        min_name,
        " on the start times to find the smaller/earlier start time:",
      ],
      draw3,
      ["When does the last meeting end?"],
      [
        "We can use ",
        max_name,
        " on the end times to find the larger/later end time:",
      ],
      draw4,
      app_code_explain_container_next,
      [
        "When we solved the overlap, we used the later start and the earlier end, so we used ",
        max_name,
        " for the start and ",
        min_name,
        " for the end",
      ],
      [
        "Here we use the earlier start and the later end, so we use ",
        min_name,
        " for the start and ",
        max_name,
        " for the end",
      ],
      app_code_explain_container_next,
      draw5,
      ["Here is code that finds when the two meetings together start and end:"],
    ],
    decoys: null,
    example_pointers: [
      [[s, s2, start, "9", "10"], start_color],
      [[e, e2, end, "11", "12"], end_color],
    ],
  });
  return lesson;
}
