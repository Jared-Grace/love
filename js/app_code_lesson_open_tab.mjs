import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_hash_key } from "./app_code_lesson_hash_key.mjs";
import { property_set } from "./property_set.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { app_shared_screen_name_short } from "./app_shared_screen_name_short.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_screen_hash_key } from "./app_shared_screen_hash_key.mjs";
import { html_url_without_hash } from "./html_url_without_hash.mjs";
import { hash_to_url } from "./hash_to_url.mjs";
import { text_combine } from "./text_combine.mjs";
import { window_open } from "./window_open.mjs";
export function app_code_lesson_open_tab(context, lesson_id) {
  arguments_assert(arguments, 2);
  ("opens a lesson's examples in a new tab, by the same link the app writes into the address when that lesson is open, so the new tab reads it back the way a shared link is read; this tab stays where it is");
  let hash = {};
  let lesson_key = app_code_lesson_hash_key();
  property_set(hash, lesson_key, lesson_id);
  let app_name = property_path_get_2(context, "app_fn", "name");
  let screen_short = app_shared_screen_name_short(
    app_name,
    fn_name("app_code_examples"),
  );
  let screen_key = app_shared_screen_hash_key();
  property_set(hash, screen_key, screen_short);
  let page = html_url_without_hash();
  let hash_text = hash_to_url(hash);
  let url = text_combine(page, hash_text);
  window_open(url);
}
