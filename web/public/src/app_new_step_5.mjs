import { app_name_staging } from "../../../love/public/src/app_name_staging.mjs";
import { firebase_deploy_function_destination_latest } from "../../../love/public/src/firebase_deploy_function_destination_latest.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { app_new_step_3_generic } from "../../../love/public/src/app_new_step_3_generic.mjs";
export async function app_new_step_5(name) {
  marker("1");
  let combined = app_name_staging(name);
  let version_get = firebase_deploy_function_destination_latest.name;
  await app_new_step_3_generic(name, version_get, combined);
}
