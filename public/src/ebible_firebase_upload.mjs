import { ebible_firebase_upload_path } from "./ebible_firebase_upload_path.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
export async function ebible_firebase_upload(bible_folder, file_name, object) {
  let destination = ebible_firebase_upload_path(file_name, bible_folder);
  await firebase_upload_object(object, destination);
}
