import { verse_number_key } from "./verse_number_key.mjs";
import { app_bible_picker_mark_current } from "./app_bible_picker_mark_current.mjs";
import { app_shared_color_blue_dark } from "./app_shared_color_blue_dark.mjs";
import { html_font_color_set } from "./html_font_color_set.mjs";
import { app_bible_picker_buttons_enlarge } from "./app_bible_picker_buttons_enlarge.mjs";
import { app_shared_bible_chapter_set_default } from "./app_shared_bible_chapter_set_default.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { identity } from "./identity.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { app_bible_verse_open_curried } from "./app_bible_verse_open_curried.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_chapters_before } from "./app_shared_bible_chapters_before.mjs";
import { app_shared_button_list_centered } from "./app_shared_button_list_centered.mjs";
export async function app_bible_verses(context) {
  let n = await app_shared_bible_chapter_set_default(context);
  if (n) {
    return;
  }
  let r = await app_shared_bible_chapters_before(context);
  let card = property_get(r, "card");
  let chapter_code = property_get(r, "chapter_code");
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  let chapter_div = html_div_text_centered(card, chapter_name);
  let color = app_shared_color_blue_dark();
  html_font_color_set(chapter_div, color);
  let e = ebible_folder_english();
  let verses = await ebible_verses_browser(e, chapter_code);
  let items = list_map_property(verses, verse_number_key());
  let oc = app_bible_verse_open_curried(context);
  let buttons = app_shared_button_list_centered(card, items, identity, oc);
  app_bible_picker_buttons_enlarge(buttons);
  let current = property_get(r, verse_number_key());
  app_bible_picker_mark_current(buttons, items, current);
}
