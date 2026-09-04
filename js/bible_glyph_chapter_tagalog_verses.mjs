import { fn_name } from "./fn_name.mjs";
import { bible_glyph_chapters_tagalog } from "./bible_glyph_chapters_tagalog.mjs";
import { bible_glyph_chapter_language_verses } from "./bible_glyph_chapter_language_verses.mjs";
export function bible_glyph_chapter_tagalog_verses(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter. It names a stretch of text and nothing that runs.";
  "One chapter's plain Tagalog, verse by verse, or no verses at all where nobody has written that chapter out.";
  ("What an unknown chapter answers, and why it answers at all rather than refusing, is written where the looking-up now is: ",
    fn_name("bible_glyph_chapter_language_verses"),
    ".");
  ("It is a plain read and nothing else. The text was fetched once, at authoring time, and written into a function of its own; this asks that function and hands over what it says.");
  let chapters = bible_glyph_chapters_tagalog();
  let r = bible_glyph_chapter_language_verses(chapters, chapter_code);
  return r;
}
