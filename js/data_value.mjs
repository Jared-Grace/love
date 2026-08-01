import { property_path_get_2 } from "./property_path_get_2.mjs";
import { data_all } from "./data_all.mjs";
export async function data_value(property_name, d_path) {
  var v = await data_all(d_path);
  let value = property_path_get_2(v, "data", property_name);
  return value;
}
