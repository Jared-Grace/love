import { app_code_lesson_statement_name_seat_one } from "./app_code_lesson_statement_name_seat_one.mjs";
import { app_code_lesson_statement_name_seat_zero } from "./app_code_lesson_statement_name_seat_zero.mjs";
import { app_code_lesson_statement_name_last_seat } from "./app_code_lesson_statement_name_last_seat.mjs";
export function app_code_lessons_latest_held_fns() {
  "the lessons kept off latest while every other lesson is shown there, asked for by the human 2026-09-30: deploy through lesson 204 and skip 205, the 24-hour clock, which is not ready to hand over yet";
  "A list of lessons rather than a cut at a number, for the same reason the released list is one: a lesson put in above would move a number, and a list names the lesson itself. Empty it to show every lesson on latest again. The working copy shows these lessons whatever this holds.";
  "asked again by the human 2026-10-01: deploy through lesson 211 and hold 212 onward, whose writing is still being worded";
  let fns = [
    app_code_lesson_statement_name_last_seat,
    app_code_lesson_statement_name_seat_one,
    app_code_lesson_statement_name_seat_zero,
  ];
  return fns;
}
