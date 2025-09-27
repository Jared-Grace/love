import { data_property_get } from "./data_property_get.mjs";
import { data_path } from "./data_path.mjs";
export async function data_functions_get() {
  let d_path = data_path();
  const functions = await data_property_get("functions", d_path);
  return functions;
}
