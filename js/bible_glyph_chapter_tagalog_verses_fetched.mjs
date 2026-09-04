import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapter_language_verses } from "./bible_glyph_chapter_language_verses.mjs";
export async function bible_glyph_chapter_tagalog_verses_fetched(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter. It names a stretch of text and nothing that runs.";
  arguments_assert(arguments, 1);
  ("One chapter's plain Tagalog, verse by verse, sent for rather than held: the same answer ",
    fn_name("bible_glyph_chapter_tagalog_verses"),
    " gives, reached without the page carrying it before anybody asks.");
  ("THE WHOLE TAGALOG IS ONE FILE AND IS SENT FOR AS ONE, which is not how the picture chapters and their Rosetta bands are sent for, and the difference is where the text happens to live rather than a judgment about how much anybody should download. Those two were already written a chapter to a file, so an address per chapter cost nothing to write; this is a hundred and eleven thousand bytes in a single function, and cutting it into twenty five would be twenty five new files written to save a reader who opened the key about four fifths of one fetch.");
  ("IT IS STILL WORTH DOING AS IT STANDS, because the reader who never opens the key is the one being paid for here, and that reader is most of them. Measured on the twenty eighth of August this one function was a quarter of everything the picture Bible page could reach - more than four times the next largest - and every visitor was downloading all of it to look at a list of chapter names.");
  ("A chapter nobody has written Tagalog for answers with nothing rather than refusing, which is the same answer the held way in gives and for the same reason: a missing translation is the ordinary state of this work and must not stop a verse being read in the languages it does have.");
  let tagalog_module = await import("./bible_glyph_chapters_tagalog.mjs");
  let chapters = tagalog_module.bible_glyph_chapters_tagalog();
  let verses = bible_glyph_chapter_language_verses(chapters, chapter_code);
  return verses;
}
