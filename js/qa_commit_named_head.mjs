import { fn_name } from "./fn_name.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { qa_commit_named_at_when_wanted } from "./qa_commit_named_at_when_wanted.mjs";
export async function qa_commit_named_head() {
  "Judges the commit we are standing on, unless one is already going or the machine is full, and says what it decided";
  "Standing on a commit is the one thing that needs no argument, so this is the door to walk through when you want the newest answer rather than an answer about some particular commit. Everything a deploy reads is written by the judging underneath, so what this does is make the record catch up to where the repo is now.";
  "It goes through the guarded door rather than the plain one because it is meant to be called over and over, by whoever and by whatever, and a quarter of an hour of judging started on a full machine is a quarter of an hour taken from everybody else on it.";
  ("The quarter of an hour named just above is one condition out of several rather than a constant: the same questions over the same frozen copy have been measured at about two and a half minutes split across a quiet machine and at fifty three when three judgings contend. So a run of this that feels slow is evidence of nothing on its own, and what every run on this machine has cost beside the load it ran under is read back by ",
    fn_name("qa_shares_taken_log_report"),
    ".");
  let commit = await git_head_commit();
  let r = await qa_commit_named_at_when_wanted(commit);
  return r;
}
