import { git_folder_run } from "./git_folder_run.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_split_newline } from "./text_split_newline.mjs";
import { list_filter_equal_not } from "./list_filter_equal_not.mjs";
import { list_add } from "./list_add.mjs";
import { assert_message } from "./assert_message.mjs";
import { equal } from "./equal.mjs";
export async function git_commits_between(folder, newest, oldest) {
  "The commits from the newer one named back to the older one named, newest first and the older one last. Read-only.";
  "Both ends are included rather than stopped short of. Whoever names the older end is saying their work is in it, so it is the oldest thing they would ship rather than the first thing they would refuse - and the newer end is where they mean to start looking.";
  "That the older one lies behind the newer one is checked rather than assumed. Everyone here commits to the one branch, so a pair that does not line up is not an ordinary case to be handled quietly - it is somebody having named the wrong commit, and walking a line that never led to the newer end would answer about commits nobody is standing on.";
  "The full names are answered because they are used as keys, and a short name is unique only until the day it is not. Both ends are resolved for the same reason, so a caller may hand over whatever git understands and still get back something a record can be kept under.";
  let named_newest = await git_folder_run(folder, ["rev-parse", newest]);
  let newest_full = text_trim(named_newest);
  let named_oldest = await git_folder_run(folder, ["rev-parse", oldest]);
  let oldest_full = text_trim(named_oldest);
  let based = await git_folder_run(folder, [
    "merge-base",
    oldest_full,
    newest_full,
  ]);
  let base = text_trim(based);
  let behind = equal(base, oldest_full);
  assert_message(
    behind,
    "the commit named as the oldest one to ship is not behind the one named as the newest, so there is no walk from one back to the other - was it named from another line of work?",
  );
  let range_text = text_combine_multiple([oldest_full, "..", newest_full]);
  let printed = await git_folder_run(folder, ["rev-list", range_text]);
  let s = text_trim(printed);
  let lines = text_split_newline(s);
  let commits = list_filter_equal_not(lines, "");
  list_add(commits, oldest_full);
  return commits;
}
