import { arguments_assert } from "./arguments_assert.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { app_shared_bible_hash_book_code } from "./app_shared_bible_hash_book_code.mjs";
import { ebible_books_engbsb } from "./ebible_books_engbsb.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_filter_starts_with } from "./list_filter_starts_with.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_book_open } from "./app_shared_bible_book_open.mjs";
import { app_shared_bible_books_search_render } from "./app_shared_bible_books_search_render.mjs";
import { app_shared_bible_pictures_chapter_hash } from "./app_shared_bible_pictures_chapter_hash.mjs";
import { html_hash_name_reload } from "./html_hash_name_reload.mjs";
import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { ebible_book_code_to_name } from "./ebible_book_code_to_name.mjs";
import { app_shared_bible_chapters_card } from "./app_shared_bible_chapters_card.mjs";
export function app_emoji_bible_chapter_index(content, chapters) {
  arguments_assert(arguments, 2);
  ("The way into the picture Bible: the books, and once a book is chosen, its chapters, each opening that chapter.");
  ("IT IS THE BIBLE READER'S OWN PICKER, as this list always said it would become. It listed only what had been written while the picture Bible was a few hundred hand-written chapters, because a canon picker would have offered chapters that opened on nothing. The chapters are now built from the interlinear, so every one of them exists and the departure has ended by itself.");
  ("A reader who has used the other app has already learned this one: the same search box over the same books grouped by section, and the same grid of chapter numbers.");
  ("THE CHOSEN BOOK IS WRITTEN INTO THE LINK, the way the reader writes it, rather than held on the page. So the browser's back goes from a book's chapters back to the books, and a link to a book can be sent.");
  ("A book the link names that has no chapters - a misspelling, most often - lands on the books rather than on an empty grid.");
  let hash = html_hash_object_get();
  let book_code = app_shared_bible_hash_book_code(hash);
  let books = ebible_books_engbsb();
  let chapter_codes_all = list_map_property(chapters, "chapter_code");
  let chapter_codes = list_filter_starts_with(chapter_codes_all, book_code);
  let unnamed = text_empty_is(book_code);
  if (unnamed) {
    chapter_codes = [];
  }
  let none = list_empty_is(chapter_codes);
  if (none) {
    function on_book(book) {
      let chosen = property_get(book, "book_code");
      app_shared_bible_book_open(chosen);
    }
    app_shared_bible_books_search_render(content, books, on_book, "");
    return;
  }
  function on_back() {
    let index = app_shared_bible_pictures_chapter_hash("");
    html_hash_name_reload(index);
  }
  app_shared_bible_panel_open(content, "", on_back);
  let book_name = ebible_book_code_to_name(books, book_code);
  function on_chapter(chapter_code) {
    let link = app_shared_bible_pictures_chapter_hash(chapter_code);
    html_hash_name_reload(link);
  }
  app_shared_bible_chapters_card(
    content,
    book_name,
    chapter_codes,
    on_chapter,
    "",
  );
}
