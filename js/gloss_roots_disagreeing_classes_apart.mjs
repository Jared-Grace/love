import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_root_claimed_nearest } from "./gloss_root_claimed_nearest.mjs";
import { gloss_root_claimed_relation } from "./gloss_root_claimed_relation.mjs";
import { list_join_space } from "./list_join_space.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
import { list_size } from "./list_size.mjs";
import { property_equals } from "./property_equals.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map } from "./list_map.mjs";
import { list_tally } from "./list_tally.mjs";
export function gloss_roots_disagreeing_classes_apart(findings, offenders) {
  arguments_assert(arguments, 2);
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
  function apart_is(finding) {
    let standing_apart = property_equals(finding, "relation", "apart");
    return standing_apart;
  }
  let apart = list_filter(claiming, apart_is);
  let r = {
    total,
    claiming,
    claimed_total,
    edits_read,
    by_edits,
    by_relation,
    apart,
  };
  return r;
}
