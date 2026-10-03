import { app_search_no_words_text } from "./app_search_no_words_text.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_search_nothing_typed_is } from "./app_search_nothing_typed_is.mjs";
import { app_search_bible_url } from "./app_search_bible_url.mjs";
import { app_search_bible_link_text } from "./app_search_bible_link_text.mjs";
import { app_shared_button_wide_link } from "./app_shared_button_wide_link.mjs";
export function app_search_no_words_show(div_results, query, languages_chosen) {
  "what the page shows when there was nothing to search for: why, and where to go instead.";
  "The way out is only offered to a reader who typed something, because the two ways to reach here want opposite things. An empty box wants the box, and it is already there above this message; a sentence in a script this search cannot cut wants somewhere that reads it, and that is the bible reader.";
  let no_words_text = app_search_no_words_text(query);
  app_shared_text_body(div_results, no_words_text);
  let nothing_typed = app_search_nothing_typed_is(query);
  if (nothing_typed) {
    return;
  }
  let url = app_search_bible_url(languages_chosen);
  let text = app_search_bible_link_text();
  app_shared_button_wide_link(div_results, text, url);
}
