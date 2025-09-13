import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function ebible_firebase_upload_path(bible_folder, file_name) {
  let file_name_with_extension = file_name_json(file_name);
  let joined = list_join_slash_forward(["bible", bible_folder]);
  let destination = list_join_slash_forward([joined, file_name_with_extension]);
  return destination;
}
