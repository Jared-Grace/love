import { firebase_upload_object } from "./firebase_upload_object.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { file_name_json } from "./file_name_json.mjs";
export async function ebible_firebase_upload(bible_folder, file_name, object) {
  let file_name_with_extension = file_name_json(file_name);
  let joined = list_join_slash_forward(["bible", bible_folder]);
  let destination = list_join_slash_forward([joined, file_name_with_extension]);
  await firebase_upload_object(object, destination);
}
