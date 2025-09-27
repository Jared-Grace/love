import { data_path } from "./data_path.mjs";
import { data_property_get } from "./data_property_get.mjs";
export async function data_identifiers_get() {
  let d_path = data_path();
  let v = await data_property_get("identifiers", d_path);
  return v;
}
