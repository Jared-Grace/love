import { firebase_deploy_function_destination_production } from "./firebase_deploy_function_destination_production.mjs";
import { app_shared_main } from "./app_shared_main.mjs";
export async function app_main_production(f_name, firebase_name_value) {
  let v = await app_shared_main(
    f_name,
    firebase_name_value,
    firebase_deploy_function_destination_production,
  );
  return v;
}
