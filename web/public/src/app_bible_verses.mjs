import { app_bible_chapter_set_default } from "../../../love/public/src/app_bible_chapter_set_default.mjs";
import { ebible_chapter_code_to_name } from "../../../love/public/src/ebible_chapter_code_to_name.mjs";
import { html_div_text_centered } from "../../../love/public/src/html_div_text_centered.mjs";
import { identity } from "../../../love/public/src/identity.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { app_bible_verse_open_curried } from "../../../love/public/src/app_bible_verse_open_curried.mjs";
import { ebible_verses_browser } from "../../../love/public/src/ebible_verses_browser.mjs";
import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_bible_chapters_before } from "../../../love/public/src/app_bible_chapters_before.mjs";
import { html_button_list_centered } from "../../../love/public/src/html_button_list_centered.mjs";
export async function app_bible_verses(context) {
  let n = app_bible_chapter_set_default(context);
  if (n) {
    return;
  }
  let r = await app_bible_chapters_before(context);
  let root = property_get(r, "root");
  let chapter_code = property_get(r, "chapter_code");
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  html_div_text_centered(root, chapter_name);
  let e = ebible_folder_english();
  let verses = await ebible_verses_browser(e, chapter_code);
  let items = list_map_property(verses, "verse_number");
  let oc = app_bible_verse_open_curried(context);
  html_button_list_centered(root, items, identity, oc);
}
