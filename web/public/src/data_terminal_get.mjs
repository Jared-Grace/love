import { marker } from "./marker.mjs";
import { data_property_get } from "./data_property_get.mjs";
export async function data_terminal_get() {
  marker("1");
  const property_name = "terminal";
  let w = await data_property_get(property_name);
  return w;
}
