import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_recursive_skipped_paths_async } from "./folder_read_recursive_skipped_paths_async.mjs";
import { file_lines_search } from "./file_lines_search.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function folder_lines_search(path_folder, s, folders_skipped) {
  "Every line under this folder that holds this word, each one given back with the file it came from and the place it sits at, with the named folders left unentered";
  "This is what a machine's own searching command is for, written as a question instead. Nothing here asks the machine to search - the files are read and the lines are looked at - so there is nothing to differ between one machine and the next, and no second version to keep in step. Portable by having nothing to port is a stronger promise than portable by knowing every platform.";
  "The folders to leave alone are asked for rather than assumed. A folder worth skipping is a fact about the place being searched, not about searching, and a list built in here would be somebody's guess about somebody else's folder - right for this repo on the day it was written and wrong everywhere else.";
  arguments_assert(arguments, 3);
  let paths = await folder_read_recursive_skipped_paths_async(
    path_folder,
    folders_skipped,
  );
  let found = [];
  for (let f_path of paths) {
    let records = await file_lines_search(f_path, s);
    list_add_multiple(found, records);
  }
  return found;
}
