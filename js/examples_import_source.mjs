import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { examples_folder } from "./examples_folder.mjs";
import { path_relative } from "./path_relative.mjs";
export function examples_import_source(f_name) {
  "How an example spells the way to the one function it shows - reckoned from the two folders rather than written out, so the climb between them is stated once and cannot drift. Reckoning it here instead of consulting a dictionary of every name is what keeps the rename hermetic: the same answer in a sandbox as in the repo.";
  let folder_examples = examples_folder();
  let f_path = function_name_to_path_relative(f_name);
  let relative = path_relative(folder_examples, f_path);
  return relative;
}
