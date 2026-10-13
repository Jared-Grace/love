import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { equal_not } from "./equal_not.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { web_assets_bible_laid_out_path } from "./web_assets_bible_laid_out_path.mjs";
import { web_assets_url } from "./web_assets_url.mjs";
import { http_json_memoized_on_success } from "./http_json_memoized_on_success.mjs";
import { null_is } from "./null_is.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { property_get_or } from "./property_get_or.mjs";
export async function app_chapter_group_laid_out_load(
  bible_folder,
  chapter_code,
) {
  "$plain bible_folder";
  "$plain chapter_code";
  "The verses of one chapter with the layout the printing gives them - where a line breaks, how far it is stepped in, where a stanza ends - or nothing, when there is none to be had.";
  "There is none for a bible other than the English one being read here, none while there is no internet, and none for the few chapters that would not come apart into verses cleanly. Whoever asks copies plain running words then, so nothing is ever waited on and nothing fails.";
  "A whole book is fetched at once and kept for as long as the page is open, so turning to the next chapter of the same book asks for nothing.";
  arguments_assert(arguments, 2);
  let english = ebible_folder_english();
  if (equal_not(bible_folder, english)) {
    return null;
  }
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let path = web_assets_bible_laid_out_path("bsb", book_code);
  let url = web_assets_url(path);
  let chapters = await http_json_memoized_on_success(
    app_chapter_group_laid_out_load,
    book_code,
    url,
  );
  if (null_is(chapters)) {
    return null;
  }
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  let pieces = property_get_or(chapters, chapter_name, null);
  return pieces;
}
