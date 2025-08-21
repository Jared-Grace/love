import { not } from "./not.mjs";
import { object_property_exists } from "./object_property_exists.mjs";
import { object_invert } from "./object_invert.mjs";
import { data_get } from "./data_get.mjs";
export async function function_alias_rename(f_name) {
  var { value: aliases, file_path, data } = await data_get("aliases", {});
  let inverted = object_invert(aliases);
  let result = object_property_exists(inverted, f_name);
  let n = not(result);
  return inverted;
}
