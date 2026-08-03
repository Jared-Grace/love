import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { module_dirname } from "./module_dirname.mjs";
import { folder_repo_root_find } from "./folder_repo_root_find.mjs";
import { path_directory } from "./path_directory.mjs";
import { equal } from "./equal.mjs";
export async function process_folder_repos_stand() {
  "Makes sure the process is standing somewhere the repos can be found, moving it into the repo this file lives in when it is not, and says where it ended up.";
  "A repo is found by stepping out of the current folder and back down by name, so the current folder is not incidental to a dispatcher call - it is half of every path the call will build. Standing beside the repos is the only place that stepping means anything.";
  "So the test is exactly that: is the folder above this one the folder the repos sit in. Being inside a repo is not enough and being inside any repo at all is not the question - a repo somewhere else entirely passes that test and still resolves every name to nothing.";
  "When the answer is no, the dispatcher already knows a folder that works, because it is running out of one. The repo holding this file is found from the file's own path rather than from anything the caller said, which is what makes it true wherever the call was made from.";
  "Nothing moves for a call made from a repo, which is every ordinary call. What this ends is the case where a name was looked for in a folder that holds no repos, found nothing, and reported that as an absence rather than as a wrong place to have looked - an error which, sent to the side, reads exactly like a truthful empty answer.";
  let here = folder_current_absolute();
  let beside = path_directory(here);
  let dirname = await module_dirname(import.meta);
  let mine = folder_repo_root_find(dirname);
  let repos = path_directory(mine);
  let already = equal(beside, repos);
  if (already) {
    return here;
  }
  process.chdir(mine);
  return mine;
}
