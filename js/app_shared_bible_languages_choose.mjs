import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
import { app_shared_bible_panel_open } from "./app_shared_bible_panel_open.mjs";
import { app_shared_bible_subset_sorted_choose } from "./app_shared_bible_subset_sorted_choose.mjs";
import { app_shared_languages_prompt_text } from "./app_shared_languages_prompt_text.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_plus } from "./list_join_plus.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { app_shared_language_codes_save } from "./app_shared_language_codes_save.mjs";
import { html_hash_transform } from "./html_hash_transform.mjs";
import { property_set } from "./property_set.mjs";
export function app_shared_bible_languages_choose(
  content,
  languages,
  languages_chosen,
  back,
) {
  "back is supplied by the caller: a plain reload when this stands alone, or a return to the settings hub when reached from there";
  app_shared_bible_panel_open(content, back);
  function to_language(code) {
    let r = list_find_property_or_null(languages, "language_code", code);
    return r;
  }
  let chosen = list_map_filter_null_not_is(languages_chosen, to_language);
  function on_change() {
    let codes = list_map_property(chosen, "language_code");
    if (list_empty_is(codes)) {
      let v = ebible_language_en_code();
      codes = [v];
    }
    let l = list_join_plus(codes);
    app_shared_language_codes_save(l);
    function transform(hash) {
      property_set(hash, "l", l);
    }
    html_hash_transform(transform);
  }
  function on_sort_change() {
    app_shared_bible_languages_choose(
      content,
      languages,
      languages_chosen,
      back,
    );
  }
  let choices_label = app_shared_languages_prompt_text();
  app_shared_bible_subset_sorted_choose(
    content,
    languages,
    chosen,
    "name",
    "language_code",
    on_change,
    choices_label,
    on_sort_change,
  );
}
