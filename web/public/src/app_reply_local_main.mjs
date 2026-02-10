import { property_get } from "../../../love/public/src/property_get.mjs";
import { ebible_verse_merge } from "../../../love/public/src/ebible_verse_merge.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
import { app_reply_main } from "../../../love/public/src/app_reply_main.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { ebible_languages_chapters } from "../../../love/public/src/ebible_languages_chapters.mjs";
import { app_api } from "../../../love/public/src/app_api.mjs";
export async function app_reply_local_main(context) {
  let result = await app_api({
    f_name: ebible_languages_chapters.name,
    args: [],
  });
  function verse_get(bible_folder, chapter_code, verse_number) {
    let v2 = list_find_property(result, "bible_folder", bible_folder);
    let chapters = property_get(v2, "chapters");
    let v3 = list_find_property(chapters, "chapter_code", chapter_code);
    let verses = property_get(v3, "verses");
    let v = list_find_property(verses, "verse_number", verse_number);
    let verse = ebible_verse_merge(bible_folder, chapter_code, v);
    return verse;
  }
  global_function_set(ebible_verse, verse_get);
  await app_reply_main(context);
}
