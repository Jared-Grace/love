import { file_exists } from "./file_exists.mjs";
import { fn_name } from "./fn_name.mjs";
import { folder_js } from "./folder_js.mjs";
import { path_join } from "./path_join.mjs";
export async function qa_snapshot_build_fn_name(folder) {
  "Which building command a copy of the repo is actually able to run, given that the copy stands at a commit and answers only to the names that commit knew";
  "The copy runs the dispatcher out of its own files, so a command is asked for by a name that has to exist THERE and not here. Every name this repo learns after a commit is a name that commit never had, and asking a copy for one is not a mistaken spelling but the ordinary state of every commit older than the name - which is every commit already judged, on the day the name is written";
  "So the leaner command is used where the copy has it and the older one where it does not, and what decides is the file being on the copy's disk rather than anything reasoned about dates. That question is asked of the copy after it has been put back to its commit, which is the only moment the answer is about the commit being built";
  "This is not a kindness to old commits that can be dropped later. A commit is judged once and deployed possibly much later, so the set of commits older than any change to this path is never empty and never stops being deployed from";
  let leaner = fn_name("html_latest_build_promote");
  let js = folder_js();
  let file_name = leaner + ".mjs";
  let path = path_join([folder, js, file_name]);
  let there = await file_exists(path);
  if (there) {
    return leaner;
  }
  ("The older command builds the local bundle for trying things out as well as the one that ships. That is waste inside a copy nobody serves from, and it is the waste this whole question exists to skip - but a build that wastes a minute is a build, and a build asking for a name that is not there is nothing at all");
  let older = fn_name("html_update_latest_promote");
  return older;
}
