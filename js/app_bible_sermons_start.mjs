import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { app_shared_bible_book_hash_get } from "./app_shared_bible_book_hash_get.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { app_bible_sermons_chapters } from "./app_bible_sermons_chapters.mjs";
import { list_first } from "./list_first.mjs";
import { app_shared_bible_chapter_set } from "./app_shared_bible_chapter_set.mjs";
export async function app_bible_sermons_start() {
  arguments_assert(arguments, 0);
  ("Where this app opens when the link says nothing: the first approved chapter, rather than the beginning of John every other bible opens at, because John has no approved sermon and a reader arriving there would find none.");
  ("A link naming a book or a chapter is left alone, because somebody has already said where they want to be.");
  let hash = html_hash_object_get();
  let chapter_code_asked = app_shared_bible_chapter_hash_get_or_empty(hash);
  let book_code = app_shared_bible_book_hash_get(hash);
  let chapter_none = text_empty_is(chapter_code_asked);
  let book_none = text_empty_is(book_code);
  if (chapter_none && book_none) {
    let chapter_codes = await app_bible_sermons_chapters();
    let chapter_code = list_first(chapter_codes);
    app_shared_bible_chapter_set(chapter_code);
  }
}
