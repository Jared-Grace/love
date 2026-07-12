import { folder_secret_join } from "./folder_secret_join.mjs";
import { file_name_json } from "./file_name_json.mjs";
export function folder_secret_join_json(name) {
  let file_name = file_name_json(name);
  let file_path = folder_secret_join(file_name);
  return file_path;
}
