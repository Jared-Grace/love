import { arguments_assert } from "./arguments_assert.mjs";
import { git_head_commit } from "./git_head_commit.mjs";
import { text_frozen } from "./text_frozen.mjs";
import { qa_snapshot_ensure_named } from "./qa_snapshot_ensure_named.mjs";
import { qa_snapshot_owner } from "./qa_snapshot_owner.mjs";
import { lock_wait } from "./lock_wait.mjs";
import { fn_name } from "./fn_name.mjs";
export async function qa_gate_frozen_aside_turn(asking) {
  "Gives a few gates asked by name a frozen copy of their own, at the commit the folder is at when their turn comes, and asks them there one set at a time. Hands the folder and the commit to what it is given, and answers with what that answered.";
  "A COPY OF ITS OWN BECAUSE THE WHOLE-REPO RUN TAKES A TURN AND THESE DO NOT. They used to stand in the copy that run stands in. Started during a run, they moved the copy under it, and the rest of that run asked its gates about another commit and filed the answer under the first. A run starting moved it under them just the same, and either way nothing complained, because a wrong answer here looks exactly like a right one.";
  "A TURN OF THEIR OWN BECAUSE ONE MORE SHARED COPY WOULD ONLY MOVE THE CLASH. Two sets asked at once would move this copy under each other. It is not the whole-repo run's turn, because that takes up to an hour and a question about one gate should not wait behind it.";
  "THE COMMIT IS READ ONCE THE TURN HAS COME, so a set that waited is asked about the state of the code when it runs, and the copy cannot move between that reading and the last of its gates.";
  "THE COPY IS MADE THE SAME WAY THE WHOLE-REPO RUN MAKES ITS OWN and never a second way, so what is watched here is the place that run would put the gate and not a lookalike.";
  arguments_assert(arguments, 1);
  async function lambda() {
    let commit = await git_head_commit();
    let copy_name = text_frozen("qa_gate_aside");
    let folder = await qa_snapshot_ensure_named(copy_name, commit);
    let answer = await asking(folder, commit);
    return answer;
  }
  let who = qa_snapshot_owner();
  let r = await lock_wait(fn_name("qa_gate_frozen_aside_turn"), lambda, who);
  return r;
}
