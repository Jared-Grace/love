import { app_shared_bible_chapter_hash_get_or_empty } from "./app_shared_bible_chapter_hash_get_or_empty.mjs";
import { app_shared_bible_hash_book_code } from "./app_shared_bible_hash_book_code.mjs";
import { app_shared_bible_screen_content } from "./app_shared_bible_screen_content.mjs";
import { app_shared_bible_hash_v_get } from "./app_shared_bible_hash_v_get.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { property_get } from "./property_get.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function app_shared_bible_chapters_before(context) {
  let opened = await app_shared_bible_screen_content(context);
  let root = property_get(opened, "root");
  let content = property_get(opened, "content");
  let e = ebible_folder_english();
  let hash = html_hash_object_get();
  ("this screen is the one place a chapter is allowed to be unchosen, because choosing one is the whole reason it is on the screen. so it reads the book the way that works either way - out of the chapter's name when there is a chapter, and off the link's own word for the book when there is not");
  let chapter_code = app_shared_bible_chapter_hash_get_or_empty(hash);
  let verse_number = app_shared_bible_hash_v_get(hash);
  let book_code = app_shared_bible_hash_book_code(hash);
  let books = await ebible_version_books_browser(e);
  let book_name = ebible_book_code_to_name(books, book_code);
  ("the card is the caller's to build rather than handed back ready-made. The chapter picker gets its card and its buttons together from one place, so that the whole-chapter reader can show the identical picker without building it again; the verse picker heads the same card a second time with the chapter and so must hold it itself.");
  let r = {
    book_code,
    book_name,
    root,
    content,
    verse_number,
    chapter_code,
  };
  return r;
}
