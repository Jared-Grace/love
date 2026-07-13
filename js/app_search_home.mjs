import { html_on_enter } from "./html_on_enter.mjs";
import { html_br_2 } from "./html_br_2.mjs";
import { ebible_language_english } from "./ebible_language_english.mjs";
import { html_div } from "./html_div.mjs";
import { property_set } from "./property_set.mjs";
import { html_clear } from "./html_clear.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { app_search_results } from "./app_search_results.mjs";
import { html_value_get } from "./html_value_get.mjs";
import { app_replace_button_wide } from "./app_replace_button_wide.mjs";
import { html_input_text } from "./html_input_text.mjs";
import { app_shared_input_style } from "./app_shared_input_style.mjs";
import { app_shared_text_body } from "./app_shared_text_body.mjs";
import { app_reply_buttons_languages } from "./app_reply_buttons_languages.mjs";
import { app_reply_languages_prompt } from "./app_reply_languages_prompt.mjs";
import { app_reply_languages_chosen_reset } from "./app_reply_languages_chosen_reset.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { text_combine } from "./text_combine.mjs";
export function app_search_home(context) {
  let root = property_get(context, "root");
  html_clear(root);
  let languages_chosen = property_get(context, "languages_chosen");
  let languages = ebible_languages();
  let en_l = ebible_language_english();
  let languages_chosen_default = [en_l];
  list_sort_text_property(languages, "name");
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
  let text = "Search";
  app_replace_button_wide(root, text, search);
  html_br_2(root);
  let div_results = html_div(root);
  async function search() {
    let query = html_value_get(input);
    property_set(context, "query", query);
    await app_search_results(context, div_results);
  }
}
