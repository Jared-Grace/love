import { app_shared_button_spaced } from "./app_shared_button_spaced.mjs";
import { app_shared_bible_language_swap_reload } from "./app_shared_bible_language_swap_reload.mjs";
import { ebible_language_to_name } from "./ebible_language_to_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_shared_bible_language_suggestion_button(
  parent,
  code,
  suggestion,
) {
  "One correction offered to a reader whose link names a language this repo does not have. Pressing it is the reader saying yes, that is what I meant.";
  "It says the language's name and its code together. The code alone is what the link says and means nothing to most people; the name alone leaves them unable to tell two near-identical guesses apart.";
  let name = ebible_language_to_name(suggestion);
  let text = text_combine_multiple([name, " (", suggestion, ")"]);
  function lambda() {
    app_shared_bible_language_swap_reload(code, suggestion);
  }
  let component = app_shared_button_spaced(parent, text, lambda);
  return component;
}
