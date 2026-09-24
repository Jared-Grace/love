import { app_shared_container_blue_medium } from "./app_shared_container_blue_medium.mjs";
import { html_div } from "./html_div.mjs";
import { language_code_key } from "./language_code_key.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { list_add } from "./list_add.mjs";
import { html_clear } from "./html_clear.mjs";
import { app_shared_languages_prompt_text } from "./app_shared_languages_prompt_text.mjs";
import { text_combine } from "./text_combine.mjs";
import { app_shared_bible_subset_sorted_choose } from "./app_shared_bible_subset_sorted_choose.mjs";
export function app_reply_buttons_languages(languages_chosen, root, languages) {
  "the same scrolled, searchable list the bible reader and the search app choose languages from, rather than a button for every one of the hundreds of languages laid out on the page";
  let holder = html_div(root);
  let key_property = language_code_key();
  function on_change() {
    "a reply needs a language to quote the verses in, so emptying the list falls back to english, as the bible reader does";
    let empty = list_empty_is(languages_chosen);
    if (empty) {
      let code = ebible_language_en_code();
      let en = list_find_property(languages, key_property, code);
      list_add(languages_chosen, en);
    }
  }
  function update() {
    html_clear(holder);
    let prompt = app_shared_languages_prompt_text();
    let choices_label = text_combine("1. ", prompt);
    app_shared_bible_subset_sorted_choose({
      container: holder,
      options: languages,
      chosen: languages_chosen,
      name_property: "name",
      key_property,
      on_change,
      choices_label,
      on_sort_change: update,
      card: app_shared_container_blue_medium,
    });
  }
  update();
  let r = {
    update,
  };
  return r;
}
