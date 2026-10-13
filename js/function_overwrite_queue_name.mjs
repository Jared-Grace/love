import { equal } from "./equal.mjs";
import { process_session_or_null } from "./process_session_or_null.mjs";
export function function_overwrite_queue_name() {
  "The queue file's name inside the throwaway folder, which carries the conversation it belongs to.";
  "Every conversation drafts in the same folder, so one queue file shared by all of them lets a peer replace the names between the drafter writing them and the human running them - and the human then lets through drafts they were never told about. That happened. A file named after the conversation can only be written by the one conversation that asks the human to run it, because the run reads the same name from the same conversation.";
  "With no conversation there is no queue anyone could have filled for this run, so it refuses rather than falling back to a shared name.";
  let session = process_session_or_null();
  if (equal(session, null)) {
    throw new Error(
      "no conversation to read the overwrite queue for: run it with ! inside the conversation that queued the names",
    );
  }
  let name = "overwrite_queue_" + session + ".txt";
  return name;
}
