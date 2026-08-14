import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
import { list_indexes } from "./list_indexes.mjs";
import { list_subsets_size } from "./list_subsets_size.mjs";
import { bible_chapters_ends_subset_sentence_gaps } from "./bible_chapters_ends_subset_sentence_gaps.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { list_max_or_null } from "./list_max_or_null.mjs";
import { bible_sentence_gaps_join } from "./bible_sentence_gaps_join.mjs";
import { bible_sentence_gaps_tally } from "./bible_sentence_gaps_tally.mjs";
import { property_set } from "./property_set.mjs";
import { list_size } from "./list_size.mjs";
import { list_tally } from "./list_tally.mjs";
export function bible_chapters_ends_subsets_sentence_gaps(chapters_ends, size) {
  "How far sentences carry on for a reader of that many bibles - asked of every possible such reader, not a chosen one.";
  "Every one of them rather than a few, because choosing which languages to pair is a guess about which ones disagree, and that guess is the thing being measured. Which bibles there are to choose from is read off the answers already in hand rather than named again here, so it cannot come to mean a different set than the one that was read.";
  "Two tallies come back and they answer different questions. The tally over all the places pooled says what a stop usually costs, and it is the one a wording should be sized against. The tally of each reader's furthest says what the worst moment of a whole sample of reading looks like, and it is the one a bound should be sized against - a reader meets their own worst case, not the average one.";
  arguments_assert(arguments, 2);
  let first = list_first(chapters_ends);
  let indexes = list_indexes(first);
  let subsets = list_subsets_size(indexes, size);
  function lambda(subset) {
    let joined = bible_chapters_ends_subset_sentence_gaps(
      chapters_ends,
      subset,
    );
    return joined;
  }
  let each_subset = list_map(subsets, lambda);
  function subset_furthest(joined) {
    let gaps = property_get(joined, "gaps");
    let furthest = list_max_or_null(gaps);
    return furthest;
  }
  let furthest_each = list_map(each_subset, subset_furthest);
  let joined = bible_sentence_gaps_join(each_subset);
  let measured = bible_sentence_gaps_tally(joined);
  property_set(measured, "size", size);
  let value = list_size(subsets);
  property_set(measured, "readers", value);
  let value2 = list_tally(furthest_each);
  property_set(measured, "furthest_tally", value2);
  let value3 = list_max_or_null(furthest_each);
  property_set(measured, "furthest_most", value3);
  return measured;
}
