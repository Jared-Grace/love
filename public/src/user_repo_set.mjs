import { file_name_json_folder } from "./file_name_json_folder.mjs";
import { data_set } from "./data_set.mjs";
import { marker } from "./marker.mjs";
export async function user_repo_set(value) {
  marker("1");
  let f_path = file_name_json_folder("gitignore", "user");
  async function lambda(previous) {}
  await data_set(lambda, "repo_current", f_path);
}
