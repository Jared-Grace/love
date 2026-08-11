import { app_shared_bible_chapter_hash_get } from "./app_shared_bible_chapter_hash_get.mjs";
import { app_shared_bible_screen_content } from "./app_shared_bible_screen_content.mjs";
import { app_shared_bible_picker_card } from "./app_shared_bible_picker_card.mjs";
import { app_shared_bible_hash_v_get } from "./app_shared_bible_hash_v_get.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { property_get } from "./property_get.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
export async function app_shared_bible_chapters_before(context) {
  let opened = await app_shared_bible_screen_content(context);
  let root = property_get(opened, "root");
  let content = property_get(opened, "content");
  let e = ebible_folder_english();
  let hash = html_hash_object_get();
  let chapter_code = app_shared_bible_chapter_hash_get(hash);
  let verse_number = app_shared_bible_hash_v_get(hash);
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let books = await ebible_version_books_browser(e);
  let book_name = ebible_book_code_to_name(books, book_code);
  let card = app_shared_bible_picker_card(content, book_name);
  let r = {
    book_code,
    root,
    card,
    verse_number,
    chapter_code,
  };
  return r;
}
