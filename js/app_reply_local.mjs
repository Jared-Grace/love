import { ebible_verse_browser } from "../../love/js/ebible_verse_browser.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { ebible_verse_merge } from "../../love/js/ebible_verse_merge.mjs";
import { global_function_set } from "../../love/js/global_function_set.mjs";
import { app_reply } from "../../love/js/app_reply.mjs";
import { list_find_property } from "../../love/js/list_find_property.mjs";
import { ebible_languages_chapters } from "../../love/js/ebible_languages_chapters.mjs";
import { app_api } from "../../love/js/app_api.mjs";
export async function app_reply_local(context) {
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
  global_function_set(ebible_verse_browser, verse_get);
  await app_reply(context);
}
