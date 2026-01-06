import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { app_search_results } from "../../../love/public/src/app_search_results.mjs";
import { html_button_width_full } from "../../../love/public/src/html_button_width_full.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_input_text } from "../../../karate_code/public/src/html_input_text.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { list_sort_string_property } from "../../../love/public/src/list_sort_string_property.mjs";
import { list_slice_count } from "../../../love/public/src/list_slice_count.mjs";
import { html_mobile_default } from "../../../love/public/src/html_mobile_default.mjs";
import { app_reply_languages_chosen_reset } from "../../../love/public/src/app_reply_languages_chosen_reset.mjs";
import { app_reply_buttons_languages } from "../../../love/public/src/app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "../../../love/public/src/app_reply_languages_prompt.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
export async function app_search_main(context) {
  let root = html_mobile_default(context);
  firebase_name_jg();
  html_clear(root);
  let languages = ebible_languages();
  let languages_chosen = [];
  object_property_set_exists_not(context, "languages_chosen", languages_chosen);
  let languages_chosen_default = list_slice_count(languages, 1, 1);
  list_sort_string_property(languages, "name");
  app_reply_languages_chosen_reset(languages_chosen, languages_chosen_default);
  let p = app_reply_languages_prompt(root);
  app_reply_buttons_languages(languages_chosen, root, languages);
  const search_instructions =
    "What words would you like to search for? Separate by spaces. A verse will match if any Bible version contains the word. Spelling matters.";
  let p2 = html_p_text(root, "2. " + search_instructions);
  let input = html_input_text(root, search_instructions);
  html_width_full(input);
  html_focus(input);
  const text = "Search";
  html_button_width_full(root, text, search);
  async function search() {
    let query = html_value_get(input);
    object_property_set_exists_not(context, "query", query);
    await app_search_results(context);
  }
}
