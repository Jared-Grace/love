import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { app_code_lesson_statement_title_code_note_paint_get } from "./app_code_lesson_statement_title_code_note_paint_get.mjs";
import { app_code_lesson_statement_name_watched_titled } from "./app_code_lesson_statement_name_watched_titled.mjs";
export function app_code_lesson_statement_name_pair_first(pair) {
  arguments_assert(arguments, 1);
  ("the first lesson of a pair where a name takes new values: the programs of the pair, each with the name written out after every change");
  ("A pair is one description both its lessons are built from, so the lesson that writes out every value and the one that writes out only the last cannot drift apart: the same programs, the same change in both titles. The second is built by the pair's other builder.");
  ("Every value written out comes first, and the lesson after asks the same programs with only the last writing-out: seen first, each value is on the screen, and only then is a learner asked to carry the changes in their head (the human's order, 2026-09-27).");
  let fragment = property_get(pair, "fragment");
  let noted = app_code_lesson_statement_title_code_note_paint_get(
    fragment,
    "each logged",
  );
  let lesson = app_code_lesson_statement_name_watched_titled(pair, noted);
  return lesson;
}
