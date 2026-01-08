import { data_path } from "../../../love/public/src/data_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { data_property_get_generic } from "../../../love/public/src/data_property_get_generic.mjs";
export async function data_terminal_get() {
  let d_path = data_path();
  marker("1");
  const property_name = "terminal";
  let w = await data_property_get_generic(d_path, property_name);
  return w;
}
