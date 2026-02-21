import { property_get } from "../../../love/public/src/property_get.mjs";
import { data_get } from "../../../love/public/src/data_get.mjs";
export async function data_property_get_generic(d_path, property_name) {
  let v = await data_get(property_name, null, d_path);
  let data = property_get(v, "data");
  let value = property_get(data, property_name);
  return value;
}
