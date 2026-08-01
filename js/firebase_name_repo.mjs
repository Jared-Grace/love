import { property_path_get_2 } from "./property_path_get_2.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
export async function firebase_name_repo(repo_name) {
  let f_path = ".firebaserc";
  let combined = repo_path_combine(repo_name, f_path);
  let f = await file_read_json(combined);
  let default2 = property_path_get_2(f, "projects", "default");
  return default2;
}
