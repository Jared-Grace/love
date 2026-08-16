import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_language_bible_folder } from "./ebible_language_bible_folder.mjs";
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
  ("A language is asked for its folder rather than read for one, so that a language listing several translations is fetched in the first of them, and a single translation handed in on its own is still fetched in itself.");
  let bible_folder = ebible_language_bible_folder(lc);
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
