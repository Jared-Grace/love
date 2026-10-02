import { app_code_lesson_statement_name_page_start } from "./app_code_lesson_statement_name_page_start.mjs";
import { app_code_lesson_statement_name_even } from "./app_code_lesson_statement_name_even.mjs";
import { app_code_lesson_statement_name_clock_back } from "./app_code_lesson_statement_name_clock_back.mjs";
import { app_code_lesson_statement_name_grid_inside } from "./app_code_lesson_statement_name_grid_inside.mjs";
export function app_code_lessons_latest_held_fns() {
  "the lessons kept off latest while every other lesson is shown there, asked for by the human 2026-09-30: deploy through lesson 204 and skip 205, the 24-hour clock, which is not ready to hand over yet";
  "A list of lessons rather than a cut at a number, for the same reason the released list is one: a lesson put in above would move a number, and a list names the lesson itself. Empty it to show every lesson on latest again. The working copy shows these lessons whatever this holds.";
  "asked again by the human 2026-10-01: deploy through lesson 211 and hold 212 onward, whose writing is still being worded";
  "then deploy through 214, 2026-10-01: nothing held";
  "2026-10-02: hold 215 until the human has read its first draft";
  "then deploy through 215, 2026-10-02: nothing held";
  "2026-10-02: hold 216, King steps, until the human has read its first draft";
  "then deploy through 216, 2026-10-02: nothing held";
  "2026-10-02: hold 217 onward, the five lessons picked after King steps, until the human has read their first drafts";
  let fns = [
    app_code_lesson_statement_name_grid_inside,
    app_code_lesson_statement_name_clock_back,
    app_code_lesson_statement_name_even,
    app_code_lesson_statement_name_page_start,
  ];
  return fns;
}
