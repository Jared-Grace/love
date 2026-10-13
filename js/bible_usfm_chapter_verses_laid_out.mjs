import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_chapter_lines } from "./bible_usfm_chapter_lines.mjs";
import { bible_usfm_lines_verses_taken } from "./bible_usfm_lines_verses_taken.mjs";
import { null_is } from "./null_is.mjs";
import { bible_usfm_lines_laid_out } from "./bible_usfm_lines_laid_out.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { em_dashes_closed } from "./em_dashes_closed.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { text_size } from "./text_size.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
import { less_than } from "./less_than.mjs";
import { text_slice } from "./text_slice.mjs";
import { list_add } from "./list_add.mjs";
import { bible_usfm_chapter_paragraphed_text } from "./bible_usfm_chapter_paragraphed_text.mjs";
import { equal_not } from "./equal_not.mjs";
export function bible_usfm_chapter_verses_laid_out(
  usfm,
  chapter_number,
  verse_numbers,
) {
  "$plain usfm";
  "$plain chapter_number";
  "$plain verse_numbers";
  "One chapter of a book written in usfm, cut into its verses with the layout kept: for every verse its own words stepped and broken the way the printing steps and breaks them, and the white space that stands between it and the verse before. Or nothing at all, when the chapter cannot be cut that way.";
  "It is for a reader that copies some run of verses and does not have the usfm to hand. Any run is its verses written one after another with each one's leading white space between them, so a page can hold a chapter once and answer every passage inside it.";
  "THE WHITE SPACE BETWEEN TWO VERSES IS MEASURED, NEVER GUESSED. The two verses are laid out together by the same piece that lays out a whole chapter, and what stands between the first one's words and the second one's words in that is the white space. So a blank line between stanzas, a single line break inside one and a plain space in the middle of a paragraph each come out as what they are.";
  "NOTHING IS HANDED BACK UNLESS THE PIECES PUT TOGETHER AGAIN ARE THE WHOLE CHAPTER, LETTER FOR LETTER. A chapter where a verse begins in the middle of a line, or where two verses share words, does not come apart cleanly, and a reader handed pieces that nearly fit would copy a passage that is nearly right with nothing to say so. Nothing at all is an answer a caller can see.";
  arguments_assert(arguments, 3);
  let usfm_lines = bible_usfm_chapter_lines(usfm, chapter_number);
  function run_text_or_null(verse_first, verse_last) {
    let taken = bible_usfm_lines_verses_taken(
      usfm_lines,
      verse_first,
      verse_last,
    );
    if (null_is(taken)) {
      return null;
    }
    let laid_out = bible_usfm_lines_laid_out(taken, false);
    let joined = list_join_newline(laid_out);
    let trimmed = text_trim(joined);
    let closed = em_dashes_closed(trimmed);
    return closed;
  }
  let pieces = [];
  let together = "";
  let number_previous = null;
  let text_previous = null;
  for (let verse_number of verse_numbers) {
    let text = run_text_or_null(verse_number, verse_number);
    if (null_is(text)) {
      return null;
    }
    let before = "";
    if (null_not_is(number_previous)) {
      let pair = run_text_or_null(number_previous, verse_number);
      if (null_is(pair)) {
        return null;
      }
      let size_pair = text_size(pair);
      let size_previous = text_size(text_previous);
      let size = text_size(text);
      let fits =
        text_starts_with(pair, text_previous) &&
        text_ends_with(pair, text) &&
        not(less_than(size_pair, size_previous + size));
      if (not(fits)) {
        return null;
      }
      let to = subtract(size_pair, size);
      before = text_slice(pair, size_previous, to);
    }
    list_add(pieces, {
      verse_number,
      before,
      text,
    });
    together = together + before + text;
    number_previous = verse_number;
    text_previous = text;
  }
  let whole = bible_usfm_chapter_paragraphed_text(usfm, chapter_number, false);
  let whole_closed = em_dashes_closed(whole);
  if (equal_not(together, whole_closed)) {
    return null;
  }
  return pieces;
}
