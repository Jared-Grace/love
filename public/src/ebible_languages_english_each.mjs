import { list_remove_property } from "../../../love/public/src/list_remove_property.mjs";
import { ebible_languages_without_original } from "../../../love/public/src/ebible_languages_without_original.mjs";
import { ebible_versions_english_choices_each } from "../../../love/public/src/ebible_versions_english_choices_each.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function ebible_languages_english_each(lambda$bible_folder) {
  let languages = ebible_languages_without_original();
  let e = ebible_folder_english();
  list_remove_property(languages, "language_code", e);
  async function lambda2(language) {
    let bible_folder = object_property_get(language, "bible_folder");
    await lambda$bible_folder(bible_folder);
  }
  await each_async(languages, lambda2);
  await ebible_versions_english_choices_each(lambda$bible_folder);
}
