import { ebible_language_to_bible_folder } from "./ebible_language_to_bible_folder.mjs";
import { ebible_references_parse_lines_browser } from "./ebible_references_parse_lines_browser.mjs";
import { ebible_verses_browser } from "./ebible_verses_browser.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { list_find_property } from "./list_find_property.mjs";
import { ebible_languages } from "./ebible_languages.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function app_shared_bible_fetch_language(
  lc,
  ref_mode,
  ref_line,
  chapter_code,
) {
  async function get() {
    let bible_folder = ebible_language_to_bible_folder(lc);
    let verses = null;
    if (ref_mode) {
      verses = await ebible_references_parse_lines_browser(
        [bible_folder],
        [ref_line],
      );
    } else {
      verses = await ebible_verses_browser(bible_folder, chapter_code);
    }
    let books = await ebible_version_books_browser(bible_folder);
    let language = list_find_property(ebible_languages(), "language_code", lc);
    let v2 = {
      language_code: lc,
      language,
      books,
      verses,
    };
    return v2;
  }
  let r = await catch_null_async(get);
  return r;
}
