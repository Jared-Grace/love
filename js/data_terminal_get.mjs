import { data_path } from "../../../love/public/src/data_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
export async function data_terminal_get() {
  let d_path = data_path();
  marker("1");
  const property_name = "terminal";
  let w = await data_property_get(property_name, d_path);
  return w;
}
