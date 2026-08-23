import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { bible_glyph_chapter_draft_words } from "./bible_glyph_chapter_draft_words.mjs";
import { property_count_add } from "./property_count_add.mjs";
import { equal } from "./equal.mjs";
export async function bible_glyph_chapter_draft_glyph_counts(chapter_code) {
  "$plain chapter_code";
  "the code names one chapter, spelled as the chapter codes spell it. It names a stretch of text to read and nothing that runs.";
  "How MANY times the root table would draw each glyph in one chapter, counted straight off the interlinear, which is the ceiling an author is allowed to draw up to.";
  "IT IS THE OTHER HALF OF A COMPARISON AND NOT AN OPINION ABOUT THE CHAPTER. The sibling counting an authored chapter says what a person wrote; this says what the numbers underneath that chapter seat. Neither is interesting alone - a chapter is written in readable English and the interlinear is not English at all - and the one thing they answer together is whether a mark was drawn on a word the table never seated it on.";
  "It looks the testament up from the chapter code rather than being handed one, because a caller who has to supply the testament can supply the wrong one, and the wrong table answers with fewer seatings and so makes an honest chapter look like it over-drew.";
  "A GROUP ARRIVES ALREADY JOINED, because the drafter reports the seated name as the table spells it and the table spells a group with a plus. That is the same key the authored side counts under, which is what lets the two be compared without either of them knowing how the other was built.";
  let testament_name = bible_chapter_testament_name(chapter_code);
  let rows = await bible_glyph_chapter_draft_words(
    chapter_code,
    testament_name,
  );
  let counts = {};
  for (let row of rows) {
    for (let word of row.words) {
      let undrawn = equal(word.glyph, "");
      if (undrawn) {
        continue;
      }
      property_count_add(counts, word.glyph, 1);
    }
  }
  return counts;
}
