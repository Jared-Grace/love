import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_pick_try_single_value } from "../../../love/public/src/object_pick_try_single_value.mjs";
export function object_pick_try_single_value_multiple(list, properties) {
  function lambda(item) {
    let value = object_pick_try_single_value(item, properties);
    return value;
  }
  let mapped = list_map(list, lambda);
  return mapped;
}
