import { firebase_deploy_function_destination_json } from "../../../love/public/src/firebase_deploy_function_destination_json.mjs";
export function firebase_deploy_function_destination_latest(f_name) {
  let destination2 = firebase_deploy_function_destination_json(
    "version_latest",
    f_name,
  );
  return destination2;
}
