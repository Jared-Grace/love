import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { ebible_version_downloaded_page_stems } from "./ebible_version_downloaded_page_stems.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_filter_size } from "./list_filter_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { text_digits_is } from "./text_digits_is.mjs";
import { text_slice } from "./text_slice.mjs";
import { text_slice_from } from "./text_slice_from.mjs";
export async function ebible_version_downloaded_chapters_count(bible_folder) {
  "$plain bible_folder";
  "How many chapters of scripture a downloaded translation actually holds - a thousand one hundred and eighty nine where it holds the whole bible.";
  "This is the number that says what uploading a translation costs, because a chapter is one file up there and one fetch back down. Counted from the names of the files, which is one look at a folder, rather than from anything inside them.";
  "A page counts when it is named by one of the sixty six book codes with a number after it and that number is not zero. GEN01 is the first chapter of Genesis; GEN is the book's own page and GEN00 is its introduction, and neither is scripture anybody reads a chapter of.";
  let book_codes = ebible_book_codes();
  let stems = await ebible_version_downloaded_page_stems(bible_folder);
  function chapter_is(stem) {
    let book_code = text_slice(stem, 0, 3);
    let named = list_includes(book_codes, book_code);
    if (not(named)) {
      return false;
    }
    let after = text_slice_from(stem, 3);
    let numbered = text_digits_is(after);
    if (not(numbered)) {
      return false;
    }
    let chapter_number = number_from_text(after);
    let scripture = greater_than(chapter_number, 0);
    return scripture;
  }
  let count = list_filter_size(stems, chapter_is);
  return count;
}
