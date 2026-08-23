import { arguments_assert } from "./arguments_assert.mjs";
import { door43_version_book_chapters_verses } from "./door43_version_book_chapters_verses.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { equal } from "./equal.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export async function door43_version_chapter_verses(
  door43_folder,
  chapter_code,
) {
  arguments_assert(arguments, 2);
  ("$plain door43_folder");
  ("$plain chapter_code");
  ("The verses of one named chapter of a Door43 bible, read off the copy of it on this disk, or nothing when that bible does not carry the chapter.");
  ("ONE CHAPTER RATHER THAN THE WHOLE BIBLE. Everything that read these texts until now wanted all of them at once, to cache them or to send them somewhere, and cutting every one of the sixty-six books apart is the right price for that. Comparing how a handful of translations word one verse is the opposite shape of question, and paying the whole-bible price for it turned a comparison into a wait.");
  ("Which book the chapter is in is read off its name, and the chapter is then picked out of that book by its full name rather than by counting. A book that starts at chapter three, or that numbers its chapters unusually, is then found correctly instead of being off by however many the count assumed.");
  ("Nothing is a real answer, not a fault - these translations are published a book at a time, so ten of the sixty-six are simply not there yet.");
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let chapters = await door43_version_book_chapters_verses(
    door43_folder,
    book_code,
  );
  let uncarried = null_is(chapters);
  if (uncarried) {
    return null;
  }
  function asked_is(chapter) {
    let chapter_number = property_get(chapter, "chapter_number");
    let padded = ebible_chapter_code_pad(book_code, chapter_number);
    let same = equal(padded, chapter_code);
    return same;
  }
  let found = list_find_or_null(chapters, asked_is);
  let none = null_is(found);
  if (none) {
    return null;
  }
  let verses = property_get(found, "verses");
  return verses;
}
