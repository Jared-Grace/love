import { object_property_get } from "./object_property_get.mjs";
import { firebase_storage_download } from "./firebase_storage_download.mjs";
import { log } from "./log.mjs";
import { firebase_deploy_function_destination_version } from "./firebase_deploy_function_destination_version.mjs";
import { app_replace_main } from "./app_replace_main.mjs";
import { marker } from "./marker.mjs";
export async function app_replace() {
  marker("1");
  let f_name = app_replace_main.name;
  let destination_version =
    firebase_deploy_function_destination_version(f_name);
  const property_name = "destination";
  let parsed = await firebase_storage_download(destination_version);
  let destination = object_property_get(parsed, property_name);
  log(destination);
}
