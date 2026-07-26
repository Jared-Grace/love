import { data_folder } from "./data_folder.mjs";
import { folder_read_recursive_paths_async } from "./folder_read_recursive_paths_async.mjs";
import { file_read } from "./file_read.mjs";
import { text_identifier_includes } from "./text_identifier_includes.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
export async function data_paths_mentioning(name) {
  "Every file in the data folder whose text spells this name as a whole word. What lives there - the example corpus, the aliases the human types, the baselines a gate ratchets against - is not code, so no sweep over the functions ever sees it, and a name about to be deleted has to be looked for here by reading.";
  let folder = data_folder();
  let paths = await folder_read_recursive_paths_async(folder);
  async function to_path_or_null(f_path) {
    let contents = await file_read(f_path);
    let includes = text_identifier_includes(contents, name);
    if (includes) {
      return f_path;
    }
    return null;
  }
  let mapped = await list_map_unordered_async(paths, to_path_or_null);
  let filtered = list_filter_null_not_is(mapped);
  return filtered;
}
