import { examples_folder } from "./examples_folder.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { list_filter } from "./list_filter.mjs";
import { not } from "./not.mjs";
import { data_paths } from "./data_paths.mjs";
import { file_identifier_replace } from "./file_identifier_replace.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function function_rename_data_check(f_name_before, f_name_after) {
  "The data folder spells function names as plain text - an alias the human types, the entries a gate ratchets against - and none of those files is a function, so no sweep over the tree reaches them and a rename that skips them leaves the folder naming something that is gone. What the reader sees then is a red gate for a reason the rename never mentioned. The example corpus is left out here because it is code: it gets the same treatment the rest of the repo gets, by the tree, where a reference can be told apart from a word that merely reads the same. What remains is the part written in another language, and it is read by the letters only until it is generated from code too.";
  let paths_all = await data_paths();
  function examples_not_is(f_path) {
    let folder = examples_folder();
    let sw = text_starts_with(f_path, folder);
    let n = not(sw);
    return n;
  }
  let paths = list_filter(paths_all, examples_not_is);
  async function lambda(f_path) {
    let changed = await file_identifier_replace(
      f_path,
      f_name_before,
      f_name_after,
    );
    return changed;
  }
  let changes = await list_map_unordered_async(paths, lambda);
  return changes;
}
