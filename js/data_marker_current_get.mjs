import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
export async function data_marker_current_get() {
  const property_name = "marker_current";
  let d_path = user_repo_path();
  let f_name = await data_property_get(property_name, d_path);
  return f_name;
}
