import { file_name_json } from "../../../love/public/src/file_name_json.mjs";
export function ebible_firebase_upload_path_name(file_name) {
  let file_name2 = file_name_json(file_name);
  return file_name2;
}
