import { app_search_chapter_verses_matching } from "./app_search_chapter_verses_matching.mjs";
import { app_search_results_render } from "./app_search_results_render.mjs";
import { app_search_results_collapse_setters_set } from "./app_search_results_collapse_setters_set.mjs";
import { property_list_empty_not_is } from "./property_list_empty_not_is.mjs";
import { list_single_property } from "./list_single_property.mjs";
import { app_search_words_missing_text } from "./app_search_words_missing_text.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_search_none_found_text } from "./app_search_none_found_text.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_page_scrolls } from "./html_page_scrolls.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { object_to_list } from "./object_to_list.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_book_exists } from "./ebible_book_exists.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { html_clear } from "./html_clear.mjs";
import { text_to_words } from "./text_to_words.mjs";
export async function app_search_results(context, div_results) {
  let languages_chosen = property_get(context, "languages_chosen");
  let en = ebible_folder_english();
  let books = await ebible_version_books_browser(en);
  let query = property_get(context, "query");
  let words = text_to_words(query);
  let r = await app_search_chapter_verses_matching(words);
  let dictionary = property_get(r, "dictionary");
  let words_missing = property_get(r, "words_missing");
  html_clear(div_results);
  let missing = list_empty_not_is(words_missing);
  if (missing) {
    let missing_text = app_search_words_missing_text(words_missing);
    app_shared_text_body(div_results, missing_text);
    return;
  }
  let results_all = object_to_list(dictionary);
  function result_verses_exist(vk) {
    "a chapter can hold every query word and still have no single verse holding them all, so the verse intersection comes back empty";
    let e = property_list_empty_not_is(vk, "value");
    return e;
  }
  let results_verses = list_filter(results_all, result_verses_exist);
  function result_book_exists(vk) {
    let chapter_code = property_get(vk, "key");
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let e = ebible_book_exists(books, book_code);
    return e;
  }
  let results = list_filter(results_verses, result_book_exists);
  let none = list_empty_is(results);
  if (none) {
    ("nothing to expand and nothing to copy, so say so instead of leaving a bare Expand all button over an empty page");
    let none_text = app_search_none_found_text(words);
    app_shared_text_body(div_results, none_text);
    return;
  }
  let r3 = app_search_results_render(
    div_results,
    books,
    results,
    languages_chosen,
  );
  let book_chapter_single_expanders = property_get(
    r3,
    "book_chapter_single_expanders",
  );
  let book_collapse_setters = property_get(r3, "book_collapse_setters");
  let button_list = property_get(r3, "button_list");
  let one_book = list_size_1(book_collapse_setters);
  if (one_book) {
    ("a search landing inside a single book leaves no book to choose between, so it opens rather than waiting for a click that could only go one way, however long the page is. opening it here, with its chapters already in place, is also what lets a lone chapter open along with it");
    app_search_results_collapse_setters_set(book_collapse_setters, false);
    let only_book_expand = list_single(book_chapter_single_expanders);
    await only_book_expand();
  } else {
    let scrolls = html_page_scrolls();
    if (scrolls) {
      app_search_results_collapse_setters_set(book_collapse_setters, true);
    }
  }
  let s = list_size_1(button_list);
  if (s) {
    let only_click = list_single_property(button_list, "click");
    await only_click();
  }
}
