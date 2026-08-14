import { bible_sentence_gaps_join } from "./bible_sentence_gaps_join.mjs";
import { bible_sentence_gaps_tally } from "./bible_sentence_gaps_tally.mjs";
import { property_set } from "./property_set.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
import { list_map_index } from "./list_map_index.mjs";
export function bible_chapters_sentence_gaps_combine(
  chapter_codes,
  each_chapter,
) {
  "Puts the per-chapter countings of how far a sentence runs past a cut together into one tally, keeping each chapter's furthest beside it.";
  "Each chapter keeps its own furthest alongside the combined tally, because a combined answer alone cannot say WHERE the long sentences are - and that is the half of the answer worth having. A sample is only as good as its spread, so a furthest that turns out to sit in the one chapter of poetry, or in every letter at once, says something the total cannot.";
  "The chapter a counting belongs to is found by where it sits, which is sound because the countings were asked for in the order the codes were given and come back in that order.";
  arguments_assert(arguments, 2);
  function lambda(chapter_measured, at) {
    let chapter_code = property_get(chapter_codes, at);
    let chapter_gaps = property_get(chapter_measured, "gaps");
    let furthest = list_max_or_null(chapter_gaps);
    let named = {
      chapter_code,
      furthest,
    };
    return named;
  }
  let chapters = list_map_index(each_chapter, lambda);
  let joined = bible_sentence_gaps_join(each_chapter);
  let measured = bible_sentence_gaps_tally(joined);
  property_set(measured, "chapters", chapters);
  return measured;
}
