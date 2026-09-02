import { arguments_assert } from "./arguments_assert.mjs";
import { folder_home } from "./folder_home.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read } from "./folder_read.mjs";
import { list_map } from "./list_map.mjs";
import { folder_memory_backup } from "./folder_memory_backup.mjs";
import { list_add } from "./list_add.mjs";
export async function git_hook_commit_msg_folders() {
  "Every folder the commit message hook belongs in - the source repositories and the notes repository - each named from the root.";
  "THEY ARE SPELLED FROM THE ROOT RATHER THAN AS THE FOLDER BEFORE THIS ONE, and that is the whole reason this is its own reading. The ordinary list of repositories is built from the previous folder, which means whichever folder the process happens to be standing in - and the gate over these hooks runs inside a frozen copy of the tree, whose previous folder is where snapshots are kept and holds no repository at all. Asked there, that list answers about the wrong folders entirely and reports every hook missing.";
  "The installer and the gate ask this same reading, so neither can come to look in a place the other does not. A list built separately at each of them would let a hook be installed somewhere the gate never checks, which is the one failure a gate like this exists to rule out.";
  arguments_assert(arguments, 0);
  let home = folder_home();
  let repos = path_join([home, "a", "repos"]);
  let names = await folder_read(repos);
  function each_name(name) {
    let joined = path_join([repos, name]);
    return joined;
  }
  let folders = list_map(names, each_name);
  let backup = folder_memory_backup();
  list_add(folders, backup);
  return folders;
}
