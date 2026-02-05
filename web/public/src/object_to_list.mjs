import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { object_to_list_names } from "../../../love/public/src/object_to_list_names.mjs";
export function object_to_list(o) {
  assert_arguments(arguments, 1);
  const key_name = "key";
  const value_name = "value";
  let list = object_to_list_names(o, key_name, value_name);
  return list;
}
