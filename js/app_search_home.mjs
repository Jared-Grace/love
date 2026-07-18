import { html_on_enter } from "../../love/js/html_on_enter.mjs";
import { html_br_2 } from "../../love/js/html_br_2.mjs";
import { html_div } from "../../love/js/html_div.mjs";
import { property_set } from "../../love/js/property_set.mjs";
import { html_clear } from "../../love/js/html_clear.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { ebible_languages } from "../../love/js/ebible_languages.mjs";
import { app_search_results } from "../../love/js/app_search_results.mjs";
import { html_value_get } from "../../love/js/html_value_get.mjs";
import { app_shared_button_wide } from "../../love/js/app_shared_button_wide.mjs";
import { html_input_text } from "../../love/js/html_input_text.mjs";
import { app_shared_input_style } from "../../love/js/app_shared_input_style.mjs";
import { app_shared_text_body } from "../../love/js/app_shared_text_body.mjs";
import { html_bar_content_padded } from "../../love/js/html_bar_content_padded.mjs";
import { html_centered } from "../../love/js/html_centered.mjs";
import { app_next_hash_to_languages_chosen } from "../../love/js/app_next_hash_to_languages_chosen.mjs";
import { app_shared_bible_languages_gear } from "../../love/js/app_shared_bible_languages_gear.mjs";
import { list_find_property_or_null } from "../../love/js/list_find_property_or_null.mjs";
import { list_map } from "../../love/js/list_map.mjs";
import { list_filter_null_not_is } from "../../love/js/list_filter_null_not_is.mjs";
import { emoji_search } from "../../love/js/emoji_search.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
import { html_hash_object_get } from "../../love/js/html_hash_object_get.mjs";
import { html_hash_object_property_set } from "../../love/js/html_hash_object_property_set.mjs";
import { property_get_or_null } from "../../love/js/property_get_or_null.mjs";
import { html_value_set } from "../../love/js/html_value_set.mjs";
import { app_search_query_hash_key } from "../../love/js/app_search_query_hash_key.mjs";
import { app_search_query_hash_word_gap } from "../../love/js/app_search_query_hash_word_gap.mjs";
import { text_replace_space_to } from "../../love/js/text_replace_space_to.mjs";
import { text_replace_to_space } from "../../love/js/text_replace_to_space.mjs";
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
    return list_find_property_or_null(languages, "language_code", code);
  }
  let mapped = list_map(language_codes, code_to_language);
  let languages_chosen = list_filter_null_not_is(mapped);
  property_set(context, "languages_chosen", languages_chosen);
  app_shared_bible_languages_gear(bar, content, language_codes);
  let search_instructions =
    "What words would you like to search for? Separate by spaces. A verse will match if any Bible version contains the word. Spelling matters.";
  let p2 = app_shared_text_body(content, search_instructions);
  let input = html_input_text(content, search_instructions);
  app_shared_input_style(input);
  html_on_enter(input, search);
  let text = text_combine(emoji_search(), " Search");
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
  let query_hash = property_get_or_null(hash, app_search_query_hash_key());
  if (query_hash != null) {
    let plus = app_search_query_hash_word_gap();
    let query_from_hash = text_replace_to_space(query_hash, plus);
    html_value_set(input, query_from_hash);
    await search();
  }
}
