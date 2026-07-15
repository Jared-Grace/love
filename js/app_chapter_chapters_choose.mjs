import { html_clear } from "./html_clear.mjs";
import { app_replace_button_back } from "./app_replace_button_back.mjs";
import { window_reload } from "./window_reload.mjs";
import { app_replace_button_list_centered } from "./app_replace_button_list_centered.mjs";
import { ebible_book_code_to_chapter_codes_browser } from "./ebible_book_code_to_chapter_codes_browser.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { app_chapter_code_open } from "./app_chapter_code_open.mjs";
export async function app_chapter_chapters_choose(content, book_code) {
  html_clear(content);
  app_replace_button_back(content, window_reload);
  let e = ebible_folder_english();
  let items = await ebible_book_code_to_chapter_codes_browser(e, book_code);
  app_replace_button_list_centered(
    content,
    items,
    ebible_chapter_code_to_name,
    app_chapter_code_open,
  );
}
