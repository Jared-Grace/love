import { arguments_assert } from "./arguments_assert.mjs";
import { bible_glyph_chapters_urdu } from "./bible_glyph_chapters_urdu.mjs";
import { bible_glyph_chapter_language_verses } from "./bible_glyph_chapter_language_verses.mjs";
export function bible_glyph_chapter_urdu_verses(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter. It names a stretch of text and nothing that runs.";
  arguments_assert(arguments, 1);
  ("One chapter's plain Urdu, verse by verse, or no verses at all where nobody has written that chapter out.");
  ("It is a plain read and nothing else. The text was fetched once, at authoring time, repaired for the words its publisher had welded together, and written into a function of its own; this asks that function and hands over what it says.");
  ("THE URDU IS THE ONE BAND WHOSE READERS THIS WHOLE BIBLE WAS CHOSEN FOR, and until this existed the text was written, credited and gated with nothing able to read it. That is the state a generated file is hardest to notice in: it looks finished from every direction except the page.");
  ("IT DOES NOT PUT THE BAND ON THE PAGE, and must not. Where an Urdu band appears, and whether it appears beside the Tagalog or in place of it, is a decision about what a reader is shown; this only makes the text reachable so that decision can be looked at rather than guessed. The translation also re-transliterates names away from the forms Pakistani Christians use, and a native reader is owed a sample chapter before anybody is shown one.");
  let chapters = bible_glyph_chapters_urdu();
  let r = bible_glyph_chapter_language_verses(chapters, chapter_code);
  return r;
}
