import { data_path } from "../../../love/public/src/data_path.mjs";
import { data_property_get_generic } from "../../../love/public/src/data_property_get_generic.mjs";
export async function data_watch_get() {
  let d_path = data_path();
  const property_name = "watch";
  let w = await data_property_get_generic(d_path, property_name);
  return w;
}
