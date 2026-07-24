import { object_values_map_list } from "./object_values_map_list.mjs";
export function object_to_list_names(o, key_name, value_name) {
  function lambda(value, key) {
    let v = {
      [value_name]: value,
      [key_name]: key,
    };
    return v;
  }
  let list = object_values_map_list(o, lambda);
  return list;
}
