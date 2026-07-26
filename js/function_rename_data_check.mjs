import { data_paths } from "./data_paths.mjs";
import { file_identifier_replace } from "./file_identifier_replace.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function function_rename_data_check(f_name_before, f_name_after) {
  "The data folder spells function names as plain text - the arguments of an example command, the sources it declares before and after, an alias the human types, the entries a gate ratchets against - and an example names the transform it shows in an import path as well. None of those files is a function, so no sweep over the tree of functions reaches them, and a rename that skips them leaves the folder naming something that is gone. What the reader sees then is a red gate for a reason the rename never mentioned. The delete command asks the same question of the same folder, so the two agree on what counts as a name still being spoken for.";
  let paths = await data_paths();
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
