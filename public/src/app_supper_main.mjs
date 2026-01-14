import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
import { ebible_verse_merge } from "../../../love/public/src/ebible_verse_merge.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { list_find_property } from "../../../love/public/src/list_find_property.mjs";
import { app_supper_verses_get } from "../../../love/public/src/app_supper_verses_get.mjs";
import { firebase_name_jg } from "../../../love/public/src/firebase_name_jg.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { html_clear_context } from "../../../love/public/src/html_clear_context.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_supper_main(context) {
  marker("1");
  firebase_name_jg();
  let e = ebible_folder_english();
  let root = html_clear_context(context);
  let list = await app_supper_verses_get();
  log({
    list,
  });
  function verse_get(bible_folder, chapter_code, verse_number) {
    equal_assert(bible_folder, e);
    let v3 = list_find_property(chapters, "chapter_code", chapter_code);
    let verses = object_property_get(v3, "verses");
    let v = list_find_property(verses, "verse_number", verse_number);
    let verse = ebible_verse_merge(bible_folder, chapter_code, v);
    return verse;
  }
  global_function_set(ebible_verse, verse_get);
}
