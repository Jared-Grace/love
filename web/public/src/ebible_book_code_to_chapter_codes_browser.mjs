import { ebible_chapter_codes_browser } from "../../../love/public/src/ebible_chapter_codes_browser.mjs";
import { list_filter_starts_with } from "../../../love/public/src/list_filter_starts_with.mjs";
export async function ebible_book_code_to_chapter_codes_browser(
  bible_folder,
  book_code,
) {
  let chapter_codes_all = await ebible_chapter_codes_browser(bible_folder);
  let chapter_codes = list_filter_starts_with(chapter_codes_all, book_code);
  return chapter_codes;
}
