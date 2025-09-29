import { user_repo_path } from "./user_repo_path.mjs";
import { data_property_get } from "./data_property_get.mjs";
export async function function_current_get() {
  const property_name = "function_current";
  let d_path = user_repo_path();
  let f_name_current = await data_property_get(property_name, d_path);
  return f_name_current;
}
