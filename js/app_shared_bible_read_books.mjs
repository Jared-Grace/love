import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { app_shared_bible_book_hash_get } from "./app_shared_bible_book_hash_get.mjs";
import { app_shared_bible_reference_hash_key } from "./app_shared_bible_reference_hash_key.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { app_shared_bible_reference_hash_english } from "./app_shared_bible_reference_hash_english.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { list_last } from "./list_last.mjs";
import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
export async function app_shared_bible_read_books(hash) {
  arguments_assert(arguments, 1);
  let c = app_shared_bible_chapter_hash_get_or_empty(hash);
  let b = app_shared_bible_book_hash_get(hash);
  let key = app_shared_bible_reference_hash_key();
  let ref = property_get_or(hash, key, "");
  ("A reference is understood in whatever language its book was written in, and is English from here on down - the checking of it, the reading of it, the link the reader copies. One place knows the reader's spelling; nothing after this has to.");
  let ref_line = await app_shared_bible_reference_hash_english(hash, ref);
  let ref_mode = text_empty_is(c) && text_empty_not_is(ref);
  let languages_chosen = app_shared_bible_hash_to_languages_chosen(hash);
  let language = list_last(languages_chosen);
  let primary_folder = ebible_language_to_bible_folder(language);
  let books = await ebible_version_books_browser(primary_folder);
  let r = {
    c,
    b,
    ref,
    ref_line,
    ref_mode,
    languages_chosen,
    primary_folder,
    books,
  };
  return r;
}
