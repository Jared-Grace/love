import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_size } from "./list_size.mjs";
import { property_equals } from "./property_equals.mjs";
import { property_get } from "./property_get.mjs";
import { list_take } from "./list_take.mjs";
export function gloss_roots_disagreeing_classes_shown(
  r2,
  relation_wanted,
  sample_size,
) {
  arguments_assert(arguments, 3);
  let classes_total = property_get(r2, "classes_total");
  let silent_total = property_get(r2, "silent_total");
  let r4 = property_get(r2, "r4");
  let by_edits = property_get(r4, "by_edits");
  let by_relation = property_get(r4, "by_relation");
  let classes = property_get(r4, "classes");
  "One relation's classes are shown on their own where one is named, and all of them where the word is all. The counts beside them stay whole either way - they describe the whole set, and narrowing them to match the sample would leave a reader unable to see what share they were looking at.";
  "$plain relation_wanted";
  "the word names a reading of a pair of roots, like shallower, or all. It names nothing that runs.";
  let everything = equal(relation_wanted, "all");
  function wanted_is(one_class) {
    let matching = property_equals(one_class, "relation", relation_wanted);
    return matching;
  }
  let selected = everything ? classes : list_filter(classes, wanted_is);
  let selected_total = list_size(selected);
  let count = Number(sample_size);
  let shown = list_take(selected, count);
  let r = {
    classes_total,
    selected_total,
    silent_total,
    by_edits,
    by_relation,
    shown,
  };
  return r;
}
