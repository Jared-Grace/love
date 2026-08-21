import { bible_glyph_chapters_tagalog } from "./bible_glyph_chapters_tagalog.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function bible_glyph_chapter_tagalog_verses(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter. It names a stretch of text and nothing that runs.";
  "One chapter's plain Tagalog, verse by verse, or no verses at all where nobody has written that chapter out.";
  "AN UNKNOWN CHAPTER ANSWERS WITH NOTHING RATHER THAN REFUSING, which is the opposite of what the Rosetta bands next door do, and the difference is what the caller can do about it. A missing band there means a command has not been run and the page would be wrong to carry on pretending; a missing Tagalog here means this chapter has no Tagalog yet, which is the ordinary state of a translation and must not stop the verse being read in the languages it does have.";
  "It is a plain read and nothing else. The text was fetched once, at authoring time, and written into a function of its own; this asks that function and hands over what it says.";
  let chapters = bible_glyph_chapters_tagalog();
  let found = list_find_property_or_null(chapters, "chapter_code", chapter_code);
  let missing = null_is(found);
  if (missing) {
    return [];
  }
  return found.verses;
}
