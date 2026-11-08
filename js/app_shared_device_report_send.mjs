import { app_shared_device_report } from "./app_shared_device_report.mjs";
import { firebase_upload_object_arg } from "./firebase_upload_object_arg.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_device_report_path } from "./app_shared_device_report_path.mjs";
import { firebase_upload_text_generic_browser } from "./firebase_upload_text_generic_browser.mjs";
export async function app_shared_device_report_send(context) {
  "measure this device's screen and send the reading up to its one file, replacing whatever was sent before";
  "With the loading overlay around it, because this is a send somebody asked for and is waiting on - unlike the error report, which goes without anybody asking.";
  let report = app_shared_device_report(context);
  let arg = firebase_upload_object_arg(report);
  let content = property_get(arg, "content");
  let path = await app_shared_device_report_path();
  await firebase_upload_text_generic_browser(path, content);
}
