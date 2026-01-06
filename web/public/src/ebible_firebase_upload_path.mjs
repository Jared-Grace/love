import { ebible_firebase_upload_path_name } from "../../../love/public/src/ebible_firebase_upload_path_name.mjs";
import { list_join_slash_forward } from "../../../love/public/src/list_join_slash_forward.mjs";
export function ebible_firebase_upload_path(bible_folder, file_name) {
  let file_name_with_extension = ebible_firebase_upload_path_name(file_name);
  let joined = list_join_slash_forward(["bible", bible_folder]);
  let destination = list_join_slash_forward([joined, file_name_with_extension]);
  return destination;
}
