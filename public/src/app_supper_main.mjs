import { list_filter_property } from "../../../love/public/src/list_filter_property.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { equal_assert } from "../../../love/public/src/equal_assert.mjs";
import { ebible_verse } from "../../../love/public/src/ebible_verse.mjs";
import { global_function_set } from "../../../love/public/src/global_function_set.mjs";
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
    let filtered = list_filter_property(list, "chapter_code", chapter_code);
    let verse = list_find_property(filtered, "verse_number", verse_number);
    return verse;
  }
  global_function_set(ebible_verse, verse_get);
}
