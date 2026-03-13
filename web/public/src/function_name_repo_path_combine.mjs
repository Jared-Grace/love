import { repo_path_combine } from "./repo_path_combine.mjs";
import { property_get } from "./property_get.mjs";
import { function_name_to_path_search } from "./function_name_to_path_search.mjs";
import { log_keep } from "./log_keep.mjs";
export async function function_name_repo_path_combine(f_name, file_path) {
  let search = await function_name_to_path_search(f_name);
  log_keep(function_name_repo_path_combine.name, {
    search,
  });
  let repo_name = property_get(search, "repo_name");
  let joined = repo_path_combine(repo_name, file_path);
  return joined;
}
