import { each_index_async } from "../../../love/public/src/each_index_async.mjs";
import { list_index_of_next_property } from "../../../love/public/src/list_index_of_next_property.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_languages_without_original_english } from "../../../love/public/src/ebible_languages_without_original_english.mjs";
export async function ebible_languages_without_original_english_bible_folders_each(
  lambda$bible_folder,
) {
  let languages = ebible_languages_without_original_english();
  const property = "bible_folder";
  const value = "gaz";
  let index_next = list_index_of_next_property(languages, property, value);
  log({
    index_next,
  });
  async function lambda2(language, i) {
    if (i < index_next) {
      return;
    }
    log(language);
    return;
    let bible_folder = object_property_get(language, "bible_folder");
    await lambda$bible_folder(bible_folder);
  }
  await each_index_async(languages, lambda2);
}
