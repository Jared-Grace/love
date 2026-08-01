import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { app_shared_bible_book_hash_key } from "./app_shared_bible_book_hash_key.mjs";
import { app_shared_bible_reference_hash_key } from "./app_shared_bible_reference_hash_key.mjs";
import { app_shared_bible_mode_hash_key } from "./app_shared_bible_mode_hash_key.mjs";
import { app_shared_bible_mode_chapter } from "./app_shared_bible_mode_chapter.mjs";
import { html_hash_transform_reload } from "./html_hash_transform_reload.mjs";
import { property_set } from "./property_set.mjs";
import { list_join } from "./list_join.mjs";
export function app_shared_bible_code_verses_open(chapter_code, verse_numbers) {
  function transform(hash) {
    let property_name2 = app_shared_bible_chapter_hash_key();
    property_set(hash, property_name2, chapter_code);
    let v = list_join(verse_numbers, "-");
    let property_name3 = app_shared_bible_verse_hash_key();
    property_set(hash, property_name3, v);
    let property_name4 = app_shared_bible_book_hash_key();
    property_set(hash, property_name4, "");
    let property_name5 = app_shared_bible_reference_hash_key();
    property_set(hash, property_name5, "");
    let property_name = app_shared_bible_mode_hash_key();
    let value = app_shared_bible_mode_chapter();
    property_set(hash, property_name, value);
  }
  html_hash_transform_reload(transform);
}
