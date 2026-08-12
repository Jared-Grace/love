import { arguments_assert } from "./arguments_assert.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_files_uncommitted_folder } from "./git_files_uncommitted_folder.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { qa_tree_ensure } from "./qa_tree_ensure.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { qa_snapshot_ensure_named } from "./qa_snapshot_ensure_named.mjs";
export async function qa_gate_frozen_ensure() {
  arguments_assert(arguments, 0);
  ("Puts the frozen copy the whole-repo run asks its questions of, and says which commit that copy is - or that it is nobody's commit.");
  ("Two ways of freezing already existed and the run only ever used one of them. Copying the working folder takes whatever is there, work nobody has committed included, which is the whole point of a run somebody types before committing. Standing a worktree on a commit takes only what was committed, and cannot show in-flight work at all.");
  ("Which one is right is not a preference, it is a question about the folder: when nobody has anything in flight, the working folder IS a commit, and the two ways of freezing would produce the same code. So the commit form is used whenever it can be, and the copy form whenever it must be.");
  ("What that buys is not speed in itself. The two copies are not the same artifact - the copied one is made without any history, and the worktree has git working inside it - so a gate that reaches the history is red in one and green in the other, and until now no answer from one could be traded for an answer from the other. Standing on a commit is what makes the run's answer the same kind of thing as a judgement of that commit, which is what lets one be written down for the other.");
  ("A peer committing between the two questions changes nothing. Clean means the folder equals some commit; if that commit is a newer one by the time it is asked for, the copy is still exactly the folder that was there. A peer writing a file a moment after leaves the run asking about the commit rather than about the file - which is a real state of the code, and better than the alternative it replaces, which was a copy that could be a tear across several moments.");
  ("The copy is named apart from the one a judging uses, because a judging is not held back by this run's lock and would move a shared worktree out from under it mid-run. Two of these cannot overlap - the run they belong to is taken one at a time on this machine.");
  let here = folder_current_absolute();
  let waiting = await git_files_uncommitted_folder(here);
  let flying = list_empty_not_is(waiting);
  if (flying) {
    let copied = await qa_tree_ensure();
    let r = {
      folder: copied,
      commit: null,
    };
    return r;
  }
  let commit = await git_head_commit();
  let copy_name = text_frozen("qa_gate");
  let folder = await qa_snapshot_ensure_named(copy_name, commit);
  let r2 = {
    folder,
    commit,
  };
  return r2;
}
