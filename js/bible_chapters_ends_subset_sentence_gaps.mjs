import { arguments_assert } from "./arguments_assert.mjs";
import { list_indices_to_items } from "./list_indices_to_items.mjs";
import { bible_ends_languages_combine } from "./bible_ends_languages_combine.mjs";
import { bible_ends_sentence_gaps } from "./bible_ends_sentence_gaps.mjs";
import { list_map } from "./list_map.mjs";
import { bible_sentence_gaps_join } from "./bible_sentence_gaps_join.mjs";
export function bible_chapters_ends_subset_sentence_gaps(
  chapters_ends,
  indexes,
) {
  "How far sentences carried on for one particular reader - the one who reads the bibles sitting at these places and no others.";
  "It is handed places rather than names because the same places mean the same bibles in every chapter, the answers having been read in one order and kept in it. Nothing is fetched here; this is the same already-read answers asked a narrower question.";
  arguments_assert(arguments, 2);
  function lambda(ends_each) {
    let chosen = list_indices_to_items(ends_each, indexes);
    let together = bible_ends_languages_combine(chosen);
    let measured = bible_ends_sentence_gaps(together);
    return measured;
  }
  let each_chapter = list_map(chapters_ends, lambda);
  let joined = bible_sentence_gaps_join(each_chapter);
  return joined;
}
