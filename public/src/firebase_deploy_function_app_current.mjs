import { functions_combine_name } from "./functions_combine_name.mjs";
import { data_app_current_get } from "./data_app_current_get.mjs";
import { firebase_deploy_function } from "./firebase_deploy_function.mjs";
import { marker } from "./marker.mjs";
export async function firebase_deploy_function_app_current(f_name) {
  marker("1");
  let a = await data_app_current_get();
  let v2 = await functions_combine_name(f_names_comma);
  let v = await firebase_deploy_function(f_name);
  return v;
}
