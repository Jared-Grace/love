import { data_property_get_generic } from "../../../love/public/src/data_property_get_generic.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
export async function data_functions_get() {
  let d_path = data_path();
  const functions = await data_property_get_generic(d_path, "functions");
  return functions;
}
