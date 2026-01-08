import { list_reverse } from "../../../love/public/src/list_reverse.mjs";
import { list_sort_number_property } from "../../../love/public/src/list_sort_number_property.mjs";
import { list_map_property_exists } from "../../../love/public/src/list_map_property_exists.mjs";
import { list_sum } from "../../../love/public/src/list_sum.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_to_lookup } from "../../../love/public/src/list_to_lookup.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
import { object_to_list_names } from "./object_to_list_names.mjs";
export function performance_end(p) {
  performance_next(p, "end");
  let grouped = list_to_lookup(p, "category");
  function lambda(list, key) {
    let mapped = list_map_property_exists(list, "delta");
    let value = list_sum(mapped);
    return value;
  }
  let summary = object_values_map(grouped, lambda);
  let sorted = object_to_list_names(summary, "category", "delta");
  log({
    sorted,
  });
  list_sort_number_property(sorted);
  list_reverse(sorted);
  log({
    grouped,
    summary,
    sorted,
  });
  return;
}
