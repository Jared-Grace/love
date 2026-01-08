import { object_to_list_names } from "../../../love/public/src/object_to_list_names.mjs";
export function object_to_list(o) {
  const value_name = "value";
  const key_name = "key";
  let list = object_to_list_names(o, value_name, key_name);
  return list;
}
