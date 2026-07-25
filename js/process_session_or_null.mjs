import { process_env_or_null } from "./process_env_or_null.mjs";
export function process_session_or_null() {
  "Which conversation this command came from. Several of us work in this one";
  "directory at once, so a stream of commands with no session on it is several";
  "streams braided together, and a repeat in the braid means nothing. Nothing";
  "comes back when a person at the keyboard ran the command.";
  let s = process_env_or_null("CLAUDE_CODE_SESSION_ID");
  return s;
}
