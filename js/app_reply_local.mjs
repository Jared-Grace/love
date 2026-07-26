import { ebible_verse_browser } from "./ebible_verse_browser.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_verse_merge } from "./ebible_verse_merge.mjs";
import { global_function_set } from "./global_function_set.mjs";
import { app_reply } from "./app_reply.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api } from "./app_shared_api.mjs";
export async function app_reply_local(context) {
  "The server runs this one, so its name is spelled rather than imported: importing it";
  "would drag the whole Bible ingestion tree into this bundle for the sake of one string.";
  let result = await app_shared_api({
    f_name: fn_name("ebible_languages_chapters"),
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
