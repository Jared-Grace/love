import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { js_operator_minus_symbol } from "./js_operator_minus_symbol.mjs";
import { js_code_binary_spaced_nb } from "./js_code_binary_spaced_nb.mjs";
import { js_code_let_statement } from "./js_code_let_statement.mjs";
import { js_operator_less_than_equal_symbol } from "./js_operator_less_than_equal_symbol.mjs";
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
import { app_code_highlight_color_fourth } from "./app_code_highlight_color_fourth.mjs";
import { app_code_highlight_color_fifth } from "./app_code_highlight_color_fifth.mjs";
import { app_code_explain_word_colored } from "./app_code_explain_word_colored.mjs";
import { app_code_meetings_hours_draw } from "./app_code_meetings_hours_draw.mjs";
import { app_code_explain_said } from "./app_code_explain_said.mjs";
import { app_code_lesson_statement_formula } from "./app_code_lesson_statement_formula.mjs";
import { app_code_lesson_statement_name_meeting_ended } from "./app_code_lesson_statement_name_meeting_ended.mjs";
import { app_code_explain_container_next } from "./app_code_explain_container_next.mjs";
export function app_code_lesson_statement_name_meetings_free() {
  arguments_assert(arguments, 0);
  ("how many hours are free between two meetings, once the first has ended by the time the second starts: let free = s2 - e1; - picked by Claude 2026-10-05 when the human asked for the next lesson, named in Has one meeting ended by the time another starts as the step that needs that check first. In DSA it is the gap between two intervals sorted by start, the free time found between each meeting and the next.");
  ("Not picked: a rectangle left of another, which is the ended check across and can follow this; the number of meetings going on at once, which needs a loop; and holding a negative gap at 0 with Math.max, which How long two meetings overlap already teaches. Every pair asked here has the first meeting ended by the time the second starts, so the answer is never negative and the lesson stays one subtraction.");
  ("Only e1 and s2 are names, unlike Has one meeting ended by the time another starts, which kept s1 and e2 to show they do not decide it: here that is already known, so the program is the two hours that matter and the line. Named free and not gap, because How long two meetings overlap already calls end - start gap, the other way round; break is a word JavaScript keeps for itself.");
  ("End hours wear the end colour and start hours the start colour, as in the meetings lessons, so s2 - e1 reads as a start less an end. The free hours wear a third colour, as the hours of an overlap do in How long two meetings overlap.");
  ("Each screen asks free times of 0, 1, 2 and 3 hours, so the four answers differ and one is the 0 of two meetings that touch.");
  ("The writing is a first draft by Claude 2026-10-05.");
  let names = ["e1", "s2"];
  let e = list_first(names);
  let s2 = list_second(names);
  let free = "free";
  let minus = js_operator_minus_symbol();
  let difference = js_code_binary_spaced_nb(s2, minus, e);
  let line_free = js_code_let_statement(free, difference);
  let step = {
    middle: [line_free],
    logged: [free],
  };
  let s = "s1";
  let e2 = "e2";
  let ended = "ended";
  let at_most = js_operator_less_than_equal_symbol();
  let check_before = js_code_binary_spaced_nb(e, at_most, s2);
  let line_before = js_code_let_statement(ended, check_before);
  let remember_lines = app_code_lesson_statement_name_swap_program(
    [
      [s, 8],
      [e, 10],
      [s2, 11],
      [e2, 12],
    ],
    [line_before],
    [ended],
  );
  function values_get() {
    "an end and a later start with 0, 1, 2 and 3 hours between them, in a fresh order each screen";
    let none = list_shuffle_take(
      [
        [10, 10],
        [12, 12],
      ],
      1,
    );
    let one_hour = list_shuffle_take(
      [
        [10, 11],
        [13, 14],
      ],
      1,
    );
    let two_hours = list_shuffle_take(
      [
        [9, 11],
        [12, 14],
      ],
      1,
    );
    let three_hours = list_shuffle_take(
      [
        [8, 11],
        [11, 14],
      ],
      1,
    );
    let short = list_concat(none, one_hour);
    let long = list_concat(two_hours, three_hours);
    let all = list_concat(short, long);
    list_shuffle(all);
    return all;
  }
  let start_color = app_code_highlight_color();
  let end_color = app_code_highlight_color_second();
  let free_color = app_code_highlight_color_third();
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
  function lasting(text) {
    "how many hours are free, as a chip in the free colour";
    let chip = app_code_explain_number_colored(text, free_color);
    return chip;
  }
  let spaced_minus = js_code_binary_spaced_nb("", minus, "");
  function free_worked(started, ended_at) {
    "started - ended_at as one code chip, the second meeting's start in the start colour and the first's end in the end colour";
    let chip = app_code_explain_code_colored_inline(
      [started, spaced_minus, ended_at],
      [start_color, plain, end_color],
    );
    return chip;
  }
  let first_color = app_code_highlight_color_fourth();
  let second_color = app_code_highlight_color_fifth();
  function one(text) {
    "words naming the first meeting, in the colour the picture fills it with";
    let word = app_code_explain_word_colored(text, first_color);
    return word;
  }
  function two(text) {
    "words naming the second meeting, in the colour the picture fills it with";
    let word = app_code_explain_word_colored(text, second_color);
    return word;
  }
  function meetings_draw(second_start, second_end) {
    "the first meeting, 8 to 10, above the second, on a ruler of the hours from 8 to 12";
    function draw(box) {
      app_code_meetings_hours_draw(box, 8, 12, [
        [8, 10],
        [second_start, second_end],
      ]);
    }
    return draw;
  }
  let first_meeting = one("first meeting");
  let first_one = one("first one");
  let second_meeting = two("second meeting");
  let second = two("second");
  let v = one("one meeting");
  let v2 = from("8");
  let v3 = till("10");
  let v4 = two("another");
  let v5 = from("11");
  let v6 = till("12");
  let suppose_said = app_code_explain_said([
    "Suppose ",
    v,
    " is from ",
    v2,
    " to ",
    v3,
    " o'clock, and ",
    v4,
    " is from ",
    v5,
    " to ",
    v6,
  ]);
  let apart_draw = meetings_draw(11, 12);
  let how_said = app_code_explain_said([
    "How many hours are free between the ",
    first_meeting,
    " and the ",
    second,
    "?",
  ]);
  let compare_said = app_code_explain_said([
    "We subtract the end of the ",
    first_meeting,
    " from the start of the ",
    second,
    ":",
  ]);
  let v7 = free_worked("11", "10");
  let v8 = lasting("1");
  let apart_worked = app_code_explain_said(["", v7, " is ", v8]);
  let v9 = lasting("1");
  let apart_so = app_code_explain_said(["So ", v9, " hour is free"]);
  let v10 = from("10");
  let v11 = till("12");
  let touching_suppose = app_code_explain_said([
    "But suppose the ",
    second_meeting,
    " is from ",
    v10,
    " to ",
    v11,
  ]);
  let touching_draw = meetings_draw(10, 12);
  let v12 = free_worked("10", "10");
  let v13 = lasting("0");
  let touching_worked = app_code_explain_said(["", v12, " is ", v13]);
  let v14 = lasting("0");
  let v15 = till("10");
  let touching_said = app_code_explain_said([
    "So ",
    v14,
    " hours are free: the ",
    second,
    " starts just when the ",
    first_one,
    " ends, at ",
    v15,
  ]);
  let v16 = till(e);
  let v17 = from(s2);
  let names_said = app_code_explain_said([
    "Suppose the ",
    first_meeting,
    " ends at ",
    v16,
    ", and the ",
    second,
    " starts at ",
    v17,
  ]);
  let code_said = app_code_explain_said([
    "Here is code that finds how many hours are free between the meetings:",
  ]);
  let lesson = app_code_lesson_statement_formula({
    words: "How many hours are free between two meetings",
    title_code: line_free,
    names,
    values_get,
    example_values: [10, 11],
    step,
    remember_lesson: app_code_lesson_statement_name_meeting_ended,
    remember_parts: [
      "we can check whether one meeting has ended by the time another starts:",
    ],
    remember_lines,
    explain: [
      suppose_said,
      apart_draw,
      how_said,
      app_code_explain_container_next,
      compare_said,
      apart_worked,
      apart_so,
      app_code_explain_container_next,
      touching_suppose,
      touching_draw,
      touching_worked,
      touching_said,
      app_code_explain_container_next,
      names_said,
      code_said,
    ],
    decoys: null,
    example_pointers: [
      [[e, "10"], end_color],
      [[s2, "11"], start_color],
      [[free, "1"], free_color],
    ],
  });
  return lesson;
}
