import { arguments_assert } from "./arguments_assert.mjs";
import { bible_usfm_version_book_path } from "./bible_usfm_version_book_path.mjs";
import { file_read } from "./file_read.mjs";
import { bible_usfm_chapter_lines } from "./bible_usfm_chapter_lines.mjs";
import { bible_usfm_lines_verses_taken } from "./bible_usfm_lines_verses_taken.mjs";
import { null_is } from "./null_is.mjs";
import { bible_usfm_lines_laid_out } from "./bible_usfm_lines_laid_out.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { text_trim } from "./text_trim.mjs";
import { em_dashes_closed } from "./em_dashes_closed.mjs";
export async function bible_usfm_version_chapter_verses_text(
  version,
  book_code,
  chapter_number,
  verse_first,
  verse_last,
) {
  arguments_assert(arguments, 5);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain verse_first");
  ("$plain verse_last");
  ("One passage of one chapter of any bible on this disk, laid out as plain writing - the words and nothing else, stepped and broken the way that translation's printing steps and breaks them - or nothing at all, when that chapter does not hold that passage.");
  ("★ IT IS THE WHOLE-CHAPTER READING WITH TWO ENDS ADDED, AND EVERY PART OF IT BELOW THE CUT IS THE SAME PIECE RATHER THAN A COPY OF IT. A song of a stanza of Psalm 119 or of half of Psalm 145 had no text to draw at all until now: the only reader there was answered with the whole chapter, and a lyric video drawn from that would show a hundred and seventy-six verses over a singing of eight.");
  ("The ends are written the way a person writes them, a number or a number and a letter, because that is how the singings themselves are named and an address that had to be spelled some other way would be an address nobody could reach.");
  ("The verse numbers are left out for the same reason the whole-chapter reading leaves them out: this reads a passage meant to be sung or shown, and a number in the middle of a sung line is read aloud by a person following along.");
  ("The em dashes are closed on the way out, by the same reading and for the same reason the whole-chapter reader closes them: the marked-up release spaces them and the publisher's own plain-text edition does not, so the spaces are the converter's and not the printing's.");
  let file_path = await bible_usfm_version_book_path(version, book_code);
  let usfm = await file_read(file_path);
  let usfm_lines = bible_usfm_chapter_lines(usfm, chapter_number);
  let taken = bible_usfm_lines_verses_taken(
    usfm_lines,
    verse_first,
    verse_last,
  );
  if (null_is(taken)) {
    return null;
  }
  let laid_out = bible_usfm_lines_laid_out(taken, false);
  let text = list_join_newline(laid_out);
  let trimmed = text_trim(text);
  let closed = em_dashes_closed(trimmed);
  return closed;
}
