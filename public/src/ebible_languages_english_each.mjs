import { list_remove_property } from "../../../love/public/src/list_remove_property.mjs";
import { ebible_languages_without_original } from "../../../love/public/src/ebible_languages_without_original.mjs";
import { ebible_versions_english_choices_each } from "../../../love/public/src/ebible_versions_english_choices_each.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
export async function ebible_languages_english_each(lambda$bible_folder) {
  let languages = ebible_languages_without_original();
  let e = ebible_folder_english();
  list_remove_property(languages, "language_code", e);
  async function lambda2(language) {
    await lambda$bible_folder(bible_folder);
  }
  await each_async(languages, lambda2);
  await ebible_versions_english_choices_each(lambda$bible_folder);
}
