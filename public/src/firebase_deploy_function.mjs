import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { firebase_deploy_function_destination_latest } from "../../../love/public/src/firebase_deploy_function_destination_latest.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
import { firebase_deploy_function_destination } from "../../../love/public/src/firebase_deploy_function_destination.mjs";
import { date_now_file } from "../../../love/public/src/date_now_file.mjs";
import { function_dependencies_code } from "../../../love/public/src/function_dependencies_code.mjs";
export async function firebase_deploy_function(f_name) {
  marker("1");
  let code = await function_dependencies_code(f_name);
  let v = await function_name_unalias(f_name2);
  let now_file = date_now_file();
  let destination = firebase_deploy_function_destination(now_file, f_name);
  await firebase_upload_object(
    {
      code,
    },
    destination,
  );
  let version = {
    destination,
  };
  let destination_version = firebase_deploy_function_destination_latest(f_name);
  await firebase_upload_object(version, destination_version);
}
