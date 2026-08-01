import { property_path_get_2 } from "./property_path_get_2.mjs";
import { data_get } from "./data_get.mjs";
export async function data_property_get_generic(d_path, property_name) {
  let v = await data_get(property_name, null, d_path);
  let value = property_path_get_2(v, "data", property_name);
  return value;
}
