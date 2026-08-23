import { catch_null_async } from "./catch_null_async.mjs";
import { html_error_records_written_is } from "./html_error_records_written_is.mjs";
import { html_on_error } from "./html_on_error.mjs";
import { not } from "./not.mjs";
export async function app_shared_error_report_watch() {
  ("send whatever this device wrote down before now, and then send once more if something goes wrong while it is here - at most twice in one visit");
  ("Twice, because the two cover the two ways a fault is ever seen. What a dead boot wrote down can only go up on the load after it, which is the load the Try again button makes; and a fault that arrives once the app is up would otherwise wait for a next visit that somebody who just hit an error may never make.");
  ("Once more rather than once per fault. One fault usually brings others behind it, and the list already holds them - so a second send says everything a tenth send would, and a page throwing inside something that repeats cannot turn into a page uploading inside something that repeats.");
  ("Every send is inside a catch that does nothing. This is the reporting of a failure, so it must never become one: a device with storage turned off, or with no network, should see the app it came for and nothing else.");
  ("THE SENDER IS FETCHED ONLY ONCE THERE IS SOMETHING TO SEND, and that is the difference between this costing nothing and costing everybody. Sending means an initialised connection and the storage half of the firebase library behind it, which measured fifty eight KiB - and this boot is the one every app in the repo goes through, so naming the sender outright put those bytes into every page, taking the smallest one from forty two KiB to a hundred and one and past the ceiling it is held to. Reading the written-down list needs none of that.");
  ("Asking whether anything is written down is the cheap half on purpose. A visit where nothing went wrong is the ordinary visit, and it now downloads not one byte more than it did before any of this existed.");
  async function send_when_written() {
    let written = html_error_records_written_is();
    let nothing = not(written);
    if (nothing) {
      return;
    }
    let m = await import("./app_shared_error_report_send.mjs");
    let send = m.app_shared_error_report_send;
    await send();
  }
  await catch_null_async(send_when_written);
  let sent = false;
  async function send_once() {
    if (sent) {
      return;
    }
    sent = true;
    await catch_null_async(send_when_written);
  }
  html_on_error(send_once);
}
