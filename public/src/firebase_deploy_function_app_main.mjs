import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_shared_name_main_get } from "../../../love/public/src/app_shared_name_main_get.mjs";
import { firebase_deploy_function } from "../../../love/public/src/firebase_deploy_function.mjs";
export async function firebase_deploy_function_app_main(a_name) {
  let v2 = await app_shared_name_main_get(a_name);
  let combined = property_get(v2, "f_name");
  let v = await firebase_deploy_function(combined);
  return v;
}
