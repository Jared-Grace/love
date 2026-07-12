import { property_get } from "./property_get.mjs";
import { data_get } from "./data_get.mjs";
export async function data_get_value(property_name, initial, f_path) {
  let v = await data_get(property_name, initial, f_path);
  let value = property_get(v, "value");
  return value;
}
