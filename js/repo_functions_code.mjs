import { repo_functions_path } from "./repo_functions_path.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { function_name_to_file } from "./function_name_to_file.mjs";
import { path_join } from "./path_join.mjs";
import { file_read } from "./file_read.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function repo_functions_code(repo_name) {
  "Every function in one repo paired with the source it is written in.";
  "One repo rather than all of them, and that is the whole point of it existing beside the version that spans repos. The throwaway sandbox is allowed to read this repo and nothing above it, so anything that lists the repos beside it is refused there - which is exactly where these questions get asked. Five hand-written copies of this walk sit in the temp folder because the shared version could not be reached from the place it was needed.";
  let r_path = repo_functions_path(repo_name);
  let f_names = await repo_functions_names(repo_name);
  async function entry_of(name) {
    let file = function_name_to_file(name);
    let f_path = path_join([r_path, file]);
    let code = await file_read(f_path);
    let entry = {
      name,
      f_path,
      code,
    };
    return entry;
  }
  let entries = await list_map_async(f_names, entry_of);
  return entries;
}
