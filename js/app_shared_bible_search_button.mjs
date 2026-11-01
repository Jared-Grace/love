import { arguments_assert } from "./arguments_assert.mjs";
import { window_open_app } from "./window_open_app.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
export function app_shared_bible_search_button(bar) {
  "the magnifying glass on the bible reader's bar, standing just after the settings gear, that opens the search app in a new tab.";
  "A NEW TAB, NOT THIS ONE. A reader who goes looking for a word has not finished with the chapter in front of them, and opening the search over it would cost them their place.";
  "The search app is opened with no hash, so it starts empty and in its own default language rather than guessing which of the reader's languages its index can serve.";
  arguments_assert(arguments, 1);
  function open_search() {
    window_open_app(fn_name("app_search"), {});
  }
  app_shared_button(bar, "🔍", open_search);
}
