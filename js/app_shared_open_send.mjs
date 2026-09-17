import { date_today_iso } from "./date_today_iso.mjs";
import { app_shared_open_path } from "./app_shared_open_path.mjs";
import { firebase_upload_text_browser_quiet } from "./firebase_upload_text_browser_quiet.mjs";
import { app_shared_open_day_key } from "./app_shared_open_day_key.mjs";
import { storage_local_set } from "./storage_local_set.mjs";
export async function app_shared_open_send(app_fn) {
  "send one empty file saying this device opened this app today, and remember the day it went";
  "The file is empty because its address already says everything: the day, the app and the device. One name per device per app per day, so opening an app a hundred times in a day still owns exactly one file.";
  "The day is remembered only after the send lands. A device with no network sends nothing and remembers nothing, so it tries again on its next open rather than going uncounted for the day.";
  let day = date_today_iso();
  let path = await app_shared_open_path(app_fn, day);
  await firebase_upload_text_browser_quiet(path, "");
  let key = app_shared_open_day_key();
  storage_local_set(app_fn, key, day);
}
