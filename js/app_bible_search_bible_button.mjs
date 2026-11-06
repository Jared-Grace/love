import { arguments_assert } from "./arguments_assert.mjs";
import { app_bible_search_bible_url } from "./app_bible_search_bible_url.mjs";
import { window_open } from "./window_open.mjs";
import { emoji_book_open } from "./emoji_book_open.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_bible_search_bible_button(bar, languages_chosen) {
  "the open book on the search bar, just after the download gear, that opens the bible reader in a new tab in the languages this search is being read in.";
  "A NEW TAB, NOT THIS ONE. A reader going to read has not finished with what they searched for, and opening the reader over it would cost them their results.";
  arguments_assert(arguments, 2);
  function open_bible() {
    let url = app_bible_search_bible_url(languages_chosen);
    window_open(url);
  }
  let text = emoji_book_open();
  app_shared_button(bar, text, open_bible);
}
