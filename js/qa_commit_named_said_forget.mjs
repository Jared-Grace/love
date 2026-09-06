import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { property_null_is } from "./property_null_is.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { greater_than } from "./greater_than.mjs";
import { or } from "./or.mjs";
import { not } from "./not.mjs";
import { property_delete } from "./property_delete.mjs";
import { list_add } from "./list_add.mjs";
export function qa_commit_named_said_forget(
  remembered,
  distances,
  protected_commits,
  ceiling,
) {
  "Takes what the gates said out of every remembered judgement that is neither protected nor near enough to be asked about again, and hands back the whole record beside the names it let go of.";
  "WHAT THE GATES FOUND IS NEVER TOUCHED. Green, the red gates and the names each of them spoke stay exactly as the frozen copy answered them, so every question the record is actually put - what is red, how long it has been red, what may ship - is answered the same afterwards. Only the working that produced the names goes.";
  "EVERY JUDGEMENT COMES BACK, INCLUDING THE ONES NOTHING HAPPENED TO. The record is written back from what is handed out here, so a reading that returned only what it had changed would quietly delete every judgement it left alone. That is also why it is the whole record that comes out rather than a count of what went.";
  "THREE WAYS TO BE SPARED AND THEY ARE ASKED IN THIS ORDER. A judgement with nothing left to say is passed over; one whose commit is protected is kept whatever its distance, because somebody is still going to ask about it; and one that is near enough to be started from again is kept because the answer under it is still worth having. Everything else is insurance on a question nobody will put.";
  "A COMMIT THE FOLDER NO LONGER HOLDS IS FURTHER AWAY RATHER THAN NEARER. It has no distance at all, and nothing can ship from a commit that is gone, so it is let go with the far ones rather than being read as standing at nought.";
  arguments_assert(arguments, 4);
  let expired = [];
  let kept = {};
  for (let commit of object_property_names(remembered)) {
    let entry = property_get(remembered, commit);
    kept[commit] = entry;
    let unspoken = property_null_is(entry, "said");
    if (unspoken) {
      continue;
    }
    let waiting = list_includes(protected_commits, commit);
    if (waiting) {
      continue;
    }
    let behind = property_get_or_null(distances, commit);
    let gone = null_is(behind);
    let beyond = greater_than(behind, ceiling);
    let far = or(gone, beyond);
    let near = not(far);
    if (near) {
      continue;
    }
    property_delete(entry, "said");
    list_add(expired, commit);
  }
  let r = {
    kept,
    expired,
  };
  return r;
}
