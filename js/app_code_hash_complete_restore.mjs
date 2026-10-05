import { app_code_hash_complete_before_word } from "./app_code_hash_complete_before_word.mjs";
import { app_code_lesson_hash_key } from "./app_code_lesson_hash_key.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { app_code_progress_before_complete_mark } from "./app_code_progress_before_complete_mark.mjs";
import { equal } from "./equal.mjs";
import { app_code_hash_complete_known_is } from "./app_code_hash_complete_known_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_hash_complete_key } from "./app_code_hash_complete_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { app_code_progress_released_complete_mark } from "./app_code_progress_released_complete_mark.mjs";
export function app_code_hash_complete_restore(context, hash) {
  arguments_assert(arguments, 2);
  ("If the link says complete=released, mark every released lesson finished before anything is drawn, so the lesson list opens with only the lessons latest does not have left open.");
  ("Marking is safe to repeat, so a link left in the address bar and reloaded does nothing new.");
  let key = app_code_hash_complete_key();
  let said = property_get_or_null(hash, key);
  let before = app_code_hash_complete_before_word();
  let from_lesson = equal(said, before);
  if (from_lesson) {
    ("complete=before marks the lessons above the one the link opens on and not the released ones, which may be fewer or more; a link saying before with no lesson marks nothing, since there is nothing to stand before");
    let property = app_code_lesson_hash_key();
    let lesson_id = property_get_or_null(hash, property);
    let lesson_said = null_not_is(lesson_id);
    if (lesson_said) {
      app_code_progress_before_complete_mark(context, lesson_id);
    }
    return;
  }
  let asked = app_code_hash_complete_known_is(said);
  if (asked) {
    app_code_progress_released_complete_mark(context);
  }
}
