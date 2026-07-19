import { storage_local_get_context } from "./storage_local_get_context.mjs";
import { html_hash_set } from "./html_hash_set.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join } from "./list_join.mjs";
import { text_combine } from "./text_combine.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_hash_write(context) {
  "reflect the current lesson, screen, and quiz position in the URL hash, so the link is shareable and reopens exactly where you are; runs after every refresh";
  let parts = [];
  function add_part(key, value) {
    "add key=value to the hash only when the value is set, so an unstarted quiz leaves q off rather than writing null";
    let present = null_not_is(value);
    if (present) {
      let pair = text_combine_multiple([key, "=", encodeURIComponent(value)]);
      list_add(parts, pair);
    }
  }
  add_part("lesson", storage_local_get_context(context, "lesson_id"));
  add_part("screen", storage_local_get_context(context, "screen"));
  add_part("q", storage_local_get_context(context, "quiz_index"));
  let query = list_join(parts, "&");
  let hash = text_combine("#", query);
  html_hash_set(hash);
}
