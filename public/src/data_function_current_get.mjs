import { data_property_get } from "./data_property_get.mjs";
export async function data_function_current_get() {
  const property_name = "function_current";
  let f_name_current = await data_property_get(property_name);
  return f_name_current;
}
