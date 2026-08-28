import { bible_usfm_version_book_path } from "./bible_usfm_version_book_path.mjs";
import { file_read } from "./file_read.mjs";
import { usfm_mark_text_or_null } from "./usfm_mark_text_or_null.mjs";
export async function bible_usfm_version_passage_text(
  version,
  book_code,
  chapter_number,
) {
  "$plain version";
  "$plain book_code";
  "$plain chapter_number";
  "Which passage this is, written the way the translation itself writes it: the book's own name and the chapter number, as in Psalm 150.";
  "THE BOOK NAMES ITSELF, RATHER THAN BEING LOOKED UP IN A LIST HERE. Every usfm book carries the name its own publisher prints it under, and the two shelves disagree - one writes Psalm and the other Psalms. A list kept here would have to pick one and would then be wrong about the other, and it would be wrong silently, in the words on screen whose whole job is to say truly where the passage came from.";
  "The chapter label is preferred over the book name where the book has one. It is the mark a publisher uses for exactly this - what to call a single chapter when it is shown on its own - so a psalter that calls the book Psalms still calls one of them a Psalm.";
  "This is kept apart from the translation's name because the two are shown at different sizes. The passage is what a person wants to read from across the room; the translation is what they look for when they want to know which words these are.";
  let file_path = await bible_usfm_version_book_path(version, book_code);
  let usfm = await file_read(file_path);
  let label = usfm_mark_text_or_null(usfm, "cl");
  let heading = usfm_mark_text_or_null(usfm, "h");
  let book_name = label || heading || book_code;
  let passage = book_name + " " + chapter_number;
  return passage;
}
