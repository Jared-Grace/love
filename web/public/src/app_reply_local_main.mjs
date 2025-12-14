import { ebible_verse_download } from "../../../love/public/src/ebible_verse_download.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
import { app_reply_main } from "../../../love/public/src/app_reply_main.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { ebible_languages_chapters } from "../../../love/public/src/ebible_languages_chapters.mjs";
import { app_api } from "../../../love/public/src/app_api.mjs";
export async function app_reply_local_main() {
  let result = await app_api(ebible_languages_chapters.name, []);
  function lambda(bible_folder, chapter_code, verse_number) {
    let { chapters } = list_find_property(result, "bible_folder", bible_folder);
    let { verses } = list_find_property(chapters, "chapter_code", chapter_code);
    let verse = list_find_property(verses, "verse_number", verse_number);
    return verse;
  }
  global_function_set(ebible_verse, ebible_verse_download);
  await app_reply_main();
}
