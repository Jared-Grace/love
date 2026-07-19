import { app_shared_language_sort_get } from "./app_shared_language_sort_get.mjs";
import { app_shared_language_sort_by_name } from "./app_shared_language_sort_by_name.mjs";
import { equal } from "./equal.mjs";
import { list_sort_text_property } from "./list_sort_text_property.mjs";
import { ebible_languages_sort_speakers } from "./ebible_languages_sort_speakers.mjs";
export function ebible_languages_sort_mode(languages) {
  "sorts in place; every entry (language or version choice) carries name and language_code";
  let mode = app_shared_language_sort_get();
  let by_name = equal(mode, app_shared_language_sort_by_name());
  if (by_name) {
    list_sort_text_property(languages, "name");
    return;
  }
  ebible_languages_sort_speakers(languages);
}
