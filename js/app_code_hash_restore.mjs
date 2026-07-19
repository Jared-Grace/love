import { html_hash_get } from "./html_hash_get.mjs";
import { storage_local_set_context } from "./storage_local_set_context.mjs";
import { text_split } from "./text_split.mjs";
import { list_get } from "./list_get.mjs";
import { each } from "./each.mjs";
import { equal } from "./equal.mjs";
export function app_code_hash_restore(context) {
  "if the URL carries a shared hash, seed the lesson, screen, and quiz position into storage BEFORE the first render, so the link opens right where it was shared from";
  let hash = html_hash_get();
  let empty = equal(hash, "");
  if (empty) {
    return;
  }
  let after_hash = text_split(hash, "#");
  let body = list_get(after_hash, 1);
  let pairs = text_split(body, "&");
  function apply_pair(pair) {
    let kv = text_split(pair, "=");
    let key = list_get(kv, 0);
    let value = decodeURIComponent(list_get(kv, 1));
    let is_lesson = equal(key, "lesson");
    if (is_lesson) {
      storage_local_set_context(context, "lesson_id", value);
    }
    let is_screen = equal(key, "screen");
    if (is_screen) {
      storage_local_set_context(context, "screen", value);
    }
    let is_quiz = equal(key, "q");
    if (is_quiz) {
      storage_local_set_context(context, "quiz_index", Number(value));
    }
  }
  each(pairs, apply_pair);
}
