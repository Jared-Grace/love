import { repo_path_combine } from "./repo_path_combine.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
export async function function_name_repo_path_combine(a_name, file_path) {
  let search = await function_name_to_path_search(a_name);
  let repo_name = object_property_get(search, "repo_name");
  let joined = repo_path_combine(repo_name, file_path);
  return joined;
}
