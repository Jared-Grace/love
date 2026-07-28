import { null_not_is } from "./null_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { git_ac_call_repos_files_or_all } from "./git_ac_call_repos_files_or_all.mjs";
import { git_acp_call_folder_try } from "./git_acp_call_folder_try.mjs";
import { path_join } from "./path_join.mjs";
import { lock_wait } from "./lock_wait.mjs";
import os from "os";
export async function ai_git_files(f_name, args, files) {
  "The commit itself, once someone else has decided which files it is for. Taking";
  "them as an argument is what lets the two ways in disagree: a named command";
  "hands over what it wrote, and the bare fallback hands over nothing at all";
  "because a change made by hand leaves nothing to hand over.";
  "One at a time across the whole machine, since several conversations commit into";
  "the same folders and two commits at once make a lock file, not a commit.";
  let result = null;
  async function lambda() {
    result = await git_ac_call_repos_files_or_all(f_name, args, files);
    let v = os.homedir();
    let memory_backup_folder = path_join([v, "backup", "love_claude_memory"]);
    let noted = await git_acp_call_folder_try(
      memory_backup_folder,
      f_name,
      args,
    );
    ("the notes are one of the folders this commits into, so they belong in the list of them. Left out, an answer saying every repo committed nothing was being given by a call that had just committed a note - the exact reading the answer exists to prevent, one folder over");
    let some = null_not_is(noted);
    if (some) {
      let repos = property_get(result, "repos");
      list_add(repos, noted);
    }
  }
  await lock_wait(ai_git_files.name, lambda, ai_git_files.name);
  ("answering with what was committed is what makes an empty commit visible: without it a commit that found nothing to do reads exactly like one that worked");
  return result;
}
