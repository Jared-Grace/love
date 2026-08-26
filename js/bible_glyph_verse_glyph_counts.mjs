import { equal } from "./equal.mjs";
import { list_join } from "./list_join.mjs";
import { property_count_add } from "./property_count_add.mjs";
export function bible_glyph_verse_glyph_counts(verse) {
  "$plain verse";
  "the verse is one PARSED verse of an authored picture Bible chapter, already resolved from the shorthand. It is a stretch of text to count and nothing that runs.";
  "How MANY times ONE parsed verse draws each glyph, keyed by the glyph's name.";
  "THE CHAPTER-WIDE COUNT USED TO BE THE ONLY ONE THERE WAS, and a chapter is too coarse for the question that needs this. A chapter that draws a mark eight times where the table seats it eight times is settled at chapter granularity even if one verse drew it twice and the verse next door drew it none - and a verse that draws a mark and ALSO spells the same seated word out in English is exactly that shape. The defect lives inside a verse, so the count has to be taken inside a verse.";
  "A GROUP IS COUNTED UNDER ITS JOINED NAME, with a plus between the parts, which is the name the root table itself uses for it. Counting the human and the sheep separately would say a verse drew two marks where a reader saw one.";
  let counts = {};
  for (let word of verse.words) {
    let plain = equal(typeof word, "string");
    if (plain) {
      continue;
    }
    for (let part of word) {
      let text = equal(typeof part, "string");
      if (text) {
        continue;
      }
      let name = list_join(part, "+");
      property_count_add(counts, name, 1);
    }
  }
  return counts;
}
