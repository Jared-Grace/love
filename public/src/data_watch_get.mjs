import { data_path } from "../../../love/public/src/data_path.mjs";
import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
export async function data_watch_get() {
  let d_path = data_path();
  const property_name = "watch";
  let w = await data_property_get(d_path, property_name);
  return w;
}
