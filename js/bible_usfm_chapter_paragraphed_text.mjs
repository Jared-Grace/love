import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_chapter_lines } from "./bible_usfm_chapter_lines.mjs";
import { bible_usfm_lines_laid_out } from "./bible_usfm_lines_laid_out.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_trim } from "./text_trim.mjs";
export function bible_usfm_chapter_paragraphed_text(
  usfm,
  chapter_number,
  verse_numbers_shown,
) {
  arguments_assert(arguments, 3);
  ("$plain usfm");
  ("$plain chapter_number");
  ("$plain verse_numbers_shown");
  ("One chapter of a book written in usfm, laid out as plain writing a person can paste somewhere - the poetry stepped the way the printing steps it, and a blank line wherever the printing breaks the passage.");
  ("The other reader here cuts a book into verses and throws the layout away, which is right for a reader showing one verse at a time and wrong for anybody copying a psalm out. A psalm read as nine unbroken sentences is not the psalm the page shows: the couplets and the stanza breaks are how hebrew poetry says what it says, they are written into the file as marks of their own, and keeping them costs nothing but reading marks that are already there.");
  ("Getting from a whole book to the lines of one chapter is asked of the piece that does only that, because a reader cutting a passage out of a chapter needs the very same three steps and they were about to be written a second time.");
  let usfm_lines = bible_usfm_chapter_lines(usfm, chapter_number);
  let laid_out = bible_usfm_lines_laid_out(usfm_lines, verse_numbers_shown);
  let text = list_join_newline(laid_out);
  let trimmed = text_trim(text);
  return trimmed;
}
