import { gloss_findings_edits_tally } from "./gloss_findings_edits_tally.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_roots_disagreeing_classes_apart } from "./gloss_roots_disagreeing_classes_apart.mjs";
import { property_get } from "./property_get.mjs";
import { list_group_by_property } from "./list_group_by_property.mjs";
export function gloss_roots_disagreeing_classes_grouped(findings, offenders) {
  arguments_assert(arguments, 2);
  let r3 = gloss_roots_disagreeing_classes_apart(findings, offenders);
  let apart = property_get(r3, "apart");
  let by_relation = property_get(r3, "by_relation");
  let by_edits = property_get(r3, "by_edits");
  let claimed_total = property_get(r3, "claimed_total");
  let claiming = property_get(r3, "claiming");
  let total = property_get(r3, "total");
  let apart_by_edits = gloss_findings_edits_tally(apart);
  let grouped = list_group_by_property(claiming, "pair");
  let r = {
    by_relation,
    by_edits,
    claimed_total,
    total,
    apart_by_edits,
    grouped,
  };
  return r;
}
