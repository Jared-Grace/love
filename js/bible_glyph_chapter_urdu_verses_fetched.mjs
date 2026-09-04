import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_language_verses } from "./bible_glyph_chapter_language_verses.mjs";
export async function bible_glyph_chapter_urdu_verses_fetched(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter. It names a stretch of text and nothing that runs.";
  arguments_assert(arguments, 1);
  ("One chapter's plain Urdu, verse by verse, sent for rather than held: the same answer ",
    fn_name("bible_glyph_chapter_urdu_verses"),
    " gives, reached without the page carrying it before anybody asks.");
  ("THIS IS THE ONE A PAGE MAY CALL AND THE HELD ONE IS NOT. The whole Urdu is a third of a megabyte in a single function - half as much again as the Tagalog that was already worth splitting off - and it is read only by a reader who opens the key. A page importing the held way in would charge every visitor that third of a megabyte to show a list of chapter names.");
  ("THE MODULE IS NAMED IN AN ADDRESS WRITTEN OUT AS TEXT, which is what a bundler needs in order to split the file off, and it is also what a rename walks straight past. Nothing goes red when that happens, because the address is only read when a reader opens the key.");
  ("A chapter nobody has written Urdu for answers with nothing rather than refusing, which is the same answer the held way in gives and for the same reason: a missing translation is the ordinary state of this work and must not stop a verse being read in the languages it does have.");
  let urdu_module = await import("./bible_glyph_chapters_urdu.mjs");
  let chapters = urdu_module.bible_glyph_chapters_urdu();
  let verses = bible_glyph_chapter_language_verses(chapters, chapter_code);
  return verses;
}
