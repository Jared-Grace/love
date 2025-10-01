import { app_new_step_3_generic } from "../../../karate_code/public/src/app_new_step_3_generic.mjs";
import { firebase_deploy_function_destination_production } from "../../../karate_code/public/src/firebase_deploy_function_destination_production.mjs";
import { app_name_prefixed } from "../../../love/public/src/app_name_prefixed.mjs";
export async function app_new_step_3(name) {
  let a_name = app_name_prefixed(name);
  let version_get = firebase_deploy_function_destination_production.name;
  await app_new_step_3_generic(name, version_get, a_name);
}
