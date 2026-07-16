import { html_clear } from "./html_clear.mjs";
import { app_shared_button_back } from "./app_shared_button_back.mjs";
import { window_reload } from "./window_reload.mjs";
import { html_subset_ordered_choose } from "./html_subset_ordered_choose.mjs";
import { app_shared_languages_prompt_text } from "./app_shared_languages_prompt_text.mjs";
import { list_map } from "./list_map.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { html_hash_transform } from "./html_hash_transform.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_bible_languages_choose(
  content,
  languages,
  languages_chosen,
) {
  html_clear(content);
  function to_language(code) {
    return list_find_property_or_null(languages, "language_code", code);
  }
  let mapped = list_map(languages_chosen, to_language);
  let chosen = list_filter_null_not_is(mapped);
  function on_change() {
    let codes = list_map_property(chosen, "language_code");
    if (list_empty_is(codes)) {
      codes = [ebible_language_en_code()];
    }
    let l = list_join_plus(codes);
    function transform(hash) {
      property_set(hash, "l", l);
    }
    html_hash_transform(transform);
  }
  app_shared_button_back(content, window_reload);
  html_subset_ordered_choose(
    content,
    languages,
    chosen,
    "name",
    "language_code",
    on_change,
    app_shared_languages_prompt_text(),
  );
}
