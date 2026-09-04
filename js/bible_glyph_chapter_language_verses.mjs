import { arguments_assert } from "./arguments_assert.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
export function bible_glyph_chapter_language_verses(chapters, chapter_code) {
  "$plain chapters";
  "$plain chapter_code";
  "the chapters are one language's whole written-out text and the code names one chapter in it. Both are data to read and neither runs.";
  arguments_assert(arguments, 2);
  ("One chapter's plain text in whichever language was handed over, verse by verse, or no verses at all where nobody has written that chapter out.");
  ("AN UNKNOWN CHAPTER ANSWERS WITH NOTHING RATHER THAN REFUSING, which is the opposite of what the Rosetta bands next door do, and the difference is what the caller can do about it. A missing band there means a command has not been run and the page would be wrong to carry on pretending; a missing chapter here means this translation has not reached that chapter, which is the ordinary state of a translation and must not stop the verse being read in the languages it does have.");
  ("THE LANGUAGE IS HANDED OVER RATHER THAN NAMED HERE, and that is the whole reason this exists apart from its callers. Each language's text lives in a function of its own, and the caller that has one has already chosen which - either by importing it or by sending for it. Naming the language here as well would mean a second place that has to agree with the first, and a lookup written here would hold every language at once, which is exactly what the sending-for callers exist to avoid.");
  let found = list_find_property_or_null(
    chapters,
    "chapter_code",
    chapter_code,
  );
  let missing = null_is(found);
  if (missing) {
    let r = [];
    return r;
  }
  let r2 = found.verses;
  return r2;
}
