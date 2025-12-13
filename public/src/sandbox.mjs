import { each_async } from "../../../love/public/src/each_async.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
export async function sandbox() {
  let languages = ebible_languages();
  async function lambda2(item) {
    let bible_folder = object_property_get(language, "bible_folder");
    let v = await ebible_version_chapters_cache(bible_folder);}
  await each_async(list, lambda2);
}
