import { arguments_assert } from "./arguments_assert.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_first } from "./list_first.mjs";
import { list_last } from "./list_last.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_any } from "./list_any.mjs";
export function ebible_letter_accounted_is(accounted, name) {
  "$plain name";
  "Whether one chapter has already been judged - written to eBible about, or read and cleared - at any of the three widths the record is allowed to answer at.";
  arguments_assert(arguments, 2);
  ("A judgment is not always about one chapter, and the record has to be writable at the width the reading was actually done at. Some are about a whole bible: lit skips 345 whole chapters, so every one of its 4834 missing verses is that same editorial choice, and writing it down 4834 times would claim 4834 readings that never happened. Some are about one book: Brenton files Nehemiah where the other Septuagint editions file the same chapters under Ezra, and that is true of every chapter of it. Most are about one chapter.");
  ("The three are asked together rather than widest first, because they cannot disagree. A record holding both a bible and a chapter inside that bible says the same thing twice, and twice is not a conflict.");
  ("Split on the space rather than by length, because a bible folder is any word eBible chose and the codes are not all the same width - PSA003 and MRK01 are both chapter codes.");
  let words = text_split_space(name);
  let bible_folder = list_first(words);
  let chapter_code = list_last(words);
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let book_name = list_join_space([bible_folder, book_code]);
  let widths = [bible_folder, book_name, name];
  function held_is(width) {
    let held = property_exists(accounted, width);
    return held;
  }
  let judged = list_any(widths, held_is);
  return judged;
}
