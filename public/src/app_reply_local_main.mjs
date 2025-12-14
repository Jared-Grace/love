import { list_find } from "../../../love/public/src/list_find.mjs";
import { app_reply_generic } from "../../../love/public/src/app_reply_generic.mjs";
import { ebible_languages_chapters } from "../../../love/public/src/ebible_languages_chapters.mjs";
import { app_api } from "../../../love/public/src/app_api.mjs";
export async function app_reply_local_main() {
  let result = await app_api(ebible_languages_chapters.name, []);
  function lambda(bible_folder, chapter_code, verse_number) {
    function lambda2(item) {}
    let only = list_find(list, lambda2);
  }
  await app_reply_generic(lambda);
}
