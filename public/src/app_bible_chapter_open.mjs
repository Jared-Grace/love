import { html_hash_object_property_set } from "../../../love/public/src/html_hash_object_property_set.mjs";
import { app_bible_hash_key_scroll_top } from "../../../love/public/src/app_bible_hash_key_scroll_top.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_screen_set } from "../../../love/public/src/app_shared_screen_set.mjs";
import { app_bible_chapter_set } from "../../../love/public/src/app_bible_chapter_set.mjs";
export function app_bible_chapter_open(context, hash, chapter_code) {
  app_bible_chapter_set(hash, chapter_code);
  const scroll_top_key = app_bible_hash_key_scroll_top();
  html_hash_object_property_set(scroll_top_key, 0);
  let screen_home = property_get(context, "screen_home");
  app_shared_screen_set(context, screen_home);
}
