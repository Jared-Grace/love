import { arguments_assert } from "./arguments_assert.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { qa_snapshot_ensure_named } from "./qa_snapshot_ensure_named.mjs";
export async function qa_gate_frozen_ensure() {
  arguments_assert(arguments, 0);
  ("Puts the frozen copy the whole-repo run asks its questions of, and says which commit that copy is.");
  ("It always stands on the commit the folder is at, and never on the folder itself. Work nobody has committed is not looked at.");
  ("Which of those two to freeze used to be decided here by asking whether anything was in flight, and the answer to that question is what this replaces. It was the right question for one person at one keyboard. It is the wrong one for ten of us sharing a folder, because it is answered for everybody by anybody: one neighbour part way through saving one file puts every run on the copy form, and a copy of a working folder is nobody's commit, so its answer cannot be written down and cannot be handed to the next person who asks. Counted on the day this was written, the record held ninety three answers and a single modified file made every one of them unreachable.");
  ("Standing on a commit is what makes this run's answer the same kind of thing as a judgement of that commit. That is what lets one be written down for the other, and it is why ten of us on one commit can now pay for the questions once between us instead of ten times each.");
  ("The price is that your own work in flight is not judged, and it is a small one here, for two reasons. Work is committed in small steps, so the commit is almost always what you meant. And a file a neighbour has half written was never this run's business at all - it was noise in the answer, and twice it was a tear across several moments that read as a real complaint. To have your own work judged, commit it, which is the thing a run is asked before anyway.");
  ("A peer committing while this is being asked changes nothing. The commit is read once and the copy is stood on that reading, so a newer commit arriving a moment later leaves this run asking about a real state of the code, just not the newest one.");
  ("The copy is named apart from the one a judging uses, because a judging is not held back by this run's lock and would move a shared worktree out from under it mid-run. Two of these cannot overlap - the run they belong to is taken one at a time on this machine.");
  let commit = await git_head_commit();
  let copy_name = text_frozen("qa_gate");
  let folder = await qa_snapshot_ensure_named(copy_name, commit);
  let r = {
    folder,
    commit,
  };
  return r;
}
