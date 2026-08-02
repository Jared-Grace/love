import { property_greater_than } from "./property_greater_than.mjs";
import { text_starts_with_not } from "./text_starts_with_not.mjs";
import { examples_folder } from "./examples_folder.mjs";
import { list_filter } from "./list_filter.mjs";
import { data_paths } from "./data_paths.mjs";
import { file_identifier_replace } from "./file_identifier_replace.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function function_rename_data_check(f_name_before, f_name_after) {
  "The data folder spells function names as plain text - an alias the human types, the entries a gate ratchets against - and none of those files is a function, so no sweep over the tree reaches them and a rename that skips them leaves the folder naming something that is gone. What the reader sees then is a red gate for a reason the rename never mentioned. The example corpus is left out here because it is code: it gets the same treatment the rest of the repo gets, by the tree, where a reference can be told apart from a word that merely reads the same. What remains is the part written in another language, and it is read by the letters only until it is generated from code too.";
  let paths_all = await data_paths();
  function examples_not_is(f_path) {
    let folder = examples_folder();
    let n = text_starts_with_not(f_path, folder);
    return n;
  }
  let paths = list_filter(paths_all, examples_not_is);
  ("What it rewrote is named file by file, with a count beside each. Sweeping a name by the letters cannot tell a reference from an ordinary word that reads the same, and this folder holds lesson prose as well as registers of names, so the one honest thing a sweep can do is say exactly where it went - a rename that quietly rewrote a hundred and seventy-three words of a lesson looks, from the outside, like a rename that worked.");
  async function lambda(f_path) {
    let sites = await file_identifier_replace(
      f_path,
      f_name_before,
      f_name_after,
    );
    let change = {
      f_path,
      sites,
    };
    return change;
  }
  let changes_all = await list_map_unordered_async(paths, lambda);
  function changed_is(change) {
    let any = property_greater_than(change, "sites", 0);
    return any;
  }
  let changes = list_filter(changes_all, changed_is);
  return changes;
}
