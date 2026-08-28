import { bible_usfm_version_book_path } from "./bible_usfm_version_book_path.mjs";
import { file_read } from "./file_read.mjs";
import { bible_usfm_chapter_paragraphed_text } from "./bible_usfm_chapter_paragraphed_text.mjs";
import { em_dashes_closed } from "./em_dashes_closed.mjs";
export async function bible_usfm_version_chapter_text(
  version,
  book_code,
  chapter_number,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "One chapter of any bible on this disk, laid out as plain writing - the words and nothing else, stepped and broken the way that translation's printing steps and breaks them.";
  "IT IS THE SAME READING THE BEREAN ALREADY HAD, WITH THE BIBLE MADE A CHOICE INSTEAD OF A FIXTURE. That one names its translation in its own name and finds the file itself, which is right while there is one bible and wrong the moment somebody wants the same psalm in another. Nothing is copied here: the finding of the file and the laying out of the chapter are both asked of the pieces that already did them.";
  "The verse numbers are left out and never offered as a choice, because this reads a passage meant to be sung or shown rather than studied, and a number in the middle of a sung line is read aloud by a person following along.";
  "The em dashes are closed on the way out, by the same reading and for the same reason the Berean reader closes them: the marked-up release spaces them and the publisher's own plain-text edition does not, so the spaces are the converter's and not the printing's. Both shelves here are english, which is what makes closing them right; it would not be right for a bible in french.";
  let file_path = await bible_usfm_version_book_path(version, book_code);
  let usfm = await file_read(file_path);
  let body = bible_usfm_chapter_paragraphed_text(usfm, chapter_number, false);
  let closed = em_dashes_closed(body);
  return closed;
}
