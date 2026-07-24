import { app_shared_contact_button } from "./app_shared_contact_button.mjs";
import { app_search } from "./app_search.mjs";
import { not_equal_loose } from "./not_equal_loose.mjs";
import { html_on_enter } from "./html_on_enter.mjs";
import { html_br_2 } from "./html_br_2.mjs";
import { html_div } from "./html_div.mjs";
import { property_set } from "./property_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { app_search_results } from "./app_search_results.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { app_shared_button_wide } from "./app_shared_button_wide.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { html_bar_content_padded } from "./html_bar_content_padded.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_next_hash_to_languages_chosen } from "./app_next_hash_to_languages_chosen.mjs";
import { app_shared_bible_languages_gear } from "./app_shared_bible_languages_gear.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { emoji_search } from "./emoji_search.mjs";
import { text_combine } from "./text_combine.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { html_hash_object_property_set } from "./html_hash_object_property_set.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { html_value_set } from "./html_value_set.mjs";
import { app_search_query_hash_key } from "./app_search_query_hash_key.mjs";
import { app_search_query_hash_word_gap } from "./app_search_query_hash_word_gap.mjs";
import { text_replace_space_to } from "./text_replace_space_to.mjs";
import { text_replace_to_space } from "./text_replace_to_space.mjs";
export async function app_search_home(context) {
  let root = property_get(context, "root");
  html_clear(root);
  let bc = html_bar_content_padded(root);
  let bar = property_get(bc, "bar");
  let content = property_get(bc, "content");
  html_centered(bar);
  let hash = html_hash_object_get();
  let language_codes = app_next_hash_to_languages_chosen(hash);
  let languages = ebible_languages();
  function code_to_language(code) {
    let r = list_find_property_or_null(languages, "language_code", code);
    return r;
  }
  let mapped = list_map(language_codes, code_to_language);
  let languages_chosen = list_filter_null_not_is(mapped);
  property_set(context, "languages_chosen", languages_chosen);
  app_shared_bible_languages_gear(bar, content, language_codes);
  let search_instructions =
    "What words would you like to search for? Separate by spaces. A verse will match if any Bible version contains the word. Spelling matters.";
  let p = app_shared_text_body(content, search_instructions);
  let input = html_input_text(content, search_instructions);
  app_shared_input_style(input);
  html_on_enter(input, search);
  let left = emoji_search();
  let text = text_combine(left, " Search");
  app_shared_button_wide(content, text, search);
  html_br_2(content);
  let div_results = html_div(content);
  async function search() {
    let query = html_value_get(input);
    property_set(context, "query", query);
    let key = app_search_query_hash_key();
    let plus = app_search_query_hash_word_gap();
    let query_hash = text_replace_space_to(query, plus);
    html_hash_object_property_set(key, query_hash);
    await app_search_results(context, div_results);
  }
  let property = app_search_query_hash_key();
  let query_hash = property_get_or_null(hash, property);
  if (not_equal_loose(query_hash, null)) {
    let plus = app_search_query_hash_word_gap();
    let query_from_hash = text_replace_to_space(query_hash, plus);
    html_value_set(input, query_from_hash);
    await search();
  }
  ("this screen clears root each time it draws, so re-add the way to reach the developer here; named from the search app so the note reads 'search app: '");
  app_shared_contact_button(content, app_search);
}
