import { object_values } from "../../../love/public/src/object_values.mjs";
import { object_values_map } from "../../../love/public/src/object_values_map.mjs";
export function object_to_list(o) {
  const value_name = "value";
  const key_name = "key";
  function lambda3(value, key) {
    let v = {
      [value_name]: value,
      [key_name]: key,
    };
    return v;
  }
  let result = object_values_map(o, lambda3);
  let list = object_values(result);
  return list;
}
