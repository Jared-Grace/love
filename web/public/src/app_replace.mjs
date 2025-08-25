import { js_code_call_statement } from "./js_code_call_statement.mjs";
import { firebase_storage_download_property } from "./firebase_storage_download_property.mjs";
import { firebase_deploy_function_destination_version } from "./firebase_deploy_function_destination_version.mjs";
import { app_replace_main } from "./app_replace_main.mjs";
import { marker } from "./marker.mjs";
export async function app_replace() {
  marker("1");
  let f_name = app_replace_main.name;
  let destination_version =
    firebase_deploy_function_destination_version(f_name);
  let destination = await firebase_storage_download_property(
    destination_version,
    "destination",
  );
  let code = await firebase_storage_download_property(destination, "code");
  let result = js_code_call_statement(f_name);
}
