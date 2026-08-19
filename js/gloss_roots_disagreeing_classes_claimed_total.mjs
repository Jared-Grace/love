import { arguments_assert } from "./arguments_assert.mjs";
import { gloss_roots_disagreeing_classes_grouped } from "./gloss_roots_disagreeing_classes_grouped.mjs";
import { gloss_roots_disagreeing_classes_count_read } from "./gloss_roots_disagreeing_classes_count_read.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_roots_disagreeing_classes_silent_total } from "./gloss_roots_disagreeing_classes_silent_total.mjs";
export function gloss_roots_disagreeing_classes_claimed_total(
  findings,
  offenders,
) {
  arguments_assert(arguments, 2);
  let r3 = gloss_roots_disagreeing_classes_grouped(findings, offenders);
  let r2 = gloss_roots_disagreeing_classes_count_read(r3);
  let count_read = property_get(r2, "count_read");
  let r4 = gloss_roots_disagreeing_classes_silent_total(r2, count_read);
  let silent_total = property_get(r4, "silent_total");
  let classes_total = property_get(r4, "classes_total");
  let apart_by_edits = property_get(r4, "apart_by_edits");
  let total = property_get(r4, "total");
  let claimed_total = property_get(r4, "claimed_total");
  let r = {
    r4,
    silent_total,
    classes_total,
    apart_by_edits,
    total,
    claimed_total,
  };
  return r;
}
