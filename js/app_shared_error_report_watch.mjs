import { app_shared_error_report_send } from "./app_shared_error_report_send.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { html_on_error } from "./html_on_error.mjs";
export async function app_shared_error_report_watch() {
  ("send whatever this device wrote down before now, and then send once more if something goes wrong while it is here - at most twice in one visit");
  ("Twice, because the two cover the two ways a fault is ever seen. What a dead boot wrote down can only go up on the load after it, which is the load the Try again button makes; and a fault that arrives once the app is up would otherwise wait for a next visit that somebody who just hit an error may never make.");
  ("Once more rather than once per fault. One fault usually brings others behind it, and the list already holds them - so a second send says everything a tenth send would, and a page throwing inside something that repeats cannot turn into a page uploading inside something that repeats.");
  ("Every send is inside a catch that does nothing. This is the reporting of a failure, so it must never become one: a device with storage turned off, or with no network, should see the app it came for and nothing else.");
  await catch_null_async(app_shared_error_report_send);
  let sent = false;
  async function send_once() {
    if (sent) {
      return;
    }
    sent = true;
    await catch_null_async(app_shared_error_report_send);
  }
  html_on_error(send_once);
}
