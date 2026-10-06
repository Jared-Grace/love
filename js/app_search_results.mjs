import { property_get } from "./property_get.mjs";
import { app_shared_bible_read_books_en } from "./app_shared_bible_read_books_en.mjs";
import { app_search_languages_matching } from "./app_search_languages_matching.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_search_languages_unsearchable_show } from "./app_search_languages_unsearchable_show.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { app_search_no_words_show } from "./app_search_no_words_show.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { app_search_words_missing_text } from "./app_search_words_missing_text.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_search_results_with_verses_and_books } from "./app_search_results_with_verses_and_books.mjs";
import { app_search_none_found_text } from "./app_search_none_found_text.mjs";
import { app_search_results_render_and_open } from "./app_search_results_render_and_open.mjs";
export async function app_search_results(context, div_results) {
  let languages_chosen = property_get(context, "languages_chosen");
  let books = await app_shared_bible_read_books_en();
  let query = property_get(context, "query");
  let matching = await app_search_languages_matching(languages_chosen, query);
  ("every word is fetched by now, so the page is cleared once here and everything below only adds to it - a second clear further down would wipe the note naming the languages that were not searched");
  html_clear(div_results);
  let unsearchable = app_search_languages_unsearchable_show(
    div_results,
    matching,
  );
  let words = property_get(matching, "words");
  let no_words = list_empty_is(words);
  if (no_words) {
    ("the words are what the index is asked for, so with none of them there is nothing to ask - and the intersection of no answers is undefined, so asking anyway threw. it threw here, above the clear, which is why a reader typing a script this search cannot cut saw the page not change at all rather than being told anything");
    if (unsearchable) {
      ("the note above already says why nothing was looked for; telling the reader no words were found as well would point them at their typing instead");
      return;
    }
    app_search_no_words_show(div_results, query, languages_chosen);
    return;
  }
  let dictionary = property_get(matching, "dictionary");
  let words_missing = property_get(matching, "words_missing");
  let words_unreachable = property_get(matching, "words_unreachable");
  let missing = list_empty_not_is(words_missing);
  if (missing) {
    let missing_text = app_search_words_missing_text(
      words_missing,
      words_unreachable,
    );
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
  await app_search_results_render_and_open(
    div_results,
    books,
    results,
    languages_chosen,
  );
}
