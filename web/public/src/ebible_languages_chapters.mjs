import { bible_interlinear_verses_cache } from "../../../love/public/src/bible_interlinear_verses_cache.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
import { equal } from "../../../love/public/src/equal.mjs";
import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
export async function ebible_languages_chapters() {
  let languages = ebible_languages();
  async function lambda(la) {
    async function lambda2(language) {
      let bible_folder = object_property_get(language, "bible_folder");
      let right = bible_interlinear_verses_upload_folder();
      if (equal(bible_folder, right)) {
        return;
      }
      let chapters = await ebible_version_chapters_cache(bible_folder);
      la({
        bible_folder,
        chapters,
      });
    }
    await each_async(languages, lambda2);
    let i = await bible_interlinear_verses_cache();
    la(i);
  }
  let all = await list_adder_async(lambda);
  return all;
}
