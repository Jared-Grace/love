import { not } from "./not.mjs";
import { app_shared_open_due_is } from "./app_shared_open_due_is.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
export async function app_shared_open_watch(app_fn) {
  "say, once a calendar day per app, that this device opened it - so whether an app is actually used can be read off storage";
  "THE SENDER IS FETCHED ONLY WHEN TODAY'S OPEN IS STILL OWED. Sending needs the storage half of the firebase library, which is too heavy for the boot every app shares; asking whether the day was already sent needs none of it. So every open after the first one in a day downloads nothing more than it did before this existed.";
  "Inside a catch that does nothing. Counting an open must never become the reason an app fails to open - storage turned off, or no network, should leave the app exactly as it was.";
  async function send_when_due() {
    let due = app_shared_open_due_is(app_fn);
    if (not(due)) {
      return;
    }
    let m = await import("./app_shared_open_send.mjs");
    let send = m.app_shared_open_send;
    await send(app_fn);
  }
  await catch_null_async(send_when_due);
}
