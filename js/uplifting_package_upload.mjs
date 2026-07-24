import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { user_repo_path_combine } from "./user_repo_path_combine.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { uplifting_package_destination } from "./uplifting_package_destination.mjs";
export async function uplifting_package_upload(bible_folder) {
  "upload an already-built uplifting package to firebase storage, so its verse text is served from the bucket instead of being deployed as a hosting file. Reads the committed public/bible/uplifting/<folder>.json (no re-parse of the bible needed) and saves it to the storage destination.";
  let name = text_combine_multiple(["bible/uplifting/", bible_folder, ".json"]);
  let joined = folder_public_join(name);
  let path = await user_repo_path_combine(joined);
  let object = await file_read_json(path);
  let destination = uplifting_package_destination(bible_folder);
  await firebase_upload_object(destination, object);
  return destination;
}
