import { list_map_unordered_async_filter_null_not_is } from "./list_map_unordered_async_filter_null_not_is.mjs";
import { data_paths } from "./data_paths.mjs";
import { file_read } from "./file_read.mjs";
import { text_identifier_includes } from "./text_identifier_includes.mjs";
export async function data_paths_mentioning(name) {
  "Every file in the data folder whose text spells this name as a whole word. A name about to be deleted has to be looked for here by reading, because none of what the folder holds is code. The rename command sweeps the same list, so both answer to one idea of a name still being spoken for.";
  let paths = await data_paths();
  async function to_path_or_null(f_path) {
    let contents = await file_read(f_path);
    let includes = text_identifier_includes(contents, name);
    if (includes) {
      return f_path;
    }
    return null;
  }
  let filtered = await list_map_unordered_async_filter_null_not_is(
    paths,
    to_path_or_null,
  );
  return filtered;
}
