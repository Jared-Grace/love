import { null_not_is } from "./null_not_is.mjs";
import { property_set } from "./property_set.mjs";
import { storage_session_get_context } from "./storage_session_get_context.mjs";
import { app_code_lesson_hash_key } from "./app_code_lesson_hash_key.mjs";
import { app_shared_screen_stored_get } from "./app_shared_screen_stored_get.mjs";
import { app_code_screen_hash_key } from "./app_code_screen_hash_key.mjs";
import { app_code_quiz_hash_key } from "./app_code_quiz_hash_key.mjs";
import { html_hash_set_object } from "./html_hash_set_object.mjs";
export function app_code_hash_write(context) {
  "reflect the current lesson, screen, and quiz position in the URL hash, so the link is shareable and reopens exactly where you are; runs after every refresh";
  "The pairs are stood next to each other the way every other page in the repo stands them, rather than the way a query string does. What made that worth changing is that a reader who is offered a correction and takes it has their answer written back into the address by shared code, in the shared shape - so a page writing its own shape would have had its link change shape underneath it the first time somebody fixed a word in it.";
  let hash = {};
  function add_part(key, value) {
    "add key=value to the hash only when the value is set, so an unstarted quiz leaves q off rather than writing null";
    let present = null_not_is(value);
    if (present) {
      property_set(hash, key, value);
    }
  }
  let value2 = storage_session_get_context(context, "lesson_id");
  let v = app_code_lesson_hash_key();
  add_part(v, value2);
  let value3 = app_shared_screen_stored_get(context);
  let v2 = app_code_screen_hash_key();
  add_part(v2, value3);
  let value4 = storage_session_get_context(context, "quiz_index");
  let v3 = app_code_quiz_hash_key();
  add_part(v3, value4);
  html_hash_set_object(hash);
}
