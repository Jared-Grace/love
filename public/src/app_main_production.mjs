import { firebase_deploy_function_destination_production } from "../../../love/public/src/firebase_deploy_function_destination_production.mjs";
import { app_main } from "../../../love/public/src/app_main.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function app_main_production(f_name) {
  marker("1");
  let v = await app_main(
    f_name,
    firebase_deploy_function_destination_production,
  );
  return v;
}
