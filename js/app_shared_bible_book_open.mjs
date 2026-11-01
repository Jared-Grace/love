import { app_shared_bible_reference_hash_key } from "./app_shared_bible_reference_hash_key.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_bible_book_hash_key } from "./app_shared_bible_book_hash_key.mjs";
import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { html_hash_transform_reload } from "./html_hash_transform_reload.mjs";
export function app_shared_bible_book_open(book_code) {
  "Opens a book at its chapter picker, by naming the book in the link and rubbing out everything that would say where inside a book to read.";
  "THE WRITTEN REFERENCE IS RUBBED OUT TOO, because the reader goes to a reference before it looks at the book - so a link still saying Matthew 10:8 kept opening Matthew whatever book was picked, and Hebrews could never be reached.";
  function transform(hash) {
    let property_name4 = app_shared_bible_reference_hash_key();
    property_set(hash, property_name4, "");
    let property_name = app_shared_bible_book_hash_key();
    property_set(hash, property_name, book_code);
    let property_name2 = app_shared_bible_chapter_hash_key();
    property_set(hash, property_name2, "");
    let property_name3 = app_shared_bible_verse_hash_key();
    property_set(hash, property_name3, "");
  }
  html_hash_transform_reload(transform);
}
