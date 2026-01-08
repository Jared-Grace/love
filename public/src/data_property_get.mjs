import { data_property_get_generic } from "../../../love/public/src/data_property_get_generic.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
export async function data_property_get(property_name) {
  let d_path = data_path();
  let d = await data_property_get_generic(d_path, property_name);
  return d;
}
