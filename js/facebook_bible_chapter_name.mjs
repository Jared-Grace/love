import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_name } from "./ebible_chapter_code_to_name.mjs";
import { ebible_chapter_code_label } from "./ebible_chapter_code_label.mjs";
export function facebook_bible_chapter_name(chapter_code) {
  arguments_assert(arguments, 1);
  ("$plain chapter_code");
  ("How a facebook post names a chapter: Matthew 1, Psalm 23, Song of Solomon 2.");
  ("★ TWO BOOKS ARE NAMED BY HAND BECAUSE THE BIBLE'S OWN BOOK LIST SAYS 'Psalms' AND 'Song'. One psalm is a Psalm, and 'Song 1' names nothing to a reader.");
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let chapter_name = ebible_chapter_code_to_name(chapter_code);
  if (equal(book_code, "PSA")) {
    let r = "Psalm " + chapter_name;
    return r;
  }
  if (equal(book_code, "SNG")) {
    let r2 = "Song of Solomon " + chapter_name;
    return r2;
  }
  let label = ebible_chapter_code_label(chapter_code);
  return label;
}
