import { repo_functions_names } from "./repo_functions_names.mjs";
import { repo_functions_path } from "./repo_functions_path.mjs";
import { function_name_folder_to_path } from "./function_name_folder_to_path.mjs";
import { file_shape } from "./file_shape.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { null_is } from "./null_is.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function repo_shapes(repo_name) {
  "Every function one repo holds, each with the shape of the work it does. Read by path rather than by name, because the same name in two repos is exactly the case this is looking for.";
  "A file that will not parse comes back as nothing rather than stopping the sweep - one repo somewhere being mid-edit is not a reason to answer nothing about all of them.";
  let names = await repo_functions_names(repo_name);
  let folder = repo_functions_path(repo_name);
  async function to_entry(name) {
    let f_path = function_name_folder_to_path(name, folder);
    async function read() {
      let s = await file_shape(f_path);
      return s;
    }
    let shape = await catch_null_async(read);
    if (null_is(shape)) {
      return null;
    }
    let entry = {
      repo_name,
      name,
      shape,
    };
    return entry;
  }
  let entries = await list_map_unordered_async_filter_null_not_is(
    names,
    to_entry,
  );
  return entries;
}
