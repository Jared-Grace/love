import { marker } from "../../../love/public/src/marker.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
export async function data_identifiers_fn_names_get() {
  marker("1");
  let d_path = data_path();
  let v = await data_property_get("identifiers", d_path);
  return v;
}
