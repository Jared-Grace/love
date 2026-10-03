import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
export async function app_search_results_books() {
  arguments_assert(arguments, 0);
  let en = ebible_folder_english();
  let books = await ebible_version_books_browser(en);
  return books;
}
