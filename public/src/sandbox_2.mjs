import { property_get } from "../../../love/public/src/property_get.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { ebible_languages_add_item_info } from "../../../love/public/src/ebible_languages_add_item_info.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { ebible_languages } from "../../../love/public/src/ebible_languages.mjs";
export async function sandbox_2() {
  let languages = ebible_languages();
  async function lambda(l) {
    let bible_folder2 = property_get(l, "bible_folder");
    let r = await ebible_languages_add_item_info(bible_folder);
    log({
      r,
    });
  }
  await each_async(languages, lambda);
}
