import { marker } from "../../../love/public/src/marker.mjs";
import { user_repo_path } from "../../../love/public/src/user_repo_path.mjs";
import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
export async function function_current_get() {
  marker("1");
  const property_name = "function_current";
  let d_path = user_repo_path();
  let f_name_current = await data_property_get(property_name, d_path);
  return f_name_current;
}
