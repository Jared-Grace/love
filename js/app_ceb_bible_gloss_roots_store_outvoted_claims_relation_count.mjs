import { arguments_assert } from "./arguments_assert.mjs";
import { each } from "./each.mjs";
import { property_get } from "./property_get.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { add } from "./add.mjs";
import { property_set } from "./property_set.mjs";
export function app_ceb_bible_gloss_roots_store_outvoted_claims_relation_count(
  keys,
  key_read,
  listed,
) {
  arguments_assert(arguments, 3);
  each(keys, key_read);
  function count_of(claim) {
    let count = property_get(claim, "count");
    return count;
  }
  list_sort_number_mapper_reverse(listed, count_of);
  let by_relation = {};
  function relation_count(claim) {
    let relation = property_get(claim, "relation");
    let held = property_get_or_null(by_relation, relation);
    let none = null_is(held);
    let before = none ? 0 : held;
    let value = add(before, 1);
    property_set(by_relation, relation, value);
  }
  let r = {
    by_relation,
    relation_count,
  };
  return r;
}
