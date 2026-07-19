import { firebase_deploy_function_destination_latest } from "./firebase_deploy_function_destination_latest.mjs";
import { app_shared_main } from "./app_shared_main.mjs";
export async function app_shared_main_latest(f_name, firebase_name_value) {
  let v = await app_shared_main(
    f_name,
    firebase_name_value,
    firebase_deploy_function_destination_latest,
  );
  return v;
}
