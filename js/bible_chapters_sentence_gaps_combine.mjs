import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
import { list_map_index } from "./list_map_index.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_size } from "./list_size.mjs";
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
  let gaps_each = list_map_property(each_chapter, "gaps");
  let gaps = lists_combine(gaps_each);
  let unread_each = list_map_property(each_chapter, "unread");
  let unread = list_sum(unread_each);
  let unfinished_each = list_map_property(each_chapter, "unfinished");
  let unfinished = list_sum(unfinished_each);
  let tally = list_tally(gaps);
  let most = list_max_or_null(gaps);
  let counted = list_size(gaps);
  let measured = {
    chapters,
    counted,
    tally,
    most,
    unread,
    unfinished,
  };
  return measured;
}
