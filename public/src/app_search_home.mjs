import { marker } from "../../../love/public/src/marker.mjs";
import { app_search_results } from "../../../love/public/src/app_search_results.mjs";
import { object_property_set_exists_not } from "../../../love/public/src/object_property_set_exists_not.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_button_width_full } from "../../../love/public/src/html_button_width_full.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_input_text } from "../../../karate_code/public/src/html_input_text.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { app_reply_buttons_languages } from "../../../love/public/src/app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "../../../love/public/src/app_reply_languages_prompt.mjs";
import { app_reply_languages_chosen_reset } from "../../../love/public/src/app_reply_languages_chosen_reset.mjs";
import { list_sort_string_property } from "../../../love/public/src/list_sort_string_property.mjs";
import { list_slice_count } from "../../../love/public/src/list_slice_count.mjs";
export function app_search_home(languages, languages_chosen, root, context) {
  marker("1");
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
