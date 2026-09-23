import { list_flat } from "./list_flat.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_entries_count } from "./gloss_entries_count.mjs";
export function gloss_chapters_groups_words_ranked(chapter_codes, per_chapter) {
  "One gloss store's explanation groups turned inside out: each English word beside every different wording its entries have been given, the word with the most entries first and, inside it, the wording with the most entries first.";
  "$plain chapter_codes";
  "$plain per_chapter";
  "the two are read side by side, the same pair the wording ranking next door reads, so the two answers describe one pass over one folder.";
  "The ranking next door asks which sentence is written most often, and that is the question for choosing what to write. This asks which word is still being told several different things, and that is the question for choosing what to fix. They are not the same question: a word whose entries all say one sentence is finished however heavy that sentence is, and a word saying four different things is unfinished however light each of them is.";
  "It is also the only reading that finds a wording gone stale. When a settled wording is improved, nothing re-reads the entries already written with the old one, and the old one stops appearing in any list of things to license because no label was ever spelled that way. Here it simply shows up as a second wording under a word that has a settled one, which is what it is.";
  let groups = list_flat(per_chapter);
  function group_pairs(group) {
    let explain = property_get(group, "explain");
    let words = property_get(group, "words");
    function pair_write(word) {
      let pair = {
        word,
        explain,
      };
      return pair;
    }
    let pairs = list_map(words, pair_write);
    return pairs;
  }
  let nested = list_map(groups, group_pairs);
  let pairs_all = list_flat(nested);
  let by_word = list_group_by_property(pairs_all, "word");
  function explain_gathering_read(gathering) {
    let explain = property_get(gathering, "key");
    let items = property_get(gathering, "items");
    let r = {
      explain,
      entries: list_size(items),
    };
    return r;
  }
  function word_read(gathering) {
    let word = property_get(gathering, "key");
    let items = property_get(gathering, "items");
    let by_explain = list_group_by_property(items, "explain");
    let said = list_map(by_explain, explain_gathering_read);
    let explains = list_sort_number_mapper_reverse(said, gloss_entries_count);
    let r = {
      word,
      entries: list_size(items),
      shapes: list_size(explains),
      explains,
    };
    return r;
  }
  let merged = list_map(by_word, word_read);
  let ranked = list_sort_number_mapper_reverse(merged, gloss_entries_count);
  let r2 = {
    chapters: list_size(chapter_codes),
    distinct: list_size(ranked),
    ranked,
  };
  return r2;
}
