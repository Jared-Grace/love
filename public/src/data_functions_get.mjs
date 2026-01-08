import { data_property_get } from "../../../love/public/src/data_property_get.mjs";
export async function data_functions_get() {
  const functions = await data_property_get("functions");
  return functions;
}
