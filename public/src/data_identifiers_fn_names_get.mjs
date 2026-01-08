import { marker } from "../../../love/public/src/marker.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { data_property_get_generic } from "../../../love/public/src/data_property_get_generic.mjs";
export async function data_identifiers_fn_names_get() {
  marker("1");
  let d_path = data_path();
  let v = await data_property_get_generic(d_path, "identifiers_fn_names");
  return v;
}
