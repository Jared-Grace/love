import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_language_original } from "../../../love/public/src/ebible_language_original.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
export async function sandbox() {
  let languages = ebible_languages();
  async function lambda(la) {
    async function lambda2(language) {
      let bible_folder = object_property_get(language, "bible_folder");
      let right = ebible_language_original();
      if (equal(bible_folder, right)) {
        return;
      }
      log("message2");
      let chapters = await ebible_version_chapters_cache(bible_folder);
      la({
        bible_folder,
        chapters,
      });
      log("message");
    }
    await each_async(languages, lambda2);
  }
  let all = await list_adder_async(lambda);
  return all;
}
