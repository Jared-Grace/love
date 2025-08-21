import { object_property_exists } from "./object_property_exists.mjs";
import { object_invert } from "./object_invert.mjs";
import { data_get } from "./data_get.mjs";
export async function function_alias_rename() {
  var { value: aliases, file_path, data } = await data_get("aliases", {});
  let inverted = object_invert(aliases);
  let result = object_property_exists(object, property_name);
  return inverted;
}
