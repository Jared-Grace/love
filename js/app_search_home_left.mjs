import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_bar_content_root_sticky } from "./app_shared_bar_content_root_sticky.mjs";
import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_bible_languages_gear } from "./app_shared_bible_languages_gear.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { html_on_enter } from "./html_on_enter.mjs";
import { emoji_search } from "./emoji_search.mjs";
export function app_search_home_left(context, hash, search) {
  arguments_assert(arguments, 3);
  let root = property_get(context, "root");
  html_clear(root);
  let bc = app_shared_bar_content_root_sticky(root);
  let bar = property_get(bc, "bar");
  let content = property_get(bc, "content");
  app_shared_content_column_pad(content);
  html_centered(bar);
  let language_codes = app_shared_bible_hash_to_languages_chosen(hash);
  let languages_chosen = ebible_languages_from_codes(language_codes);
  property_set(context, "languages_chosen", languages_chosen);
  app_shared_bible_languages_gear(bar, content, language_codes);
  let search_instructions =
    "What words would you like to search for? Separate by spaces. A verse will match if any Bible version contains the word. Spelling matters.";
  app_shared_text_body(content, search_instructions);
  let input = html_input_text(content, search_instructions);
  app_shared_input_style(input);
  html_on_enter(input, search);
  let left = emoji_search();
  let r = {
    content,
    input,
    left,
  };
  return r;
}
