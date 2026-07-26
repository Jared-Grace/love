import { examples_folder } from "./examples_folder.mjs";
import { examples_names } from "./examples_names.mjs";
import { list_map } from "./list_map.mjs";
import { path_join } from "./path_join.mjs";
export async function examples_paths() {
  "Where each file of the example corpus sits, ready to hand to something that reads or rewrites a file. The corpus is written in the same language as everything else, so a sweep that walks the tree can reach it - it only has to be told where to look, because none of these files is a function and no registry lists them.";
  let folder = examples_folder();
  let names = await examples_names();
  function to_path(name) {
    let joined = path_join([folder, name]);
    return joined;
  }
  let paths = list_map(names, to_path);
  return paths;
}
