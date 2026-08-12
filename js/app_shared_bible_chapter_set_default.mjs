import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_shared_bible_chapter_code_default } from "./app_shared_bible_chapter_code_default.mjs";
import { app_shared_bible_verse_number_default } from "./app_shared_bible_verse_number_default.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_chapter_verse_open } from "./app_shared_bible_chapter_verse_open.mjs";
import { app_shared_bible_book_hash_get } from "./app_shared_bible_book_hash_get.mjs";
import { app_shared_bible_chapters } from "./app_shared_bible_chapters.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
export async function app_shared_bible_chapter_set_default(context) {
  "Somewhere to start reading when the link does not say where, and the answer to whether it had to step in.";
  "Opening the bible on nothing at all would be a blank page, so with nothing to go on it opens where it has always opened, at the beginning of John.";
  "A link naming a book and no chapter is a different thing entirely and used to be treated as the same thing. Somebody had said which book they wanted; the beginning of John was the one answer that ignored what they had already said, and it sent a reader who asked for Genesis to John. What they were half way through is choosing, so this hands them the rest of that choice - the chapters of the book they named.";
  "A link that spells the chapter as nothing at all is the same half-made choice as one that leaves the word out, and asking only whether the word is THERE reads the empty one as an answer. That is not a made-up case: picking a book writes exactly that, on purpose, to say a book is chosen and a chapter is not. So the reader took the empty word for a chapter and tried to open it, and every one of those links was a blank page with nothing on it to go back from.";
  let hash = html_hash_object_get();
  let chapter_code_asked = app_shared_bible_chapter_hash_get_or_empty(hash);
  let n = text_empty_is(chapter_code_asked);
  if (n) {
    let book_code = app_shared_bible_book_hash_get(hash);
    let named = text_empty_not_is(book_code);
    if (named) {
      await app_shared_screen_set(context, app_shared_bible_chapters);
      return n;
    }
    let chapter_code = app_shared_bible_chapter_code_default();
    let verse_number = app_shared_bible_verse_number_default();
    await app_shared_bible_chapter_verse_open(
      context,
      chapter_code,
      verse_number,
    );
  }
  return n;
}
