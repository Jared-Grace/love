import { arguments_assert } from "./arguments_assert.mjs";
import { berean_book_path } from "./berean_book_path.mjs";
import { file_read } from "./file_read.mjs";
import { bible_usfm_chapter_paragraphed_text } from "./bible_usfm_chapter_paragraphed_text.mjs";
import { em_dashes_closed } from "./em_dashes_closed.mjs";
export async function bible_usfm_version_chapter_paragraphed_text(
  book_code,
  chapter_number,
  verse_numbers_shown,
) {
  arguments_assert(arguments, 5);
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain verse_numbers_shown");
  ("One chapter of the Berean release, laid out as plain writing - the words of the passage and nothing else, stepped and broken the way the printing steps and breaks them.");
  ("The em dashes are closed on the way out, by the same reading and for the same reason as the verse reader closes them: the marked-up release spaces them and the publisher's own plain-text edition does not, so the spaces are the converter's and not the printing's. This is english, so closing them is right here and would not be right for a bible in french.");
  ("Nothing is written at the top naming the passage, and this once did. A reference is a true and useful thing to put above a psalm, but it is a thing this wrote rather than a thing the passage says, and whoever is pasting the words somewhere can put the reference where they want it far more easily than they can pick a line out of the middle of what they were given. Handing back only what was asked for is also what makes the answer safe to paste anywhere without reading it first.");
  ("That is the same judgement the section titles get, one layer down. Everything here comes out of the file; nothing comes out of this repo.");
  let file_path = berean_book_path(book_code);
  let usfm = await file_read(file_path);
  let body = bible_usfm_chapter_paragraphed_text(
    usfm,
    chapter_number,
    verse_numbers_shown,
  );
  let closed = em_dashes_closed(body);
  return closed;
}
