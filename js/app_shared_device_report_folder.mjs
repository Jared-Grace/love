import { text_frozen } from "./text_frozen.mjs";
export function app_shared_device_report_folder() {
  "the folder the device reports sit in, one step inside the place a person's own uploads are kept, beside the error reports";
  "A report says how a screen measured on somebody's device - how tall the window is by every measure the browser keeps, and the size they chose for the letters - so a fault seen only on one phone can be read as numbers rather than guessed at from a photo. Made 2026-11-08 for the verse arrows cut off on one site and not on another with the same code.";
  "Frozen, because once a device has sent one, the files sit under this word.";
  let folder = text_frozen("device/");
  return folder;
}
