import { file_module_import } from "./file_module_import.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_repo_love } from "./folder_repo_love.mjs";
import { git_file_path_at } from "./git_file_path_at.mjs";
import { git_tree_folder_run_at } from "./git_tree_folder_run_at.mjs";
import { js_file_suffix } from "./js_file_suffix.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine } from "./text_combine.mjs";
export async function app_replace_rule_sets_commit(commit) {
  "$plain commit";
  "The sets of rules the replace app offered at one commit, read out of the repository's own history rather than out of the code checked out now.";
  "A page kept from an earlier build knows only the goals of its own day. Testing it against today's list names goals that page never had, and the test fails for a reason that is not a fault - so the page and the list it is checked against have to come from the same moment, and this is where that moment is asked for.";
  let f_name = fn_name("app_replace_rule_sets");
  let suffix = js_file_suffix();
  let file_name = text_combine(f_name, suffix);
  let folder = folder_repo_love();
  let file_path = await git_file_path_at(folder, commit, file_name);
  async function lambda$tree_folder(tree_folder) {
    let module_path = path_join([tree_folder, file_path]);
    let module = await file_module_import(module_path);
    let rule_sets_fn = property_get(module, f_name);
    let sets = rule_sets_fn();
    return sets;
  }
  let rule_sets = await git_tree_folder_run_at(
    folder,
    commit,
    lambda$tree_folder,
  );
  return rule_sets;
}
