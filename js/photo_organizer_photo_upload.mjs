import { arguments_assert } from "./arguments_assert.mjs";
import { photo_organizer_storage_path } from "./photo_organizer_storage_path.mjs";
import { firebase_upload_blob_browser_quiet } from "./firebase_upload_blob_browser_quiet.mjs";
export async function photo_organizer_photo_upload(name, file) {
  "$plain name";
  "$plain file";
  "Sends one photo of the organizer up to storage under its own name, as the owner signed in on this page.";
  arguments_assert(arguments, 2);
  let path = photo_organizer_storage_path("photos", name);
  await firebase_upload_blob_browser_quiet(path, file);
}
