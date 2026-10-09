import { dev_trace_storage_key } from "./dev_trace_storage_key.mjs";
import { app_shared_contact_user_id } from "./app_shared_contact_user_id.mjs";
import { dev_trace_report_prefix } from "./dev_trace_report_prefix.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { text_combine } from "./text_combine.mjs";
import { firebase_upload_text_browser_quiet } from "./firebase_upload_text_browser_quiet.mjs";
export async function dev_trace_send_storage() {
  "sends the trace a latest page kept on this device up to storage, as one file named after the device - latest has no dev server to write it down, and storage is the one place a browser may write";
  "the whole kept trace goes every time and overwrites the last copy, so a device owns one file however often it sends; nothing is cleared here, because the writer already keeps only the newest few hundred steps";
  "this is fetched only when it is needed, because sending to storage brings the firebase library with it and the page it serves should not pay for that on an ordinary visit";
  let key = dev_trace_storage_key();
  let held = localStorage.getItem(key);
  let list = held ? JSON.parse(held) : [];
  if (list.length === 0) {
    return 0;
  }
  let user_id = await app_shared_contact_user_id();
  let prefix = dev_trace_report_prefix();
  let path = file_name_json(text_combine(prefix, user_id));
  let report = {
    where: location.href,
    when: new Date().toISOString(),
    steps: list,
  };
  await firebase_upload_text_browser_quiet(path, JSON.stringify(report));
  return list.length;
}
