import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { ebible_languages_to_bible_folders } from "./ebible_languages_to_bible_folders.mjs";
import { ebible_index_flat_chosen } from "./ebible_index_flat_chosen.mjs";
import { ebible_index_flat_books_browser } from "./ebible_index_flat_books_browser.mjs";
import { ebible_index_flat_book_chapter_codes } from "./ebible_index_flat_book_chapter_codes.mjs";
import { list_first } from "./list_first.mjs";
import { app_shared_bible_hash_book_code } from "./app_shared_bible_hash_book_code.mjs";
import { app_shared_bible_screen_content } from "./app_shared_bible_screen_content.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_chapter_set } from "./app_shared_bible_chapter_set.mjs";
import { app_shared_bible_chapters } from "./app_shared_bible_chapters.mjs";
import { app_shared_screen_set } from "./app_shared_screen_set.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_books_search_render } from "./app_shared_bible_books_search_render.mjs";
export async function app_shared_bible_books(context) {
  let opened = await app_shared_bible_screen_content(context);
  let content = property_get(opened, "content");
  ("the book being read now, so its button can be marked in the list");
  let hash = html_hash_object_get();
  let current_book_code = app_shared_bible_hash_book_code(hash);
  ("only the books the reader's own bibles have between them. a book none of them holds is left off rather than offered and opened on nothing, and where several are chosen one of them holding it is enough - the page shows what it has and says nothing where it has nothing, which is what it already does verse by verse.");
  ("and only the books this app is willing to offer. an app that has to have been written for you chapter by chapter cuts the list down to what has been written; every other one says nothing on the matter and is handed the whole bible, as it always has been.");
  let languages_chosen = app_shared_bible_hash_to_languages_chosen(hash);
  let bible_folders = ebible_languages_to_bible_folders(languages_chosen);
  let list = await app_shared_bible_index_flat_offered(context, bible_folders);
  let books = await ebible_index_flat_books_browser(list);
  async function on_open(book) {
    "open a chosen book at the first chapter of it the reader's bibles have, then hand off to the chapter picker";
    "chapter one, for a bible that begins the book at chapter one. a bible that holds the second half of a book alone has no chapter one, and opening there would show a reader nothing and read as though the book they chose were empty.";
    "there is always one to open, because a book is only on the list at all when this same index named a chapter of it.";
    let book_code = property_get(book, "book_code");
    let chapter_codes = ebible_index_flat_book_chapter_codes(list, book_code);
    let chapter_code = list_first(chapter_codes);
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
