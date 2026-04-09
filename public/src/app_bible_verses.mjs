import { ebible_folder_english } from "../../../love/public/src/ebible_folder_english.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_bible_chapters_before } from "../../../love/public/src/app_bible_chapters_before.mjs";
import { html_button_list_centered } from "../../../love/public/src/html_button_list_centered.mjs";
import { app_bible_chapter_open_curried } from "../../../love/public/src/app_bible_chapter_open_curried.mjs";
import { ebible_book_code_to_chapter_codes_browser } from "../../../love/public/src/ebible_book_code_to_chapter_codes_browser.mjs";
import { ebible_chapter_code_to_name } from "../../../love/public/src/ebible_chapter_code_to_name.mjs";
export async function app_bible_verses(context) {
  let r = await app_bible_chapters_before(context);
  let root = property_get(r, "root");
  let book_code = property_get(r, "book_code");
  let verse_number = property_get(r, "verse_number");
  let e = ebible_folder_english();
  let items = await ebible_book_code_to_chapter_codes_browser(e, book_code);
  let code_to_button_text = ebible_chapter_code_to_name;
  let oc = app_bible_chapter_open_curried(context);
  html_button_list_centered(root, items, code_to_button_text, oc);
}
