import { list_reverse } from "./list_reverse.mjs";
import { list_sort_number_property } from "./list_sort_number_property.mjs";
import { list_map_property_exists } from "./list_map_property_exists.mjs";
import { list_sum } from "./list_sum.mjs";
import { object_values_map } from "./object_values_map.mjs";
import { list_to_lookup } from "./list_to_lookup.mjs";
import { performance_next } from "./performance_next.mjs";
import { object_to_list_names } from "./object_to_list_names.mjs";
export function performance_end(measurements) {
  performance_next(measurements, "end");
  let grouped = list_to_lookup(measurements, "category");
  function lambda(list, key) {
    let mapped = list_map_property_exists(list, "delta");
    let value = list_sum(mapped);
    return value;
  }
  let summary = object_values_map(grouped, lambda);
  let sorted = object_to_list_names(summary, "category", "delta");
  list_sort_number_property(sorted);
  list_reverse(sorted);
  let r = {
    measurements,
    grouped,
    summary,
    sorted,
  };
  return r;
}
