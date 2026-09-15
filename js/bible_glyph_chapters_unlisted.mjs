import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_glyph_chapters } from "./bible_glyph_chapters.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { ebible_book_code_size } from "./ebible_book_code_size.mjs";
import { functions_names } from "./functions_names.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_skip } from "./text_skip.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_chapters_unlisted() {
  arguments_assert(arguments, 0);
  ("The code of every picture Bible chapter that has been written as a function and is not named in the list of chapters.");
  ("A CHAPTER NOBODY LISTED IS WORSE THAN A CHAPTER NOBODY WROTE, because it looks finished and is read by nothing. The list is what every page, band and gate walks, so a chapter file outside it never reaches a reader, and the survey that picks the next chapter to author leaves out only the listed ones - so it offers the same chapter to be written a second time. Measured 2026-09-15: ninety five chapter files written on the fourth and fifth of September had never been listed, and the survey's top twelve included two of them.");
  ("A CHAPTER IS RECOGNISED BY ITS NAME'S SHAPE, a book code the Bible knows followed by nothing but digits. Every other function sharing the prefix - the band writers, the draft readers, the rosetta lines - fails one half of that, and the book code is asked of the Bible rather than of a list kept here.");
  ("It only reads. Listing a chapter is a step with its own command, and a finder that also wrote could not be asked what it would do.");
  let prefix = "bible_glyph_chapter_";
  let list = bible_glyph_chapters();
  let listed = list_map_property(list, "chapter_code");
  let books = ebible_book_codes();
  let size = ebible_book_code_size();
  let f_names = await functions_names();
  let unlisted = [];
  for (let f_name of f_names) {
    let b = text_starts_with(f_name, prefix);
    if (not(b)) {
      continue;
    }
    let chapter_code = text_skip(f_name, prefix.length).toUpperCase();
    let book_code = ebible_chapter_code_to_book(chapter_code);
    let number = text_skip(chapter_code, size);
    let numbered = /^[0-9]+$/.test(number);
    let known = list_includes(books, book_code);
    let chapter = numbered && known;
    if (chapter && list_includes_not(listed, chapter_code)) {
      list_add(unlisted, chapter_code);
    }
  }
  return unlisted;
}
