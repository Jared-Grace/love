import { app_bible_chapter_set_default } from "../../love/js/app_bible_chapter_set_default.mjs";
import { ebible_chapter_code_to_name } from "../../love/js/ebible_chapter_code_to_name.mjs";
import { html_div_text_centered } from "../../love/js/html_div_text_centered.mjs";
import { app_shared_text_deemphasized } from "../../love/js/app_shared_text_deemphasized.mjs";
import { identity } from "../../love/js/identity.mjs";
import { list_map_property } from "../../love/js/list_map_property.mjs";
import { app_bible_verse_open_curried } from "../../love/js/app_bible_verse_open_curried.mjs";
import { ebible_verses_browser } from "../../love/js/ebible_verses_browser.mjs";
import { ebible_folder_english } from "../../love/js/ebible_folder_english.mjs";
import { property_get } from "../../love/js/property_get.mjs";
import { app_bible_chapters_before } from "../../love/js/app_bible_chapters_before.mjs";
import { app_shared_button_list_centered } from "../../love/js/app_shared_button_list_centered.mjs";
export async function app_bible_verses(context) {
  let n = app_bible_chapter_set_default(context);
  if (n) {
    return;
  }
  let r = await app_bible_chapters_before(context);
  let root = property_get(r, "root");
  let chapter_code = property_get(r, "chapter_code");
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  let chapter_div = html_div_text_centered(root, chapter_name);
  app_shared_text_deemphasized(chapter_div);
  let e = ebible_folder_english();
  let verses = await ebible_verses_browser(e, chapter_code);
  let items = list_map_property(verses, "verse_number");
  let oc = app_bible_verse_open_curried(context);
  app_shared_button_list_centered(root, items, identity, oc);
}
