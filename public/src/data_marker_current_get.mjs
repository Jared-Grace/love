import { user_data_path } from "../../../love/public/src/user_data_path.mjs";
import { data_property_get_generic } from "../../../love/public/src/data_property_get_generic.mjs";
export async function data_marker_current_get() {
  const property_name = "marker_current";
  let d_path = user_data_path();
  let f_name = await data_property_get_generic(d_path, property_name);
  return f_name;
}
