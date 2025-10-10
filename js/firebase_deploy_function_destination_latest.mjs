import { marker } from "../../../love/public/src/marker.mjs";
import { firebase_deploy_function_destination } from "../../../love/public/src/firebase_deploy_function_destination.mjs";
export function firebase_deploy_function_destination_latest(f_name) {
  marker("1");
  let destination2 = firebase_deploy_function_destination(
    "version_latest",
    f_name,
  );
  return destination2;
}
