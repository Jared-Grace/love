import { folder_read_files } from "./folder_read_files.mjs";
import { text_suffix_without } from "./text_suffix_without.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_prefix_change } from "./text_prefix_change.mjs";
import { list_map } from "./list_map.mjs";
import { list_filter } from "./list_filter.mjs";
import { each } from "./each.mjs";
import { js_identifiers_rename_dir_lambda } from "./js_identifiers_rename_dir_lambda.mjs";
import { path_join } from "./path_join.mjs";
import { file_js_transform } from "./file_js_transform.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { file_move } from "./file_move.mjs";
("Bulk-rename every fn under a name prefix across a flat directory (one ./<name>.mjs per fn):");
("change prefix_before to prefix_after on each matching identifier at every site in every file,");
("dedupe + repoint the moved imports, then move each matching file. Hermetic — no global");
("dictionary — so it is the sandbox-testable heart of the repo-wide bulk-rename tool. Assumes");
("prefix_after names are disjoint from prefix_before names (a true prefix migration), so the");
("per-pair renames do not chain into one another.");
export async function js_identifiers_prefix_rename_dir(
  dir,
  prefix_before,
  prefix_after,
) {
  let files = await folder_read_files(dir);
  function name_of(file) {
    let name = text_suffix_without(file, ".mjs");
    return name;
  }
  let names = list_map(files, name_of);
  function matches(name) {
    let m = text_starts_with(name, prefix_before);
    return m;
  }
  let matched = list_filter(names, matches);
  function to_pair(name) {
    let after = text_prefix_change(name, prefix_before, prefix_after);
    let pair = {
      before: name,
      after,
    };
    return pair;
  }
  let pairs = list_map(matched, to_pair);
  function rename_all(ast) {
    function apply(pair) {
      let lambda = js_identifiers_rename_dir_lambda(pair.before, pair.after);
      lambda(ast);
    }
    each(pairs, apply);
  }
  async function transform_file(file) {
    let f_path = path_join([dir, file]);
    await file_js_transform(f_path, rename_all);
  }
  await list_map_unordered_async(files, transform_file);
  async function move(pair) {
    let path_before = js_file_dir_path(dir, pair.before);
    let path_after = js_file_dir_path(dir, pair.after);
    await file_move(path_before, path_after);
  }
  await list_map_unordered_async(pairs, move);
}
