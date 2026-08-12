import { app_shared_bible_chapter_hash_key } from "./app_shared_bible_chapter_hash_key.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_chapter_verse_open } from "./app_shared_bible_chapter_verse_open.mjs";
import { app_shared_bible_book_hash_get } from "./app_shared_bible_book_hash_get.mjs";
import { app_shared_bible_chapters } from "./app_shared_bible_chapters.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
export async function app_shared_bible_chapter_set_default(context) {
  "Somewhere to start reading when the link does not say where, and the answer to whether it had to step in.";
  "Opening the bible on nothing at all would be a blank page, so with nothing to go on it opens where it has always opened, at the beginning of John.";
  "A link naming a book and no chapter is a different thing entirely and used to be treated as the same thing. Somebody had said which book they wanted; the beginning of John was the one answer that ignored what they had already said, and it sent a reader who asked for Genesis to John. What they were half way through is choosing, so this hands them the rest of that choice - the chapters of the book they named.";
  let hash = html_hash_object_get();
  let property_name = app_shared_bible_chapter_hash_key();
  let n = property_exists_not(hash, property_name);
  if (n) {
    let book_code = app_shared_bible_book_hash_get(hash);
    let named = text_empty_not_is(book_code);
    if (named) {
      await app_shared_screen_set(context, app_shared_bible_chapters);
      return n;
    }
    await app_shared_bible_chapter_verse_open(context, "JHN01", "1");
  }
  return n;
}
