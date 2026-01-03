import { function_dependencies_code_unaliased } from "../../../love/public/src/function_dependencies_code_unaliased.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { firebase_deploy_function_destination_latest } from "../../../love/public/src/firebase_deploy_function_destination_latest.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { firebase_deploy_function_destination_json } from "../../../love/public/src/firebase_deploy_function_destination_json.mjs";
import { date_now_file } from "../../../love/public/src/date_now_file.mjs";
export async function firebase_deploy_function(f_name) {
  marker("1");
  let v = await function_dependencies_code_unaliased(f_name);
  let unaliased = object_property_get(v, "unaliased");
  let d = object_property_get(v, "d");
  let code = object_property_get(d, "code");
  let now_file = date_now_file();
  let destination = firebase_deploy_function_destination_json(
    now_file,
    unaliased,
  );
  await firebase_upload_object(destination, {
    code,
  });
  let version = {
    destination,
  };
  let destination_version =
    firebase_deploy_function_destination_latest(unaliased);
  await firebase_upload_object(destination_version, version);
}
