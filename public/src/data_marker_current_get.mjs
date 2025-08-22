import { data_property_get } from "./data_property_get.mjs";
export async function data_marker_current_get() {
  const property_name = "marker_current";
  let f_name = await data_property_get(property_name);
  return f_name;
}
