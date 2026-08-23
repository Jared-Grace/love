import { app_shared_error_records } from "./app_shared_error_records.mjs";
import { app_shared_error_report_path } from "./app_shared_error_report_path.mjs";
import { app_shared_error_report_sent_key } from "./app_shared_error_report_sent_key.mjs";
import { firebase_upload_object_arg } from "./firebase_upload_object_arg.mjs";
import { firebase_upload_text_browser_quiet } from "./firebase_upload_text_browser_quiet.mjs";
import { storage_local_get } from "./storage_local_get.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { json_to } from "./json_to.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { date_now_iso } from "./date_now_iso.mjs";
export async function app_shared_error_report_send() {
  "send this device's written-down errors up to its one file - unless there is nothing written down, or nothing has changed since the last time it went";
  "Two things bound what this can cost. The file is one name per device, so what is sent overwrites rather than adds. And a send only happens when the list differs from the copy of it that last went up, so a device that hits the same fault every load sends once and then stays silent about it.";
  "The comparison is over the written-out report rather than over its length or its newest entry, because the older entries drop off the end as new ones arrive - a list that changed only by losing its oldest is still a list this repo has never seen.";
  "Nothing is cleared once it has gone. The list is the writer's to trim, and clearing it here would mean a report that failed to arrive took the only record of itself with it.";
  let records = app_shared_error_records();
  let nothing = list_empty_is(records);
  if (nothing) {
    return false;
  }
  let report = {
    errors: records,
    when: date_now_iso(),
  };
  let arg = firebase_upload_object_arg(report);
  let content = property_get(arg, "content");
  let sent_key = app_shared_error_report_sent_key();
  let already = storage_local_get(app_shared_error_report_send, sent_key);
  let right = json_to(records);
  let unchanged = equal(already, right);
  if (unchanged) {
    return false;
  }
  let path = await app_shared_error_report_path();
  await firebase_upload_text_browser_quiet(path, content);
  let value = json_to(records);
  storage_local_set(app_shared_error_report_send, sent_key, value);
  return true;
}
