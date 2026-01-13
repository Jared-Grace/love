import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_name_main_get } from "../../../love/public/src/app_name_main_get.mjs";
import { firebase_deploy_function } from "../../../love/public/src/firebase_deploy_function.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function firebase_deploy_function_app_main(a) {
  marker("1");
  let v2 = await app_name_main_get(a_name);
  let combined = object_property_get(v2, "f_name");
  let v = await firebase_deploy_function(combined);
  return v;
}
