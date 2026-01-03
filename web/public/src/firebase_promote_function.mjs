import { firebase_deploy_function_destination_latest } from "../../../love/public/src/firebase_deploy_function_destination_latest.mjs";
import { firebase_storage_download_json } from "../../../love/public/src/firebase_storage_download_json.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { firebase_deploy_function_destination_production } from "../../../love/public/src/firebase_deploy_function_destination_production.mjs";
export async function firebase_promote_function(f_name) {
  marker("1");
  let destination_latest = firebase_deploy_function_destination_latest(f_name);
  let value = await firebase_storage_download_json(destination_latest);
  let destination_production =
    firebase_deploy_function_destination_production(f_name);
  await firebase_upload_object(destination_production, value);
}
