import { git_message_safe } from "./git_message_safe.mjs";
export function git_call_message(f_name, args) {
  "The message a commit carries is the command that produced it — the name that";
  "was run, then what it was run on. A log of these reads as a record of how the";
  "repo was built, and a message that names nothing is itself the signal that no";
  "named unit did that change.";
  let joined = [f_name].concat(args).join(" ");
  let safe = git_message_safe(joined);
  return safe;
}
