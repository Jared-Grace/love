import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_name_watched_titled } from "./app_code_lesson_statement_name_watched_titled.mjs";
export function app_code_lesson_statement_name_single(pair) {
  arguments_assert(arguments, 1);
  ("a lesson where a name takes new values that has no second lesson writing out only the last value: the pair's programs, each with the name written out after every change, under a title with no note");
  ("NO (each logged) NOTE: the note is there to tell a lesson from its twin that writes out only the last value, and with no twin there is nothing to tell it from - so the note would be one more thing to read that says nothing, at the human's request, 2026-09-27.");
  let fragment = property_get(pair, "fragment");
  let lesson = app_code_lesson_statement_name_watched_titled(pair, fragment);
  return lesson;
}
