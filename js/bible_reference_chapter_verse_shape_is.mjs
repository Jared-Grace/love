import { arguments_assert } from "./arguments_assert.mjs";
import { text_regex_match } from "./text_regex_match.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function bible_reference_chapter_verse_shape_is(reference) {
  "$plain reference";
  "Is this reference written so a chapter and a verse can be read out of it - a book, then a space, then a chapter and a verse joined by a colon, and after that a second verse number only if the passage runs on.";
  "IT ASKS ABOUT THE WRITING, NOT ABOUT THE BIBLE. Whether the book exists and whether it holds that verse are questions only a bible can answer, and a bible arrives over the wire; the shape is answerable from the words alone, so it is answerable before anything is fetched and before anybody opens the page.";
  "A REFERENCE THAT FAILS THIS DOES NOT FAIL QUIETLY. The reader takes the words after the book name, cuts them at the colon, and hands the half after the colon on to be cut again at a dash - so a reference with no colon hands nothing on, and the cutting throws. That throw happens while a page is filling its passages in, which abandons the whole fill: not one blank card, but every passage after it left empty, on a page that otherwise looks finished. One reference written 'Jude 24' instead of 'Jude 1:24' emptied fourteen lines of a song this way.";
  "A book of one chapter still names it. 'Jude 1:24' rather than 'Jude 24' is what the rest of this repo writes and what the bible behind it is addressed by, so the single-chapter books are the ones a person writing from memory gets wrong.";
  arguments_assert(arguments, 1);
  let regex = /^.+ \d+:\d+(-\d+)?$/;
  let matches = text_regex_match(reference, regex);
  let shaped = null_not_is(matches);
  return shaped;
}
