import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_chapter_sentence_gaps } from "./bible_folder_chapter_sentence_gaps.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { list_sum } from "./list_sum.mjs";
import { list_tally } from "./list_tally.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
import { list_size } from "./list_size.mjs";
export async function bible_folder_chapters_sentence_gaps(
  bible_folder,
  chapter_codes,
  count,
) {
  "Reads several chapters of one bible and tallies how far a passage is carried on past where the counting stopped.";
  "The tally is what the claim has to be checked against. A bound says how far the carrying COULD go and the wording a reader is shown says how far it usually does, and those two come apart badly - a bound of twenty five verses is compatible with almost every sentence finishing inside one.";
  "Each chapter is measured on its own and only the answers are put together, so no sentence is ever read as running from the end of one chapter into the start of the next.";
  arguments_assert(arguments, 3);
  ("Each chapter keeps its own furthest alongside the combined tally, because a combined answer alone cannot say WHERE the long sentences are - and that is the half of the answer worth having. A sample is only as good as its spread, so a furthest that turns out to sit in the one chapter of poetry, or in every letter at once, says something the total cannot.");
  async function lambda(chapter_code) {
    let chapter_measured = await bible_folder_chapter_sentence_gaps(
      bible_folder,
      chapter_code,
      count,
    );
    let chapter_gaps = property_get(chapter_measured, "gaps");
    let furthest = list_max_or_null(chapter_gaps);
    property_set(chapter_measured, "chapter_code", chapter_code);
    property_set(chapter_measured, "furthest", furthest);
    return chapter_measured;
  }
  let each_chapter = await list_map_unordered_async(chapter_codes, lambda);
  function lambda2(chapter_measured2) {
    let chapter_code2 = property_get(chapter_measured2, "chapter_code");
    let furthest2 = property_get(chapter_measured2, "furthest");
    let named = { chapter_code: chapter_code2, furthest: furthest2 };
    return named;
  }
  let chapters = list_map(each_chapter, lambda2);
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
    bible_folder,
    chapters,
    counted,
    tally,
    most,
    unread,
    unfinished,
  };
  return measured;
}
