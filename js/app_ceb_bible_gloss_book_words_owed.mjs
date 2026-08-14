import { list_includes_not } from "./list_includes_not.mjs";
import { app_ceb_bible_gloss_generate_chapter_bible_folders } from "./app_ceb_bible_gloss_generate_chapter_bible_folders.mjs";
import { binisaya_words_known } from "./binisaya_words_known.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_version_books_testament_new } from "./ebible_version_books_testament_new.mjs";
import { equal } from "./equal.mjs";
import { gloss_chapters_bible_words_distinct } from "./gloss_chapters_bible_words_distinct.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_first } from "./list_first.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { property_exists_not } from "./property_exists_not.mjs";
import { text_lower_to } from "./text_lower_to.mjs";
export async function app_ceb_bible_gloss_book_words_owed(book_code) {
  "Every Cebuano word one book of the New Testament is written with that the dictionary has not been asked about yet, names left out.";
  "$plain book_code";
  "the code is a book's name, like MAT, chosen from the Bible's own book numbering. It names text to read and nothing that runs.";
  "This is a book's worth of asking rather than the whole Testament's, so the writing of one book overlaps the asking for the next instead of waiting behind all of them. The books are not equal shares of the work either: the first one asked for carries the common words the whole Testament is written in and is far the longest, and every book after it is cheaper than the one before by everything the two share.";
  "Whether a word is a name is decided across the whole New Testament and not across this book alone. One book is too little text for the test - an ordinary word may happen to stand only at the openings of sentences in a single book, and it would be dropped as a name and never looked up.";
  "A word the printed dictionary already carries is asked for all the same. That book gives an entry and this asking gives what the word is built from, which are different things, and a word the printed one appears to carry may be a different word that is merely spelled the same.";
  let bible_folders = app_ceb_bible_gloss_generate_chapter_bible_folders();
  let bible_folder = list_first(bible_folders);
  let books = await ebible_version_books_testament_new(bible_folder);
  let testament_codes = await ebible_books_to_chapter_codes(
    books,
    bible_folder,
  );
  let testament_written = await gloss_chapters_bible_words_distinct(
    bible_folder,
    testament_codes,
  );
  function lower_is(word) {
    let lowered = text_lower_to(word);
    let same = equal(lowered, word);
    return same;
  }
  let uncapitalised = list_filter(testament_written, lower_is);
  let chapter_codes = await ebible_book_code_to_chapter_codes(
    bible_folder,
    book_code,
  );
  let written = await gloss_chapters_bible_words_distinct(
    bible_folder,
    chapter_codes,
  );
  let lowered_all = list_map(written, text_lower_to);
  let words = list_unique(lowered_all);
  let known = await binisaya_words_known();
  function owed_is(word) {
    let named = list_includes_not(uncapitalised, word);
    if (named) {
      return false;
    }
    let unasked = property_exists_not(known, word);
    return unasked;
  }
  let owed = list_filter(words, owed_is);
  return owed;
}
