import { each_unordered_async } from "../../../love/public/src/each_unordered_async.mjs";
import { string_to_words } from "../../../love/public/src/string_to_words.mjs";
import { html_value_get } from "../../../love/public/src/html_value_get.mjs";
import { app_bible_search_word_path } from "../../../love/public/src/app_bible_search_word_path.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { html_button } from "../../../love/public/src/html_button.mjs";
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
export function app_search_main(context) {
  let root = html_mobile_default(context);
  firebase_name_jg();
  let languages = ebible_languages();
  let languages_chosen = [];
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
  async function lambda2() {
    let value = html_value_get(input);
    let words = string_to_words(value);
    async function lambda(word) {
      let destination = app_bible_search_word_path(word);
    }
    await each_unordered_async(words, lambda);
    let o = await firebase_storage_download_json(destination);
  }
  let component = html_button(parent, "Search", lambda2);
}
