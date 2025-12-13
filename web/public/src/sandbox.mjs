import { list_add } from "../../../love/public/src/list_add.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
export async function sandbox() {
  let languages = ebible_languages();
  async function lambda(la) {
    async function lambda2(language) {
      let bible_folder = object_property_get(language, "bible_folder");
      let chapters = await ebible_version_chapters_cache(bible_folder);
      list_add(list, item);
    }
    await each_async(languages, lambda2);
  }
  let list2 = await list_adder_async(lambda);
}
