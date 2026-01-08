import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function data_terminal_get() {
  marker("1");
  const property_name = "terminal";
  let t = await data_property_get(property_name);
  return t;
}
