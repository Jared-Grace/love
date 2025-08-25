import { string_replace } from "./string_replace.mjs";
import { log } from "./log.mjs";
import { firebase_storage_url_project } from "./firebase_storage_url_project.mjs";
import { firebase_deploy_function_destination_version } from "./firebase_deploy_function_destination_version.mjs";
import { http_json } from "./http_json.mjs";
import { app_replace_main } from "./app_replace_main.mjs";
import { marker } from "./marker.mjs";
export async function app_replace() {
  marker("1");
  let f_name = app_replace_main.name;
  let destination_version =
    firebase_deploy_function_destination_version(f_name);
  let replaced = string_replace(destination_version, "/", "%2F");
  let url =
    "https://firebasestorage.googleapis.com/v0/b/" +
    firebase_storage_url_project() +
    "/o/" +
    replaced +
    "?alt=media";
  let json = await http_json(url);
  log(json);
}
