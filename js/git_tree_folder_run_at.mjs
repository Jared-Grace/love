import { folder_temp } from "./folder_temp.mjs";
import { git_folder_worktree_add } from "./git_folder_worktree_add.mjs";
import { git_folder_worktree_remove } from "./git_folder_worktree_remove.mjs";
import { path_base } from "./path_base.mjs";
import { path_join } from "./path_join.mjs";
export async function git_tree_folder_run_at(
  folder,
  commit,
  lambda$tree_folder,
) {
  "$plain folder";
  "$plain commit";
  "Lays out a repository as it stood at one commit, hands that folder to what was given, and takes the copy away afterwards however it went.";
  "The copy wears the same folder name as the repository it came from. That matters for older code here, which used to reach its neighbours by climbing out of its own folder and back in by name - under any other name those paths point at nothing, and the files load only because the copy is called what the original is called.";
  async function lambda$folder_path(folder_path) {
    let filename = path_base(folder);
    let tree_folder = path_join([folder_path, filename]);
    await git_folder_worktree_add(folder, tree_folder, commit);
    let answered = null;
    try {
      answered = await lambda$tree_folder(tree_folder);
    } finally {
      await git_folder_worktree_remove(folder, tree_folder);
    }
    return answered;
  }
  let result = await folder_temp(lambda$folder_path);
  return result;
}
