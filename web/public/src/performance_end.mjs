import { list_reduce } from "../../../love/public/src/list_reduce.mjs";
import { add } from "../../../love/public/src/add.mjs";
import { list_map_property } from "../../../love/public/src/list_map_property.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { list_to_lookup } from "../../../love/public/src/list_to_lookup.mjs";
import { performance_next } from "../../../love/public/src/performance_next.mjs";
export function performance_end(p) {
  performance_next(p, "end");
  let categories = list_to_lookup(p, "category");
  log({
    lookup: categories,
  });
  return;
  function lambda(list, key) {
    let mapped = list_map_property(list, "delta");
    let inital = 0;
    let reducer = add;
    let value = list_reduce(mapped, reducer, inital);
    return value;
  }
  let result = object_values_map(categories, lambda);
}
