import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { gloss_root_unwalked_cause } from "./gloss_root_unwalked_cause.mjs";
import { property_set } from "./property_set.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_add } from "./list_add.mjs";
import { add } from "./add.mjs";
import { each } from "./each.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_size } from "./list_size.mjs";
import { value_or_if_null } from "./value_or_if_null.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { gloss_class_count } from "./gloss_class_count.mjs";
export function app_ceb_bible_gloss_roots_silence_causes_reachable_now(
  known,
  folded_index,
  by_cause,
  silent,
) {
  arguments_assert(arguments, 4);
  let sightings = {};
  function cause_add(one_class) {
    let root = property_get(one_class, "root");
    let cause = gloss_root_unwalked_cause(known, folded_index, root);
    property_set(one_class, "cause", cause);
    let held = property_get_or_null(by_cause, cause);
    let first = null_is(held);
    let rows = first ? [] : held;
    list_add(rows, one_class);
    property_set(by_cause, cause, rows);
    let count = property_get(one_class, "count");
    let so_far = first ? 0 : property_get(sightings, cause);
    let total = add(so_far, count);
    property_set(sightings, cause, total);
  }
  each(silent, cause_add);
  let causes = object_property_names(by_cause);
  let classes_counted = {};
  function cause_size_put(cause) {
    let rows = property_get(by_cause, cause);
    let size = list_size(rows);
    property_set(classes_counted, cause, size);
  }
  each(causes, cause_size_put);
  let held_otherwise = property_get_or_null(by_cause, "spelled_otherwise");
  let reachable = value_or_if_null(held_otherwise, []);
  let reachable_now = list_sort_number_mapper_reverse(
    reachable,
    gloss_class_count,
  );
  let r = {
    sightings,
    classes_counted,
    reachable_now,
  };
  return r;
}
