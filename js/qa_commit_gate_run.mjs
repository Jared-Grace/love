import { git_head_commit } from "./git_head_commit.mjs";
import { qa_commit_gate_run_at } from "./qa_commit_gate_run_at.mjs";
export async function qa_commit_gate_run() {
  "Judges whatever commit we are standing on right now";
  "The plain gate reads the working folder, which several of us are editing while it reads - so it answers about a moment nobody can return to, and a complaint from it may be nothing more than somebody saving a file. A frozen copy cannot change while it is read, so its answer belongs to the commit and means the same thing tomorrow";
  "Standing on a commit is the least useful way to ask, because by the time the answer arrives we are usually standing somewhere else - name the commit instead when you want the keeping to pay";
  let commit = await git_head_commit();
  let r = await qa_commit_gate_run_at(commit);
  return r;
}
