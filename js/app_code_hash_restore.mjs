import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_code_lesson_hash_key } from "./app_code_lesson_hash_key.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { storage_session_set_context } from "./storage_session_set_context.mjs";
import { app_code_screen_hash_key } from "./app_code_screen_hash_key.mjs";
import { app_shared_screen_stored_set_context } from "./app_shared_screen_stored_set_context.mjs";
import { app_code_quiz_hash_key } from "./app_code_quiz_hash_key.mjs";
export function app_code_hash_restore(context) {
  "if the URL carries a shared hash, seed the lesson, screen, and quiz position into storage BEFORE the first render, so the link opens right where it was shared from";
  "It reads the address as the object every other page reads it as, rather than taking the text and cutting it up itself. Its own parsing named these three fields in a shape no reading of the repo could see, so all three sat unanswered while the gate that counts unanswered words reported nothing about this page at all - and the parsing itself was a second, quietly different copy of what one shared reader already does.";
  let hash = html_hash_object_get();
  let property = app_code_lesson_hash_key();
  let lesson_id = property_get_or_null(hash, property);
  let lesson_said = null_not_is(lesson_id);
  if (lesson_said) {
    storage_session_set_context(context, "lesson_id", lesson_id);
  }
  let property2 = app_code_screen_hash_key();
  let screen_name = property_get_or_null(hash, property2);
  let screen_said = null_not_is(screen_name);
  if (screen_said) {
    app_shared_screen_stored_set_context(context, screen_name);
  }
  let property3 = app_code_quiz_hash_key();
  let quiz_index = property_get_or_null(hash, property3);
  let quiz_said = null_not_is(quiz_index);
  if (quiz_said) {
    let counted = Number(quiz_index);
    storage_session_set_context(context, "quiz_index", counted);
  }
}
