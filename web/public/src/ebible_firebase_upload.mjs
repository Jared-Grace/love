import { ebible_firebase_upload_path } from "../../../love/public/src/ebible_firebase_upload_path.mjs";
import { firebase_upload_object } from "../../../love/public/src/firebase_upload_object.mjs";
export async function ebible_firebase_upload(bible_folder, file_name, object) {
  let destination = ebible_firebase_upload_path(bible_folder, file_name);
  await firebase_upload_object(destination, object);
}
