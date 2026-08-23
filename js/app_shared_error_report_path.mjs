import { app_shared_contact_user_id } from "./app_shared_contact_user_id.mjs";
import { app_shared_error_report_folder } from "./app_shared_error_report_folder.mjs";
import { messages_firebase_path } from "./messages_firebase_path.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function app_shared_error_report_path() {
  ("where one device's error report is kept: one file, named after the device, inside the errors folder");
  ("One file per device rather than one per error is the whole of what keeps this from being able to fill anything. A device in a loop that throws a thousand times still owns exactly one file, and what a thousand throws cost is the last few of them overwriting the same name.");
  ("The same device id the Contact screen uses, so what somebody wrote and what their device hit can be read side by side without anything having to be matched up by hand.");
  let user_id = await app_shared_contact_user_id();
  let opening = messages_firebase_path();
  let folder = app_shared_error_report_folder();
  let name = text_combine_multiple([opening, folder, user_id]);
  let path = file_name_json(name);
  return path;
}
