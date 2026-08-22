import { app_search_results_with_verses_and_books } from "./app_search_results_with_verses_and_books.mjs";
import { app_search_chapter_verses_matching } from "./app_search_chapter_verses_matching.mjs";
import { app_search_results_render } from "./app_search_results_render.mjs";
import { app_shared_collapse_setters_set } from "./app_shared_collapse_setters_set.mjs";
import { list_single_property } from "./list_single_property.mjs";
import { app_search_words_missing_text } from "./app_search_words_missing_text.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_search_none_found_text } from "./app_search_none_found_text.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_page_scrolls } from "./html_page_scrolls.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { list_single } from "./list_single.mjs";
import { list_size_1 } from "./list_size_1.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { html_clear } from "./html_clear.mjs";
import { bible_search_words } from "./bible_search_words.mjs";
export async function app_search_results(context, div_results) {
  let languages_chosen = property_get(context, "languages_chosen");
  let en = ebible_folder_english();
  let books = await ebible_version_books_browser(en);
  let query = property_get(context, "query");
  let words = bible_search_words(query);
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
  let results = app_search_results_with_verses_and_books(dictionary, books);
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
  let book_folds = property_get(r3, "book_folds");
  let button_list = property_get(r3, "button_list");
  let one_book = list_size_1(book_folds.members);
  if (one_book) {
    ("a search landing inside a single book leaves no book to choose between, so it opens rather than waiting for a click that could only go one way, however long the page is. opening it here, with its chapters already in place, is also what lets a lone chapter open along with it");
    app_shared_folds_set(book_folds, false);
    let only_book_expand = list_single(book_chapter_single_expanders);
    await only_book_expand();
  } else {
    let scrolls = html_page_scrolls();
    if (scrolls) {
      app_shared_folds_set(book_folds, true);
    }
  }
  let s = list_size_1(button_list);
  if (s) {
    let only_click = list_single_property(button_list, "click");
    await only_click();
  }
}
