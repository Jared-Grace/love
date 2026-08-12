import { app_shared_bible_hash_book_code } from "./app_shared_bible_hash_book_code.mjs";
import { app_shared_bible_screen_content } from "./app_shared_bible_screen_content.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { app_shared_bible_chapter_set } from "./app_shared_bible_chapter_set.mjs";
import { app_shared_bible_chapters } from "./app_shared_bible_chapters.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_books_search_render } from "./app_shared_bible_books_search_render.mjs";
export async function app_shared_bible_books(context) {
  let opened = await app_shared_bible_screen_content(context);
  let content = property_get(opened, "content");
  let e = ebible_folder_english();
  let books = await ebible_version_books_browser(e);
  ("the book being read now, so its button can be marked in the list");
  let hash = html_hash_object_get();
  let current_book_code = app_shared_bible_hash_book_code(hash);
  async function on_open(book) {
    "open a chosen book at its first chapter, then hand off to the chapter picker";
    let book_code = property_get(book, "book_code");
    let chapter_code = ebible_chapter_code_pad(book_code, "1");
    app_shared_bible_chapter_set(chapter_code);
    await app_shared_screen_set(context, app_shared_bible_chapters);
  }
  app_shared_bible_books_search_render(
    content,
    books,
    on_open,
    current_book_code,
  );
}
