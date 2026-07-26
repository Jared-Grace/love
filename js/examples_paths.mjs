import { examples_names } from "./examples_names.mjs";
import { examples_folder } from "./examples_folder.mjs";
import { path_join } from "./path_join.mjs";
import { list_map } from "./list_map.mjs";
export async function examples_paths() {
  "Every file of the example corpus, as a path that can be read and written. The corpus is data rather than functions, so a sweep over the tree of functions never sees these - anything that wants to reach them asks here.";
  let folder = examples_folder();
  let mjs = await examples_names();
  function to_path(name) {
    let joined = path_join([folder, name]);
    return joined;
  }
  let paths = list_map(mjs, to_path);
  return paths;
}
