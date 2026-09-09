import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_book_chapter_codes } from "./bible_usfm_version_book_chapter_codes.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { property_exists } from "./property_exists.mjs";
import { not } from "./not.mjs";
import { add } from "./add.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { bible_usfm_chapter_interlinear_words_apart } from "./bible_usfm_chapter_interlinear_words_apart.mjs";
import { property_get } from "./property_get.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { and } from "./and.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_usfm_book_interlinear_words_apart(book_code) {
  arguments_assert(arguments, 1);
  ("$plain book_code");
  ("Every chapter of one book of the Berean where the reading off the usfm shelf and the interlinear's English do not say the same words, each with the words one side holds over the other, and beside them how many chapters were actually set side by side.");
  ("A chapter the two sides agree about is left out rather than answered empty, because what a reader of this wants is the disagreements, and a list carrying eleven hundred and eighty nine rows of nothing hides them.");
  ("A chapter the interlinear does not carry is passed over rather than counted as a disagreement. The tables cover what they cover, and a chapter absent from them says nothing at all about whether the shelf reads it rightly.");
  ("HOW MANY WERE COMPARED COMES BACK BESIDE THE DISAGREEMENTS, because a shelf that moved and a table that failed to load both leave this answering an empty list, and an empty list is what a clean book looks like. Without the count there is no telling a book with nothing wrong in it from a book nobody managed to read.");
  let chapter_codes = await bible_usfm_version_book_chapter_codes(
    "bsb",
    book_code,
  );
  let chapters = await bible_interlinear_chapters_words_cache();
  let rows = [];
  let compared = 0;
  for (let chapter_code of chapter_codes) {
    let held = property_exists(chapters, chapter_code);
    if (not(held)) {
      continue;
    }
    compared = add(compared, 1);
    let chapter_number = ebible_chapter_code_to_number(chapter_code);
    let apart = await bible_usfm_chapter_interlinear_words_apart(
      book_code,
      chapter_number,
    );
    let reading_over = property_get(apart, "reading_over");
    let english_over = property_get(apart, "english_over");
    let reading_quiet = list_empty_is(reading_over);
    let english_quiet = list_empty_is(english_over);
    let quiet = and(reading_quiet, english_quiet);
    if (quiet) {
      continue;
    }
    list_add(rows, apart);
  }
  let r = {
    compared,
    rows,
  };
  return r;
}
