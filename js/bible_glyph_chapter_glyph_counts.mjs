import { bible_glyph_verse_glyph_counts } from "./bible_glyph_verse_glyph_counts.mjs";
import { property_get } from "./property_get.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_glyph_chapter } from "./bible_glyph_chapter.mjs";
import { property_count_add } from "./property_count_add.mjs";
export function bible_glyph_chapter_glyph_counts(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter, spelled as the chapter codes spell it. It names a chapter to look up and nothing that runs.";
  "How MANY times one authored picture Bible chapter draws each glyph, keyed by the glyph's name.";
  "The sibling next door answers which glyphs a chapter draws and says in its own prose that it drops the count on purpose, because a caller asking about VOCABULARY cannot use one. This is the other question: a caller comparing what an author wrote against what the root table would have drawn needs the count, because drawing a mark once where the table seats it and drawing it four times where the table seats it once are different chapters and the same vocabulary.";
  "A GROUP IS COUNTED UNDER ITS JOINED NAME, with a plus between the parts, which is the name the root table itself uses for it. Counting the human and the sheep separately would say a chapter drew two marks where a reader saw one, and would also collide the shepherd with any verse that happened to draw a person and a sheep side by side - which is exactly the confusion the reserved-mark work exists to prevent.";
  "It reads the parsed chapter and never the shorthand, for the reason the parser gives: the shorthand is resolved in one place, and a second reader of it would be a second parser written by somebody who had not read the first.";
  let chapter = bible_glyph_chapter(chapter_code);
  let counts = {};
  for (let verse of chapter.verses) {
    let verse_counts = bible_glyph_verse_glyph_counts(verse);
    for (let glyph of object_property_names(verse_counts)) {
      let drew = property_get(verse_counts, glyph);
      property_count_add(counts, glyph, drew);
    }
  }
  return counts;
}
