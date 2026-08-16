import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { invoke_multiple_unordered_async } from "./invoke_multiple_unordered_async.mjs";
import { list_first } from "./list_first.mjs";
import { list_second } from "./list_second.mjs";
export async function app_shared_bible_books_verses_fetch(e, chapter_code) {
  arguments_assert(arguments, 2);
  async function lambda_books_en() {
    let r = await ebible_version_books_browser(e);
    return r;
  }
  async function lambda_verses_en() {
    let r = await ebible_verses_browser(e, chapter_code);
    return r;
  }
  let fetched_en = await invoke_multiple_unordered_async([
    lambda_books_en,
    lambda_verses_en,
  ]);
  let books = list_first(fetched_en);
  let verses = list_second(fetched_en);
  let r2 = {
    books,
    verses,
  };
  return r2;
}
