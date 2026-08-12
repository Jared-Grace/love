import { arguments_assert } from "./arguments_assert.mjs";
import { null_is } from "./null_is.mjs";
import { qa_commit_told_judged } from "./qa_commit_told_judged.mjs";
import { qa_commit_named_path } from "./qa_commit_named_path.mjs";
import { qa_commit_kept_file } from "./qa_commit_kept_file.mjs";
import { property_get } from "./property_get.mjs";
import { json_to } from "./json_to.mjs";
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
