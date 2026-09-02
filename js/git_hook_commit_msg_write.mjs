import { arguments_assert } from "./arguments_assert.mjs";
import { git_hook_commit_msg_text } from "./git_hook_commit_msg_text.mjs";
import { git_hook_commit_msg_folders } from "./git_hook_commit_msg_folders.mjs";
import { path_join } from "./path_join.mjs";
import { folder_exists } from "./folder_exists.mjs";
import { not } from "./not.mjs";
import { git_hook_commit_msg_path } from "./git_hook_commit_msg_path.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { file_executable_make } from "./file_executable_make.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
export async function git_hook_commit_msg_write() {
  "Installs the commit message hook into every repository this machine's sweeps commit into, and makes each copy runnable.";
  "This is the one command to run when the hook's text changes. Nothing is edited by hand at any of the places it lands, and the gate over them says so when one has drifted.";
  "The notes repository is asked alongside the source ones, because the same sweeps commit into it and a message written there can name a shorthand exactly as easily.";
  "A FOLDER THAT IS NOT A REPOSITORY IS PASSED OVER RATHER THAN FAILED ON. The list is every folder sitting where repositories are kept, and whether each is a checkout is not something the list knows; writing into a git folder that is not there would throw and take the whole install down with it, over a folder nobody was ever going to commit in.";
  arguments_assert(arguments, 0);
  let text = git_hook_commit_msg_text();
  let folders = await git_hook_commit_msg_folders();
  async function each_folder(folder) {
    let hooks = path_join([folder, ".git", "hooks"]);
    let repo = await folder_exists(hooks);
    if (not(repo)) {
      let skipped = {
        folder,
        installed: false,
      };
      return skipped;
    }
    let p = git_hook_commit_msg_path(folder);
    await file_overwrite(p, text);
    await file_executable_make(p);
    let done = {
      folder,
      installed: true,
      path: p,
    };
    return done;
  }
  let all = await list_map_unordered_async(folders, each_folder);
  let r = {
    written: all,
  };
  return r;
}
