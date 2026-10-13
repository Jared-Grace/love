import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_chapter_paragraphed_text } from "./bible_usfm_chapter_paragraphed_text.mjs";
import { em_dashes_closed } from "./em_dashes_closed.mjs";
import { text_size } from "./text_size.mjs";
import { list_size } from "./list_size.mjs";
import { less_than } from "./less_than.mjs";
import { text_slice } from "./text_slice.mjs";
import { equal } from "./equal.mjs";
import { list_get } from "./list_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { equal_not } from "./equal_not.mjs";
import { list_add } from "./list_add.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
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
  "WHERE A VERSE BEGINS IS READ OFF THE TWO LAYOUTS OF THE SAME CHAPTER, THE ONE WITH ITS VERSE NUMBERS AND THE ONE WITHOUT. They are the same writing but for the numbers, so walking both at once, the place where they part is a number, and the place the plain one had reached is where that verse begins. This once cut by whole lines of the file instead, and that left out every chapter of prose, because in prose several verses are written on one line.";
  "EVERY NUMBER MUST BE THE NEXT ONE EXPECTED, AND BOTH LAYOUTS MUST END TOGETHER WITH NO NUMBER LEFT OVER. Anything else and nothing is handed back, because a reader handed pieces that nearly fit would copy a passage that is nearly right with nothing to say so. Nothing at all is an answer a caller can see.";
  "The white space between two verses belongs to the later one, so a blank line between stanzas, a line break and its stepping in, and a plain space in the middle of a paragraph each come out as what they are, and the pieces written one after another are the whole chapter letter for letter.";
  arguments_assert(arguments, 3);
  let numbered_raw = bible_usfm_chapter_paragraphed_text(
    usfm,
    chapter_number,
    true,
  );
  let plain_raw = bible_usfm_chapter_paragraphed_text(
    usfm,
    chapter_number,
    false,
  );
  let numbered = em_dashes_closed(numbered_raw);
  let plain = em_dashes_closed(plain_raw);
  let size_numbered = text_size(numbered);
  let size_plain = text_size(plain);
  let count = list_size(verse_numbers);
  let starts = [];
  let at_numbered = 0;
  let at_plain = 0;
  let met = 0;
  while (less_than(at_numbered, size_numbered)) {
    let letter_numbered = text_slice(numbered, at_numbered, at_numbered + 1);
    let letter_plain = text_slice(plain, at_plain, at_plain + 1);
    if (equal(letter_numbered, letter_plain)) {
      at_numbered = at_numbered + 1;
      at_plain = at_plain + 1;
    } else {
      if (equal(met, count)) {
        return null;
      }
      let verse_number = list_get(verse_numbers, met);
      let mark = text_combine_multiple([verse_number, " "]);
      let size_mark = text_size(mark);
      let found = text_slice(numbered, at_numbered, at_numbered + size_mark);
      if (equal_not(found, mark)) {
        return null;
      }
      list_add(starts, at_plain);
      at_numbered = at_numbered + size_mark;
      met = met + 1;
    }
  }
  if (equal_not(met, count)) {
    return null;
  }
  if (equal_not(at_plain, size_plain)) {
    return null;
  }
  if (equal(count, 0)) {
    return null;
  }
  let start_first = list_get(starts, 0);
  if (equal_not(start_first, 0)) {
    return null;
  }
  list_add(starts, size_plain);
  let pieces = [];
  let together = "";
  let trailing = "";
  for (let index = 0; less_than(index, count); index = index + 1) {
    let verse_number = list_get(verse_numbers, index);
    let from = list_get(starts, index);
    let to = list_get(starts, index + 1);
    let raw = text_slice(plain, from, to);
    let text = text_trim(raw);
    if (text_empty_is(text)) {
      return null;
    }
    let leading_size = raw.indexOf(text);
    let leading = text_slice(raw, 0, leading_size);
    let before = trailing + leading;
    let size_raw = text_size(raw);
    trailing = text_slice(raw, leading_size + text_size(text), size_raw);
    list_add(pieces, {
      verse_number,
      before,
      text,
    });
    together = together + before + text;
  }
  if (equal_not(together + trailing, plain)) {
    return null;
  }
  return pieces;
}
