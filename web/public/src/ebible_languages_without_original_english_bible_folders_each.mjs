import { list_index_of_next } from "../../../love/public/src/list_index_of_next.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_languages_without_original_english } from "../../../love/public/src/ebible_languages_without_original_english.mjs";
export async function ebible_languages_without_original_english_bible_folders_each(
  lambda$bible_folder,
) {
  let languages = ebible_languages_without_original_english();
  let index_next = list_index_of_next(list, item);
  log({
    languages,
  });
  return;
  async function lambda2(language) {
    let bible_folder = object_property_get(language, "bible_folder");
    await lambda$bible_folder(bible_folder);
  }
  await each_async(languages, lambda2);
}
