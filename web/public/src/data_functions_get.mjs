import { data_property_get_generic } from "../../../love/public/src/data_property_get_generic.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
export async function data_functions_get() {
  const functions = await data_property_get( "functions");
  return functions;
}
