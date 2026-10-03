import { arguments_assert } from "./arguments_assert.mjs";
import { file_name_random_browser } from "./file_name_random_browser.mjs";
import { phone_photos_prefix } from "./phone_photos_prefix.mjs";
import { text_combine } from "./text_combine.mjs";
import { firebase_upload_blob_browser_quiet } from "./firebase_upload_blob_browser_quiet.mjs";
export async function phone_photos_send(file) {
  "$plain file";
  "Send one photo chosen on a phone up to storage, under a fresh random name inside the phone photos opening, and answer with that name.";
  "It goes straight up rather than waiting in line on the phone the way a receipt photo does, because this screen is for handing a picture to the computer now - somebody sending one is watching for it to arrive, and a failure has to be said to them at once rather than kept for later.";
  arguments_assert(arguments, 1);
  let name = file_name_random_browser(file);
  let prefix = phone_photos_prefix();
  let path = text_combine(prefix, name);
  await firebase_upload_blob_browser_quiet(path, file);
  return name;
}
