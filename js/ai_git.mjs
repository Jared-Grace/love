import { git_message_hand_made } from "./git_message_hand_made.mjs";
import { files_to_commit_take } from "./files_to_commit_take.mjs";
import { ai_git_files } from "./ai_git_files.mjs";
Error.stackTraceLimit = Infinity;
export async function ai_git() {
  "Commits without claiming that any command produced the change — the message is";
  "one bare word. For a hand-made edit that is the honest report, and reading those";
  "back out of the log is how the changes no named unit could make are found.";
  "Sweeps everything rather than any list of files, because a hand-made edit leaves";
  "no note of itself, and committing only what the commands wrote would step over";
  "exactly the change this was called for.";
  "The note is still emptied first: the sweep covers those files anyway, and a note";
  "left standing would have the next command claim them a second time.";
  await files_to_commit_take();
  let none = [];
  let args = [];
  let result = await ai_git_files(git_message_hand_made(), args, none);
  return result;
}
