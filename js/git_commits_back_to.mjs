import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_equal_not } from "./list_filter_equal_not.mjs";
import { list_add } from "./list_add.mjs";
import { assert_message } from "./assert_message.mjs";
import { equal } from "./equal.mjs";
export async function git_commits_back_to(folder, commit_floor) {
  "The commits from the one we are standing on back to the one named, newest first and the named one last. Read-only.";
  "The named commit is included rather than stopped short of, because whoever names it is saying their work is in it - so it is the oldest thing they would ship, not the first thing they would refuse.";
  "That it lies behind us is checked rather than assumed. Everyone here commits to the one branch, so a name that is not behind us is not an ordinary case to be handled quietly - it is somebody having named the wrong commit, and walking a line that never led here would answer about commits nobody is standing on.";
  "The full names are answered because they are used as keys, and a short name is unique only until the day it is not.";
  let named = await git_folder_run(folder, ["rev-parse", commit_floor]);
  let floor_full = text_trim(named);
  let based = await git_folder_run(folder, [
    "merge-base",
    commit_floor,
    "HEAD",
  ]);
  let base = text_trim(based);
  let behind = equal(base, floor_full);
  assert_message(
    behind,
    "the commit named as the oldest one to ship is not behind the one we are standing on, so there is no walk from here back to it - was it named from another line of work?",
  );
  let range = text_combine_multiple([floor_full, "..HEAD"]);
  let printed = await git_folder_run(folder, ["rev-list", range]);
  let s = text_trim(printed);
  let lines = text_split_newline(s);
  let commits = list_filter_equal_not(lines, "");
  list_add(commits, floor_full);
  return commits;
}
