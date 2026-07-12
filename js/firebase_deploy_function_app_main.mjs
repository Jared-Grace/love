import { property_get } from "./property_get.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { firebase_deploy_function } from "./firebase_deploy_function.mjs";
export async function firebase_deploy_function_app_main(a_name) {
  let v2 = await app_shared_name_search_info(a_name);
  let combined = property_get(v2, "f_name");
  let v = await firebase_deploy_function(combined);
  return v;
}
