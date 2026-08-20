import { arguments_assert } from "./arguments_assert.mjs";
import { folders_waiting_to_be_deleted_overdue } from "./folders_waiting_to_be_deleted_overdue.mjs";
import { folder_waiting_to_be_deleted_days_max } from "./folder_waiting_to_be_deleted_days_max.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_size } from "./list_size.mjs";
export async function folders_waiting_to_be_deleted_gate_run() {
  arguments_assert(arguments, 0);
  ("Gate: nothing has been waiting for somebody to decide about it for longer than a month.");
  ("This is the half that makes a bin worth having. Moving something nobody is sure about out of the way clears the gate that found it, and on its own that trades a red gate for a quiet pile - the gate was asking a person to decide, and the pile asks nobody anything. So the bin comes with a clock: whatever goes in is still a question, and after long enough of nobody answering it, it is a question again out loud.");
  ("It is measured against nothing rather than against what was already there, because the bin was empty when this was written and everything that ever enters it does so through one command. A thing that is old enough to fail this was put there by somebody who could not decide, and the answer is never to bless it - it is to decide, or to say out loud that it is still waiting by putting it in again today.");
  let offenders = await folders_waiting_to_be_deleted_overdue();
  let days = folder_waiting_to_be_deleted_days_max();
  list_empty_is_assert_json(offenders, {
    offenders,
    days,
    hint: "these have been waiting for somebody who knows to decide, for longer than anybody meant them to - so decide: move the folder onto the live name, or delete it on purpose",
  });
  let r = {
    overdue: list_size(offenders),
    days,
  };
  return r;
}
