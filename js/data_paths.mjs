import { data_folder } from "./data_folder.mjs";
import { folder_read_recursive_paths_async } from "./folder_read_recursive_paths_async.mjs";
export async function data_paths() {
  "Every file in the data folder, however deeply nested. What lives there - the example corpus, the aliases the human types, the baselines a gate ratchets against - is not code, so no sweep over the functions ever sees it, and the two commands that ask whether a name is still spoken for both start here.";
  let folder = data_folder();
  let paths = await folder_read_recursive_paths_async(folder);
  return paths;
}
