import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function app_shared_bible_language_chapter_fetch(
  lc,
  chapter_code,
) {
  arguments_assert(arguments, 2);
  let property_name = bible_folder_key();
  let bible_folder = property_get(lc, property_name);
  async function get() {
    async function lambda_verses_l() {
      let r_verses = await ebible_verses_browser(bible_folder, chapter_code);
      return r_verses;
    }
    async function lambda_books_l() {
      let r_books = await ebible_version_books_browser(bible_folder);
      return r_books;
    }
    let fetched_l = await invoke_multiple_unordered_async([
      lambda_verses_l,
      lambda_books_l,
    ]);
    let verses_l = list_first(fetched_l);
    let books_l = list_second(fetched_l);
    let v = {
      language: lc,
      verses: verses_l,
      books: books_l,
    };
    return v;
  }
  let r = await catch_null_async(get);
  return r;
}
