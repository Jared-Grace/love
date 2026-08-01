import { app_shared_bible_book_hash_key } from "./app_shared_bible_book_hash_key.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { html_hash_transform_reload } from "./html_hash_transform_reload.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_bible_book_open(book_code) {
  function transform(hash) {
    let property_name = app_shared_bible_book_hash_key();
    property_set(hash, property_name, book_code);
    let property_name2 = app_shared_bible_chapter_hash_key();
    property_set(hash, property_name2, "");
    let property_name3 = app_shared_bible_verse_hash_key();
    property_set(hash, property_name3, "");
  }
  html_hash_transform_reload(transform);
}
