import { bible_usfm_version_book_path } from "./bible_usfm_version_book_path.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { file_read } from "./file_read.mjs";
import { bible_usfm_chapter_paragraphed_text } from "./bible_usfm_chapter_paragraphed_text.mjs";
import { em_dashes_closed } from "./em_dashes_closed.mjs";
export async function bible_usfm_version_chapter_paragraphed_text(
  version,
  book_code,
  chapter_number,
  verse_numbers_shown,
) {
  arguments_assert(arguments, 4);
  ("$plain version");
  ("$plain book_code");
  ("$plain chapter_number");
  ("$plain verse_numbers_shown");
  ("One chapter of any bible this disk holds as usfm, laid out as plain writing - the words of the passage and nothing else, stepped and broken the way that translation's printing steps and breaks them, with the verse numbers left in or taken out as the caller asks.");
  ("IT NAMED ITS TRANSLATION IN ITS OWN NAME AND FOUND THE FILE ITSELF, AND THAT IS WHAT CHANGED. Reading one bible is right while there is one bible and wrong the moment somebody wants the same psalm in another wording. Which bible is asked for is now a word handed in rather than a fact baked into the name, and the finding of the file is asked of the piece that already knew how to find it on either shelf.");
  ("A word this repo holds no usfm for is refused rather than quietly answered, one layer down, and the refusal names the words that do work. So a caller may spell a translation wrongly and be told so, instead of being handed the Berean and never knowing.");
  ("The em dashes are closed on the way out, by the same reading and for the same reason as the verse reader closes them: the marked-up release spaces them and the publisher's own plain-text edition does not, so the spaces are the converter's and not the printing's. Every shelf this reads is english, which is what makes closing them right; it would not be right for a bible in french, so a shelf in another language may not simply be added to the list without this line being read again.");
  ("Nothing is written at the top naming the passage, and this once did. A reference is a true and useful thing to put above a psalm, but it is a thing this wrote rather than a thing the passage says, and whoever is pasting the words somewhere can put the reference where they want it far more easily than they can pick a line out of the middle of what they were given. Handing back only what was asked for is also what makes the answer safe to paste anywhere without reading it first.");
  ("That is the same judgement the section titles get, one layer down. Everything here comes out of the file; nothing comes out of this repo.");
  let file_path = await bible_usfm_version_book_path(version, book_code);
  let usfm = await file_read(file_path);
  let body = bible_usfm_chapter_paragraphed_text(
    usfm,
    chapter_number,
    verse_numbers_shown,
  );
  let closed = em_dashes_closed(body);
  return closed;
}
