import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_padded_is } from "./ebible_chapter_code_padded_is.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { ebible_chapter_code_to_number } from "./ebible_chapter_code_to_number.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { text_to } from "./text_to.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { assert_json } from "./assert_json.mjs";
export function ebible_chapter_code_padded_assert(chapter_code) {
  "$plain chapter_code";
  "Refuses a chapter code spelled without the noughts this bible writes one with, and says how the code should have been spelled.";
  "The question itself was already answered elsewhere and is only asked here. What this adds is the refusal: a code that is merely a shape mistake used to travel all the way down to the disk and come back as a missing file, and a missing file is the answer to a different question. A page that is not there and a code that could never have named a page look identical at that depth, so the reader who typed GEN1 was told the same thing as the reader asking after a chapter their translation genuinely does not ship.";
  "Measured on this repo: a sweep over the fifty chapters of Genesis asked after GEN1 through GEN9, got a missing-file error nine times, and reported nine finished chapters as unreadable. Nothing was wrong with them. Every one of those chapters is spelled with a nought.";
  "ONLY THE SPELLING IS ASKED HERE, NEVER WHETHER THE BOOK IS ONE OF THE SIXTY-SIX. Both questions have a reading, and the wider one belongs on a link rather than on a page being opened: the download this machine holds ships thirty book codes outside that list - Sirach, Tobit, the Maccabees, front matter, a glossary - and pages for them sit on the disk in hundreds of translations. Asking the wider question here refused every one of those pages, which is a bible this repo can read being called a mistake. That is what happened when this was first written, and it is the reason the narrower reading is the one asked.";
  "The correctly spelled code is worked out and handed back in the refusal rather than described, because the reader is holding the wrong spelling and what they need is the right one. It is spelled by the same reading that spells every other code in this bible, so it cannot drift from what the files are actually called.";
  "A code whose tail is not a number at all has no spelling to offer, and the refusal says so by leaving that out rather than by inventing one.";
  arguments_assert(arguments, 1);
  let padded = ebible_chapter_code_padded_is(chapter_code);
  let book_code = ebible_chapter_code_to_book(chapter_code);
  let number = ebible_chapter_code_to_number(chapter_code);
  let unnumbered = null_is(number);
  let spelled = null;
  if (not(unnumbered)) {
    let chapter_name = text_to(number);
    spelled = ebible_chapter_code_pad(book_code, chapter_name);
  }
  assert_json(padded, {
    hint: "this is not how a chapter code is spelled here - the chapter number must carry the noughts this bible writes it with, so GEN01 rather than GEN1",
    chapter_code,
    book_code,
    spelled,
  });
}
