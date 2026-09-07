import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_version_books } from "./ebible_version_books.mjs";
import { ebible_books_to_chapter_codes } from "./ebible_books_to_chapter_codes.mjs";
import { ebible_verses_readaloud_source } from "./ebible_verses_readaloud_source.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export async function ebible_verses_all(bible_folder) {
  "Every verse of one whole translation, in the order the translation puts them, as its publisher wrote them, each one saying which chapter it stands in.";
  "This is the walk any reading of a whole translation has to make, gathered in one place so that a new reading is a reading of this list rather than another copy of the walk. Two readings that each made their own walk would each be free to step over a different set of chapters, and two readings of the same translation quietly disagreeing about which chapters are in it would be very hard to notice.";
  "The chapter is written onto each verse rather than left to the walker to remember. A verse from a chapter reader knows its number and its words and not where it came from, which is fine while the chapter is still the loop you are standing in and useless the moment the verses are handed on as one list.";
  "A chapter this translation does not read aloud, or one whose lines cannot be laid against its page's marks, is stepped over. Those are chapters with no verses in them to read rather than a fault here, and they are the same chapters for every reading built on this list.";
  "The publisher's own writing is handed back rather than the repaired reading of it, because a reading whose purpose is to show somebody what a file says cannot be shown that file with things already put right in it.";
  "$plain bible_folder";
  "which translation to read.";
  arguments_assert(arguments, 1);
  let books = await ebible_version_books(bible_folder);
  let chapter_codes = await ebible_books_to_chapter_codes(books, bible_folder);
  let all = [];
  for (let chapter_code of chapter_codes) {
    let verses = await ebible_verses_readaloud_source(
      bible_folder,
      chapter_code,
    );
    let unread = null_is(verses);
    if (unread) {
      continue;
    }
    function verse_placed(verse) {
      let placed = {
        chapter_code,
        verse_number: property_get(verse, "verse_number"),
        text: property_get(verse, "text"),
      };
      list_add(all, placed);
    }
    each(verses, verse_placed);
  }
  return all;
}
