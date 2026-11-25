import { window_has } from "./window_has.mjs";
export function app_bible_record_local_is() {
  "Whether this page is running inside the store build of the Android recorder app (android/record, release), which keeps every take on the phone alone: nothing is sent, backed up or looked up in storage (human 2026-11-25: an app for the app store that stores only on the device - no send or sync). The store build gives the page a love_record_local object; the owner's own build and a browser do not.";
  let r = window_has("love_record_local");
  return r;
}
