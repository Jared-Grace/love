import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_root_find } from "./folder_repo_root_find.mjs";
import { path_join } from "./path_join.mjs";
import { path_resolve } from "./path_resolve.mjs";
export async function folder_repo_relative_resolve(start_dir, relative) {
  "$plain start_dir";
  "$plain relative";
  "One folder inside this repo as a full path on this machine, found by walking up from wherever the asking code stands until the repo itself is reached.";
  "IT IS ASKED FROM WHERE THE CODE STANDS RATHER THAN FROM WHERE THE PROCESS WAS STARTED. A relative path resolves against whatever folder the process happens to be in, so the same question asked by two processes started in two places quietly answers two different folders. Walking up from the module's own file cannot do that - the module is in exactly one repo, whichever folder anybody launched anything from.";
  "The folder inside the repo is passed in rather than chosen here, which is the whole of what this adds. Its callers each know one folder and nothing else, so each of them was carrying its own copy of the walk-up and the join; there is one copy now, and a caller is the name of a folder.";
  arguments_assert(arguments, 2);
  let repo_root = folder_repo_root_find(start_dir);
  let joined = path_join([repo_root, relative]);
  let result = await path_resolve(joined);
  return result;
}
