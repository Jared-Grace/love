import { object_values } from "../../../love/public/src/object_values.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
export function object_to_list(o) {
  function lambda3(value, key) {
    let v = {
      value,
      key,
    };
    return v;
  }
  let result2 = object_values_map(o, lambda3);
  let list = object_values(result2);
  return list;
}
