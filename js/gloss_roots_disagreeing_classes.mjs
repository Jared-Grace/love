import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { property_equals } from "./property_equals.mjs";
import { each } from "./each.mjs";
import { gloss_root_claimed_nearest } from "./gloss_root_claimed_nearest.mjs";
import { list_add } from "./list_add.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_get } from "./list_get.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_property_unique } from "./list_map_property_unique.mjs";
import { list_size } from "./list_size.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_spread_take } from "./list_spread_take.mjs";
import { list_take } from "./list_take.mjs";
import { list_tally } from "./list_tally.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
export function gloss_roots_disagreeing_classes(offenders, sample_size) {
  "Findings that an explanation named the wrong root, gathered by which root it named instead: how many findings stand at each distance from the dictionary, and the commonest wrong roots with the words they were claimed for.";
  "A count of findings does not say how much is wrong, because one word repeated is one fault and reads as hundreds. kahangtoran alone accounts for ninety-nine of them, every one explained from hangtud where the dictionary writes hangtod - a single disagreement about how to spell a vowel, met once per verse. Gathering the findings by the pair of words that disagree turns the count of sightings into a count of faults, which is the number a reader is actually asking for.";
  "The distance in edits is what separates a spelling from a mistake, and it is reported at every distance rather than cut at a line, because where the line belongs is the reader's judgment and a report that has already made it cannot be argued with.";
  "How the two roots stand to one another is counted beside the distance, and it is the reading that matters more. Most of these findings are not a wrong origin at all: the explanation named a word the dictionary's root is built from, or one built out of it, which is a disagreement about how far back to stop rather than a mistake about where the word came from. A count of edits cannot tell that apart from an invention two letters off, and a reader deciding whether to repair or to regenerate has to know which of the two they are looking at.";
  "How many classes to show is said as text as readily as as a number, because this is reached for from the command line, where every argument arrives as text and a count read straight would take none of them.";
  "Only findings that name a root are gathered. An explanation saying nothing about where its word comes from has no claim to be grouped by, so those are counted apart and left to the weaker test that found them.";
  let findings = [];
  function chapter_read(chapter) {
    let chapter_code = property_get(chapter, "chapter_code");
    let found = property_get(chapter, "found");
    function finding_read(finding) {
      let root = property_get(finding, "root");
      let claimed = property_get(finding, "claimed");
      let nearest = gloss_root_claimed_nearest(root, claimed);
      let claimed_nearest = property_get(nearest, "nearest");
      let relation = gloss_root_claimed_relation(root, claimed_nearest);
      let r1 = {
        chapter_code,
        word: property_get(finding, "word"),
        root,
        claimed_nearest,
        edits: property_get(nearest, "edits"),
        relation,
        kind: property_get(finding, "kind"),
        pair: list_join_space([root, claimed_nearest]),
      };
      list_add(findings, r1);
    }
    each(found, finding_read);
  }
  each(offenders, chapter_read);
  let total = list_size(findings);
  function claimed_is(finding) {
    let names_a_root = property_equals(finding, "kind", "claimed");
    return names_a_root;
  }
  let claiming = list_filter(findings, claimed_is);
  let claimed_total = list_size(claiming);
  function edits_read(finding) {
    let edits = property_get(finding, "edits");
    return edits;
  }
  let list = list_map(claiming, edits_read);
  let by_edits = list_tally(list);
  function relation_read(finding) {
    let relation = property_get(finding, "relation");
    return relation;
  }
  let relations = list_map(claiming, relation_read);
  let by_relation = list_tally(relations);
  let grouped = list_group_by_property(claiming, "pair");
  function group_read(group) {
    let items = property_get(group, "items");
    let first = list_get(items, 0);
    let words = list_map_property_unique(items, "word");
    let list2 = list_map_property_unique(items, "chapter_code");
    let r2 = {
      root: property_get(first, "root"),
      claimed: property_get(first, "claimed_nearest"),
      edits: property_get(first, "edits"),
      relation: property_get(first, "relation"),
      count: list_size(items),
      words: list_spread_take(words, 5),
      chapters: list_spread_take(list2, 3),
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
    classes: shown,
  };
  return r;
}
