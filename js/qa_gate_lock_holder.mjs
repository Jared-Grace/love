import { fn_name } from "./fn_name.mjs";
import { process_session_or_null } from "./process_session_or_null.mjs";
export function qa_gate_lock_holder() {
  ("who a waiting run is told is ahead of it: the conversation when there is one, and otherwise the command that took the lock, such as ",
    fn_name("qa_commit_named_auto"),
    " or q");
  ("Not the frozen copy's owner, though the two used to be one word. That word says only that no conversation asked, and a job left running in the background asks with no conversation just as a person at the keyboard does - so a wait behind the background job read as being behind the person, who had run nothing. The command is what tells those two apart, and it is a single word, so it stays fit to be part of a file name in the line.");
  ("Not picked: renaming the copy's owner as well. The owner names a folder held in memory, so a second name for the background job would be a second whole copy of the repo held in memory beside the person's, for nothing but a clearer line of log.");
  let session = process_session_or_null();
  if (session) {
    return session;
  }
  let command = process.argv[2];
  if (command) {
    return command;
  }
  let r = "keyboard";
  return r;
}
