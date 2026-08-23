import { storage_key_name_get } from "./storage_key_name_get.mjs";
import { text_frozen } from "./text_frozen.mjs";
export function html_error_records_storage_key() {
  ("the one word in a person's browser that the errors their device has hit are filed under");
  ("Two very different pieces of code read and write this: the few lines baked into the page, which run before anything else and are the only thing standing when a boot dies, and the app itself, which sends what they wrote. They have no way to share anything except the word, so the word is spelled once, here.");
  ("Both halves of it are frozen. Once a device has filed an error under this word the file is sitting on a disk this repo will never see again, and a word that followed a rename would look to that device like nothing had ever gone wrong.");
  ("The join is asked for rather than written out, because the join belongs to the one place that owns it - a second spelling of it is a second place it can quietly stop matching what every other setting uses.");
  let app_name = text_frozen("app_shared_error_records");
  let key = text_frozen("errors");
  let joined = storage_key_name_get(app_name, key);
  return joined;
}
