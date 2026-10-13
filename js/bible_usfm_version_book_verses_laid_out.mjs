import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_book_text } from "./bible_usfm_version_book_text.mjs";
import { usfm_chapters_verses } from "./usfm_chapters_verses.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { bible_usfm_chapter_verses_laid_out } from "./bible_usfm_chapter_verses_laid_out.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { property_set } from "./property_set.mjs";
export async function bible_usfm_version_book_verses_laid_out(
  version,
  book_code,
) {
  "$plain version";
  "$plain book_code";
  "One whole book of a named bible, every chapter cut into its verses with the layout kept, and beside them the chapters that would not come apart cleanly.";
  "A chapter that would not come apart is named rather than left out in silence, so whoever runs this can see how much of the book a reader will be given laid out and how much it will have to copy as plain running words.";
  arguments_assert(arguments, 2);
  let usfm = await bible_usfm_version_book_text(version, book_code);
  let book_chapters = usfm_chapters_verses(usfm);
  let number_key = verse_number_key();
  let chapters = {};
  let uncut = [];
  for (let book_chapter of book_chapters) {
    let chapter_number = property_get(book_chapter, "chapter_number");
    let verses = property_get(book_chapter, "verses");
    let verse_numbers = list_map_property(verses, number_key);
    let pieces = bible_usfm_chapter_verses_laid_out(
      usfm,
      chapter_number,
      verse_numbers,
    );
    if (null_is(pieces)) {
      list_add(uncut, chapter_number);
    } else {
      property_set(chapters, chapter_number, pieces);
    }
  }
  let laid = {
    chapters,
    uncut,
  };
  return laid;
}
