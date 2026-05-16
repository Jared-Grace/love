import { list_map } from "../../../love/public/src/list_map.mjs";
import { object_pick_try_single_value } from "../../../love/public/src/object_pick_try_single_value.mjs";
export function object_pick_try_single_value_multiple(
  contacts,
  name_properties,
) {
  function lambda(item) {
    let value = object_pick_try_single_value(item, name_properties);
    return value;
  }
  let mapped = list_map(contacts, lambda);
  return mapped;
}
