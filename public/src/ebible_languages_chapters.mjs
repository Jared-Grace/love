import { ebible_versions_english_choices } from "../../../love/public/src/ebible_versions_english_choices.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { bible_interlinear_verses_cache } from "../../../love/public/src/bible_interlinear_verses_cache.mjs";
import { list_adder_async } from "../../../love/public/src/list_adder_async.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_version_chapters_cache } from "../../../love/public/src/ebible_version_chapters_cache.mjs";
import { bible_interlinear_verses_upload_folder } from "../../../love/public/src/bible_interlinear_verses_upload_folder.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
export async function ebible_languages_chapters() {
  let languages = ebible_languages();
  async function lambda(la) {
    async function lambda2(language) {
      let bible_folder = object_property_get(language, "bible_folder");
      let v = bible_interlinear_verses_upload_folder();
      let v2 = ebible_folder_english();
      let skips = [v, v2];
      let includes = list_includes(skips, bible_folder);
      if (includes) {
        return;
      }
      await chapters_get_add(bible_folder);
    }
    await each_async(languages, lambda2);
    let i = await bible_interlinear_verses_cache();
    la(i);
    let english_choices = await ebible_versions_english_choices();
    async function lambda4(item) {}
    await each_async(list, lambda4);
    async function chapters_get_add(bible_folder) {
      let chapters = await ebible_version_chapters_cache(bible_folder);
      la({
        bible_folder,
        chapters,
      });
    }
    async function lambda3(c) {}
    await each_async(english_choices, lambda3);
  }
  let all = await list_adder_async(lambda);
  return all;
}
