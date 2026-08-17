import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
export async function app_shared_bible_read_books_en() {
  arguments_assert(arguments, 0);
  let bible_folder = ebible_folder_english();
  let books_en = await ebible_version_books_browser(bible_folder);
  return books_en;
}
