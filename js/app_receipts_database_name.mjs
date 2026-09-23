import { text_frozen } from "./text_frozen.mjs";
export function app_receipts_database_name() {
  "the name of the browser database holding receipt photos taken on this phone that have not reached storage yet.";
  "the word must not move once a phone is holding a photo under it: that phone looks under this and under nothing else, and a photo waiting there would never be sent.";
  let v = text_frozen("receipts");
  return v;
}
