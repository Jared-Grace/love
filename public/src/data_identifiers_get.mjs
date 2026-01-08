import { data_path } from "../../../love/public/src/data_path.mjs";
import { data_property_get_generic } from "../../../love/public/src/data_property_get_generic.mjs";
export async function data_identifiers_get() {
  const property = "identifiers";
  let d_path = data_path();
  let v = await data_property_get_generic(d_path, property);
  return v;
}
