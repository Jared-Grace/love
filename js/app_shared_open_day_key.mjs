import { text_frozen } from "./text_frozen.mjs";
export function app_shared_open_day_key() {
  "the word an app files, on this device, the last calendar day its open was sent under";
  "Frozen, because once it is written on somebody's device a changed word would read as never sent and every device would send again.";
  let key = text_frozen("open_day");
  return key;
}
