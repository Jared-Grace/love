import { subtract } from "./subtract.mjs";
import { divide } from "./divide.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_interlinear_chapters_words_cache } from "./bible_interlinear_chapters_words_cache.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { bible_chapter_testament_name } from "./bible_chapter_testament_name.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { bible_glyph_chapter_literal } from "./bible_glyph_chapter_literal.mjs";
export async function bible_glyph_testament_literal_coverage(
  testament_name,
  count,
) {
  arguments_assert(arguments, 2);
  ("$plain testament_name");
  ("$plain count");
  ("the testament names which half of the Bible to draw and which root table to draw it with, and the count is how many of the commonest gaps to hand back. Both are data and neither runs.");
  ("How much of one whole testament comes out as pictures when every chapter is drawn word for word from the original, and which leftover words stand in the way most often.");
  ("EVERY CHAPTER, WRITTEN OR NOT, because the question is how far the pictures-only Bible is from finished, and a written chapter is no nearer to that: it was written as English with pictures in it, which is the other shape.");
  ("A GAP IS COUNTED BY WHAT THE PAGE SHOWS, the gloss or the parsing code left standing in letters, so the commonest gap is the next seat worth buying. Two different roots glossed alike count together here, which overstates a seat's payoff a little and never hides a gap.");
  let chapters_words = await bible_interlinear_chapters_words_cache();
  let chapter_codes = object_property_names(chapters_words);
  function lambda(chapter_code) {
    let name = bible_chapter_testament_name(chapter_code);
    let match = equal(name, testament_name);
    return match;
  }
  let of_testament = list_filter(chapter_codes, lambda);
  let tokens = 0;
  let pictures = 0;
  let gaps = {};
  for (let chapter_code of of_testament) {
    let chapter = await bible_glyph_chapter_literal(
      chapter_code,
      testament_name,
    );
    for (let verse of chapter.verses) {
      for (let word of verse.words) {
        tokens = tokens + 1;
        if (word.startsWith("$")) {
          pictures = pictures + 1;
          continue;
        }
        let before = gaps[word] || 0;
        gaps[word] = before + 1;
      }
    }
  }
  function lambda2([text, times]) {
    let r2 = {
      text,
      times,
    };
    return r2;
  }
  let gap_rows = Object.entries(gaps).map(lambda2);
  function lambda3(a, b) {
    let difference = subtract(b.times, a.times);
    return difference;
  }
  gap_rows.sort(lambda3);
  let r = {
    testament_name,
    chapters: of_testament.length,
    tokens,
    pictures,
    share: divide(pictures, tokens),
    gap_kinds: gap_rows.length,
    gaps_common: gap_rows.slice(0, count),
  };
  return r;
}
