import { app_shared_bible_mode_hash_key } from "./app_shared_bible_mode_hash_key.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { html_hash_transform_reload } from "./html_hash_transform_reload.mjs";
import { property_set } from "./property_set.mjs";
import { list_join } from "./list_join.mjs";
export function app_shared_bible_code_verses_open(chapter_code, verse_numbers) {
  function transform(hash) {
    property_set(hash, "c", chapter_code);
    let v = list_join(verse_numbers, "-");
    property_set(hash, "v", v);
    property_set(hash, "b", "");
    property_set(hash, "ref", "");
    let property_name = app_shared_bible_mode_hash_key();
    let value = app_shared_bible_mode_chapter();
    property_set(hash, property_name, value);
  }
  html_hash_transform_reload(transform);
}
