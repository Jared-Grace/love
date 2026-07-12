import { user_data_path } from "./user_data_path.mjs";
import { data_property_get_generic } from "./data_property_get_generic.mjs";
export async function function_current_get() {
  let property_name = "function_current";
  let d_path = user_data_path();
  let f_name_current = await data_property_get_generic(d_path, property_name);
  return f_name_current;
}
