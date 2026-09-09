import { gloss_entries_count } from "./gloss_entries_count.mjs";
import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { gloss_chapter_explains_repeated_groups } from "./gloss_chapter_explains_repeated_groups.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_flat } from "./list_flat.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_size } from "./list_size.mjs";
import { list_take } from "./list_take.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_map_sum } from "./list_map_sum.mjs";
export async function gloss_chapters_explains_repeated_ranked(fn) {
  "Every wording one gloss store hands to more than one word in a chapter, ranked by how many words are on it across the whole store, each carried beside how many chapters it turns up in and a few of the words wearing it.";
  "This is the reading that says whether a store's repetition is one shape or thousands. A share on its own cannot tell a store where forty sentences cover half the words from a store where the same fraction is spread over forty thousand, and the two want opposite work - the first is an afternoon's rewriting, the second is a different way of writing glosses.";
  "Ranked by words rather than by chapters, because the work saved by rewriting one wording is the words it frees, and a wording used twice in three hundred chapters frees fewer than one used forty times in eight.";
  "Only a few of the words travel out beside each wording. The whole list is what the store already holds and can be asked for a chapter at a time; what a reader wants here is enough to see at once whether the wording was lazy or whether the words really do share a fact.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_read(chapter_code) {
    let groups = await gloss_chapter_explains_repeated_groups(chapter_code, fn);
    return groups;
  }
  let per_chapter = await list_map_async(chapter_codes, chapter_read);
  let groups = list_flat(per_chapter);
  let by_explain = list_group_by_property(groups, "explain");
  function group_words_read(group) {
    let words = property_get(group, "words");
    return words;
  }
  function explain_read(gathering) {
    let explain = property_get(gathering, "key");
    let items = property_get(gathering, "items");
    let nested = list_map(items, group_words_read);
    let words = list_flat(nested);
    let distinct = list_unique(words);
    let r = {
      explain,
      entries: list_size(words),
      chapters: list_size(items),
      words: list_size(distinct),
      shown: list_take(distinct, 8),
    };
    return r;
  }
  let merged = list_map(by_explain, explain_read);
  let ranked = list_sort_number_mapper_reverse(merged, gloss_entries_count);
  let r2 = {
    chapters: list_size(chapter_codes),
    distinct: list_size(ranked),
    covered: list_map_sum(ranked, gloss_entries_count),
    ranked,
  };
  return r2;
}
