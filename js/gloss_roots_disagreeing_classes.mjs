import { gloss_roots_disagreeing_classes_grouped } from "./gloss_roots_disagreeing_classes_grouped.mjs";
import { list_get } from "./list_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_spread_take } from "./list_spread_take.mjs";
import { list_take } from "./list_take.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function gloss_roots_disagreeing_classes(offenders, sample_size) {
  "Findings that an explanation named the wrong root, gathered by which root it named instead: how many findings stand at each distance from the dictionary, and the commonest wrong roots with the words they were claimed for.";
  "A count of findings does not say how much is wrong, because one word repeated is one fault and reads as hundreds. kahangtoran alone accounts for ninety-nine of them, every one explained from hangtud where the dictionary writes hangtod - a single disagreement about how to spell a vowel, met once per verse. Gathering the findings by the pair of words that disagree turns the count of sightings into a count of faults, which is the number a reader is actually asking for.";
  "The distance in edits is what separates a spelling from a mistake, and it is reported at every distance rather than cut at a line, because where the line belongs is the reader's judgment and a report that has already made it cannot be argued with.";
  "How the two roots stand to one another is counted beside the distance, and it is the reading that matters more. Most of these findings are not a wrong origin at all: the explanation named a word the dictionary's root is built from, or one built out of it, which is a disagreement about how far back to stop rather than a mistake about where the word came from. A count of edits cannot tell that apart from an invention two letters off, and a reader deciding whether to repair or to regenerate has to know which of the two they are looking at.";
  "The distances are counted again over the findings standing apart on their own, because that is the only place the question is open. Every other answer has already named the disagreement - one word is the other spelled differently, or sits inside it, or shares a run of it too long to be chance - and a distance adds nothing to any of those. Where none of them holds, one edit is very likely two sources spelling a vowel differently and five is an origin somebody made up, and only these findings need the line drawn.";
  "How many classes to show is said as text as readily as as a number, because this is reached for from the command line, where every argument arrives as text and a count read straight would take none of them.";
  "Only findings that name a root are gathered. An explanation saying nothing about where its word comes from has no claim to be grouped by, so those are counted apart and left to the weaker test that found them.";
  let findings = [];
  let r3 = gloss_roots_disagreeing_classes_grouped(findings, offenders);
  let grouped = property_get(r3, "grouped");
  let apart_by_edits = property_get(r3, "apart_by_edits");
  let total = property_get(r3, "total");
  let claimed_total = property_get(r3, "claimed_total");
  let by_edits = property_get(r3, "by_edits");
  let by_relation = property_get(r3, "by_relation");
  function group_read(group) {
    let items = property_get(group, "items");
    let first = list_get(items, 0);
    let words = list_map_property_unique(items, "word");
    let list = list_map_property_unique(items, "chapter_code");
    let r2 = {
      root: property_get(first, "root"),
      claimed: property_get(first, "claimed_nearest"),
      edits: property_get(first, "edits"),
      relation: property_get(first, "relation"),
      count: list_size(items),
      words: list_spread_take(words, 5),
      chapters: list_spread_take(list, 3),
    };
    return r2;
  }
  let classes = list_map(grouped, group_read);
  function count_read(one_class) {
    let count = property_get(one_class, "count");
    return count;
  }
  list_sort_number_mapper_reverse(classes, count_read);
  let classes_total = list_size(classes);
  let silent_total = subtract(total, claimed_total);
  let count2 = Number(sample_size);
  let shown = list_take(classes, count2);
  let r = {
    total,
    claimed_total,
    silent_total,
    classes_total,
    by_relation,
    by_edits,
    apart_by_edits,
    classes: shown,
  };
  return r;
}
