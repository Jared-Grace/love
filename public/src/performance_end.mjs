import { object_property_get_curry_right } from "../../../love/public/src/object_property_get_curry_right.mjs";
import { list_sort_number_mapper } from "../../../love/public/src/list_sort_number_mapper.mjs";
import { object_to_list } from "../../../love/public/src/object_to_list.mjs";
import { list_map_property_exists } from "../../../love/public/src/list_map_property_exists.mjs";
import { list_sum } from "../../../love/public/src/list_sum.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_to_lookup } from "../../../love/public/src/list_to_lookup.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
export function performance_end(p) {
  performance_next(p, "end");
  let categories = list_to_lookup(p, "category");
  function lambda(list, key) {
    let mapped = list_map_property_exists(list, "delta");
    let value = list_sum(mapped);
    return value;
  }
  let summary = object_values_map(categories, lambda);
  log({
    categories,
    summary,
  });
  return;
  let list = object_to_list(summary, "category", "delta");
  function lambda2(item) {}
  let f = object_property_get_curry_right("delta");
  list_sort_number_mapper(list2, f);
}
