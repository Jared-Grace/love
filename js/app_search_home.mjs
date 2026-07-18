import { html_on_enter } from "../../love/js/html_on_enter.mjs";
import { html_br_2 } from "../../love/js/html_br_2.mjs";
import { ebible_language_english } from "../../love/js/ebible_language_english.mjs";
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
import { app_reply_buttons_languages } from "../../love/js/app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "../../love/js/app_reply_languages_prompt.mjs";
import { app_reply_languages_chosen_reset } from "../../love/js/app_reply_languages_chosen_reset.mjs";
import { emoji_search } from "../../love/js/emoji_search.mjs";
import { text_combine } from "../../love/js/text_combine.mjs";
import { html_hash_object_get } from "../../love/js/html_hash_object_get.mjs";
import { html_hash_object_property_set } from "../../love/js/html_hash_object_property_set.mjs";
import { property_get_or_null } from "../../love/js/property_get_or_null.mjs";
import { html_value_set } from "../../love/js/html_value_set.mjs";
import { app_search_query_hash_key } from "../../love/js/app_search_query_hash_key.mjs";
export async function app_search_home(context) {
  let root = property_get(context, "root");
  html_clear(root);
  let languages_chosen = property_get(context, "languages_chosen");
  let languages = ebible_languages();
  let en_l = ebible_language_english();
  let languages_chosen_default = [en_l];
  app_reply_languages_chosen_reset(
    languages_chosen,
    languages_chosen_default,
    languages,
  );
  let p = app_reply_languages_prompt(root);
  app_reply_buttons_languages(languages_chosen, root, languages);
  let search_instructions =
    "What words would you like to search for? Separate by spaces. A verse will match if any Bible version contains the word. Spelling matters.";
  let p2 = app_shared_text_body(root, text_combine("2. ", search_instructions));
  let input = html_input_text(root, search_instructions);
  app_shared_input_style(input);
  html_on_enter(input, search);
  let text = text_combine(emoji_search(), " Search");
  app_shared_button_wide(root, text, search);
  html_br_2(root);
  let div_results = html_div(root);
  async function search() {
    let query = html_value_get(input);
    property_set(context, "query", query);
    let key = app_search_query_hash_key();
    let plus = app_search_query_hash_word_gap();
    let query_hash = text_replace_space_to(query, plus);
    html_hash_object_property_set(key, query_hash);
    await app_search_results(context, div_results);
  }
  let hash = html_hash_object_get();
  let query_hash = property_get_or_null(hash, app_search_query_hash_key());
  if (query_hash != null) {
    let plus = app_search_query_hash_word_gap();
    let query_from_hash = text_replace_to_space(query_hash, plus);
    html_value_set(input, query_from_hash);
    await search();
  }
}
