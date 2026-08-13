import { app_shared_bible_hash_field_verses_count } from "./app_shared_bible_hash_field_verses_count.mjs";
import { app_shared_bible_hash_field_book } from "./app_shared_bible_hash_field_book.mjs";
import { app_shared_bible_hash_field_chapter } from "./app_shared_bible_hash_field_chapter.mjs";
import { app_shared_bible_hash_field_language } from "./app_shared_bible_hash_field_language.mjs";
import { app_shared_bible_hash_field_mode } from "./app_shared_bible_hash_field_mode.mjs";
export function app_shared_bible_hash_fields() {
  "Every part of a bible link that can be checked before anything is fetched, and so every part a wrong link can be caught by.";
  "The list is here rather than at each page, so the four bible surfaces cannot end up disagreeing about what makes a link wrong. A field added here is checked by all of them at once.";
  let language = app_shared_bible_hash_field_language();
  let chapter = app_shared_bible_hash_field_chapter();
  let book = app_shared_bible_hash_field_book();
  let mode = app_shared_bible_hash_field_mode();
  let verses_count = app_shared_bible_hash_field_verses_count();
  let fields = [language, chapter, book, mode, verses_count];
  return fields;
}
