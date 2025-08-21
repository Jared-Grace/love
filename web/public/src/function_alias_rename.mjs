import { object_property_get } from "./object_property_get.mjs";
import { object_property_exists_not } from "./object_property_exists_not.mjs";
import { object_invert } from "./object_invert.mjs";
import { data_get } from "./data_get.mjs";
export async function function_alias_rename(before, after) {
  var { value: aliases, file_path, data } = await data_get("aliases", {});
  let inverted = object_invert(aliases);
  let n = object_property_exists_not(inverted, before);
  if (n) {
    return;
  }
  let value2 = object_property_get(object, property_name);
  return n;
}
