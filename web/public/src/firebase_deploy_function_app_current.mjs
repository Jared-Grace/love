import { function_name_combine_multiple } from "./function_name_combine_multiple.mjs";
import { app_name_prefixed } from "./app_name_prefixed.mjs";
import { data_app_current_get } from "./data_app_current_get.mjs";
import { firebase_deploy_function } from "./firebase_deploy_function.mjs";
import { marker } from "./marker.mjs";
export async function firebase_deploy_function_app_current(f_name) {
  marker("1");
  let a = await data_app_current_get();
  let a_name = app_name_prefixed(a);
  let combined = function_name_combine_multiple([a_name, "main"]);
  await firebase_deploy_function(combined);
}
