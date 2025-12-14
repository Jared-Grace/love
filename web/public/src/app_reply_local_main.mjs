import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { app_reply_generic } from "../../../love/public/src/app_reply_generic.mjs";
import { ebible_languages_chapters } from "../../../love/public/src/ebible_languages_chapters.mjs";
import { app_api } from "../../../love/public/src/app_api.mjs";
export async function app_reply_local_main() {
  let result = await app_api(ebible_languages_chapters.name, []);
  function lambda(bible_folder, chapter_code, verse_number) {
    let item = list_find_property(result, "bible_folder", bible_folder);
  }
  await app_reply_generic(lambda);
}
