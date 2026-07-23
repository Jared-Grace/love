import { booking_firebase_path } from "./booking_firebase_path.mjs";
import { file_name_json } from "./file_name_json.mjs";
import { firebase_upload_object_browser } from "./firebase_upload_object_browser.mjs";
import { uuid } from "./uuid.mjs";
import { text_combine } from "./text_combine.mjs";
export async function booking_send(booking) {
  "write one preaching booking to Firebase as its own uniquely-named file, so two people booking at once never overwrite each other";
  let id = await uuid();
  let file_name = text_combine(booking_firebase_path(), id);
  let file_path = file_name_json(file_name);
  await firebase_upload_object_browser(file_path, booking);
}
