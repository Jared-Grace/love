import { app_shared_contact_user_id } from "./app_shared_contact_user_id.mjs";
import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { app_shared_device_report_folder } from "./app_shared_device_report_folder.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_name_json } from "./file_name_json.mjs";
export async function app_shared_device_report_path() {
  "where one device's report is kept: one file, named after the device, so a second send replaces the first and a person tapping a hundred times still owns one file";
  "One per site comes free: the device id lives in the browser's storage, which each site keeps apart, so the same phone on two sites is two ids and two files - and the two can be read side by side.";
  let user_id = await app_shared_contact_user_id();
  let opening = messages_firebase_path();
  let folder = app_shared_device_report_folder();
  let name = text_combine_multiple([opening, folder, user_id]);
  let path = file_name_json(name);
  return path;
}
