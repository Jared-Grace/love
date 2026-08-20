import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { qa_commit_told_judged } from "./qa_commit_told_judged.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { qa_commit_kept_file } from "./qa_commit_kept_file.mjs";
import { property_get } from "./property_get.mjs";
import { json_to } from "./json_to.mjs";
import { not } from "./not.mjs";
export async function qa_gate_told_filed(commit, told, before) {
  "$plain commit";
  "$plain told";
  "$plain before";
  arguments_assert(arguments, 3);
  ("Writes what the whole-repo run found into the shared record of judged commits, when the copy it asked stood on a commit at all, and says out loud whether it managed to.");
  ("The run already does everything a judging does - it freezes a copy, asks it every question the files alone can answer, and reads the answer. Until now it threw that away, and the next person to ask about the same commit paid a quarter of an hour for it again. They are the same questions asked of the same kind of copy, so the answer is the same answer.");
  ("Nothing is written when the copy was of the working folder rather than of a commit, because such an answer is about a state of the code that has no name and that nobody can ask for again.");
  ("Whether it was written is printed rather than left silent. An answer that quietly is not being kept looks exactly like one that is, and the reason it was not - a neighbour with work in flight, or one that moved while the gates were being asked - is the sort of thing somebody can put right in a minute if they are told.");
  let nameless = null_is(commit);
  if (nameless) {
    return false;
  }
  ("Nothing is written when a share of the gates stopped without complaining about any gate either. Such a run found nothing out: it is not green, and it cannot say what is wrong, so every question a later reader puts to it comes back empty - which is what a commit already answers before anybody judges it.");
  ("Written down all the same, it is worse than useless. It looks judged, so it is never judged again; and the cheap reading of what is red hands back an empty list off the front of the record, which anybody reading it takes for nothing is red. That is the reading a deployment is meant to lean on, and it once said the repo was clean while five and twenty gates were complaining.");
  ("Declining costs a quarter of an hour to somebody who asks about this commit later, and that is the right way round to be wrong. Having no answer keeps the deployment waiting; having a false one lets it through.");
  ("Whether the run answered is read off what was handed here rather than worked out again from the green and the named gates. It was worked out share by share, where a share that stopped is still distinguishable, and one share stopping while another complained leaves a green of false and a list of real names - a shape indistinguishable from a whole run, standing for the third of the questions that share never got to ask.");
  let answered = property_get(told, "answered");
  if (not(answered)) {
    console.log(
      "\nnot kept for commit " +
        commit +
        ": a share of the gates stopped without complaining about any gate, so this run found nothing out and there is nothing worth writing down. Whatever stopped it is printed above. Running it again once that is put right is the whole of the fix",
    );
    return false;
  }
  let kept = await qa_commit_told_judged(told);
  let path = qa_commit_named_path();
  let stamped = await qa_commit_kept_file(commit, kept, path, before);
  let filed = property_get(stamped, "filed");
  if (filed) {
    console.log("\nkept as the answer for commit " + commit);
    return true;
  }
  let silent = property_get(stamped, "silent");
  let moved = property_get(stamped, "moved");
  console.log(
    "\nnot kept for commit " +
      commit +
      ": " +
      json_to({
        silent,
        moved,
      }),
  );
  return false;
}
