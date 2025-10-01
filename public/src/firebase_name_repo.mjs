import { object_property_get } from "./object_property_get.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
export async function firebase_name_repo(repo_name) {
  const f_path = ".firebaserc";
  let combined = repo_path_combine(repo_name, f_path);
  let f = await file_read_json(combined);
  let projects = object_property_get(f, "projects");
  let default2 = object_property_get(projects, "default");
  return default2;
}
