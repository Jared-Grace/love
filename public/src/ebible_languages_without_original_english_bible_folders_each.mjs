import { list_index_of_property } from "../../../love/public/src/list_index_of_property.mjs";
import { each_index_async } from "../../../love/public/src/each_index_async.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_languages_without_original_english } from "../../../love/public/src/ebible_languages_without_original_english.mjs";
export async function ebible_languages_without_original_english_bible_folders_each(
  lambda$bible_folder,
) {
  let languages = ebible_languages_without_original_english();
  let index_next = null;
  if (false) {
    ("this is used to start at a folder and keep going to resume after interruption");
    const property = "bible_folder";
    const including_and_onward = "porbrbsl";
    index_next = list_index_of_property(
      languages,
      property,
      including_and_onward,
    );
  }
  async function lambda2(language, i) {
    if (i < index_next) {
      return;
    }
    let bible_folder = property_get(language, "bible_folder");
    await lambda$bible_folder(bible_folder);
  }
  await each_index_async(languages, lambda2);
}
