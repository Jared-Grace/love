import { property_get } from "./property_get.mjs";
import { data_all } from "./data_all.mjs";
export async function data_value(property_name, d_path) {
  var v = await data_all(d_path);
  let data = property_get(v, "data");
  let value = property_get(data, property_name);
  return value;
}
