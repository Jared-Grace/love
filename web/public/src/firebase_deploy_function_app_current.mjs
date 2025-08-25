import { app_name_main } from "./app_name_main.mjs";
import { data_app_current_get } from "./data_app_current_get.mjs";
import { firebase_deploy_function } from "./firebase_deploy_function.mjs";
import { marker } from "./marker.mjs";
export async function firebase_deploy_function_app_current() {
  marker("1");
  let a = await data_app_current_get();
  let combined = app_name_main(a);
  await firebase_deploy_function(combined);
}
