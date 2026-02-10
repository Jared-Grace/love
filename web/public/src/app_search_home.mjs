import { ebible_language_en } from "../../../love/public/src/ebible_language_en.mjs";
import { html_div } from "../../../love/public/src/html_div.mjs";
import { object_property_set } from "../../../love/public/src/object_property_set.mjs";
import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { app_search_results } from "../../../love/public/src/app_search_results.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { html_button_width_full } from "../../../love/public/src/html_button_width_full.mjs";
import { html_focus } from "../../../love/public/src/html_focus.mjs";
import { html_width_full } from "../../../love/public/src/html_width_full.mjs";
import { html_input_text } from "../../../karate_code/public/src/html_input_text.mjs";
import { html_p_text } from "../../../love/public/src/html_p_text.mjs";
import { app_reply_buttons_languages } from "../../../love/public/src/app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "../../../love/public/src/app_reply_languages_prompt.mjs";
import { app_reply_languages_chosen_reset } from "../../../love/public/src/app_reply_languages_chosen_reset.mjs";
import { list_sort_text_property } from "../../../love/public/src/list_sort_text_property.mjs";
export function app_search_home(context) {
  let root = property_get(context, "root");
  html_clear(root);
  let languages_chosen = property_get(context, "languages_chosen");
  let languages = ebible_languages();
  let en_l = ebible_language_en();
  let languages_chosen_default = [en_l];
  list_sort_text_property(languages, "name");
  app_reply_languages_chosen_reset(
    languages_chosen,
    languages_chosen_default,
    languages,
  );
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
  let div_results = html_div(root);
  async function search() {
    let query = html_value_get(input);
    object_property_set(context, "query", query);
    await app_search_results(context, div_results);
  }
}
