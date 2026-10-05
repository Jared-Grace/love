import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_bar_content_root_sticky } from "./app_shared_bar_content_root_sticky.mjs";
import { app_shared_bar_center_content_pad } from "./app_shared_bar_center_content_pad.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { ebible_languages_from_codes } from "./ebible_languages_from_codes.mjs";
import { property_set } from "./property_set.mjs";
import { app_shared_bible_languages_gear } from "./app_shared_bible_languages_gear.mjs";
import { app_shared_bible_offline_gear } from "./app_shared_bible_offline_gear.mjs";
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
  app_shared_bar_center_content_pad(bc);
  let bar = property_get(bc, "bar");
  let content = property_get(bc, "content");
  let language_codes = app_shared_bible_hash_to_languages_chosen(hash);
  let languages_chosen = ebible_languages_from_codes(language_codes);
  property_set(context, "languages_chosen", languages_chosen);
  app_shared_bible_languages_gear(bar, content, language_codes);
  app_shared_bible_offline_gear(bar, content, languages_chosen);
  ("The search looks in each chosen language that has an index, every word inside one language, and joins what the languages found. It once looked in English alone while saying any version would do; a language with no index yet still finds nothing, and says which words it could not find.");
  ("English once had its own exception here, 'except in English'. That was not true, save for œ, which that table lacks: the English index files a word written with an accent under its plain spelling as well, by ",
    fn_name("bible_search_symbols_plain"),
    ", so a reader typing maizoob finds Maizoöb. Asked by the human 2026-10-05, with 'don't matter' replaced by 'don't change the results'.");
  let search_instructions =
    "What words would you like to search for? Separate by spaces. The search looks in the Bibles of the languages you chose. A verse matches if one Bible in a language holds every word. Accents don't change the results. Spelling does.";
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
