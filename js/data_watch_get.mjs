import { data_property_get } from "./data_property_get.mjs";
export async function data_watch_get() {
  let property_name = "watch";
  let w = await data_property_get(d_path, property_name);
  return w;
}
