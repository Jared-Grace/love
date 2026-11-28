import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_loading_wait_texts } from "./app_shared_loading_wait_texts.mjs";
import { app_shared_text_in_language_code } from "./app_shared_text_in_language_code.mjs";
import { emoji_pray } from "./emoji_pray.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_loading_message_text_language_code(language_code) {
  "$plain language_code";
  arguments_assert(arguments, 1);
  ("The line under the loading spinner in a language named by whoever is building the page, for the splash baked in before any of the app has run and so before there is a reader to ask.");
  ("A page per language knows its reader's language while it is being built, so its splash speaks it from the first moment rather than English until the app catches up.");
  let texts = app_shared_loading_wait_texts();
  let words = app_shared_text_in_language_code(texts, language_code);
  let hands = emoji_pray();
  let r = text_combine_multiple([words, " ", hands]);
  return r;
}
