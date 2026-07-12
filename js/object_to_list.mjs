import { arguments_assert } from "./arguments_assert.mjs";
import { object_to_list_names } from "./object_to_list_names.mjs";
export function object_to_list(o) {
  arguments_assert(arguments, 1);
  let key_name = "key";
  let value_name = "value";
  let list = object_to_list_names(o, key_name, value_name);
  return list;
}
