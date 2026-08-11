import { arguments_assert } from "./arguments_assert.mjs";
import { claude_sessions_recent } from "./claude_sessions_recent.mjs";
import { not } from "./not.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line_code_ignore } from "./command_line_code_ignore.mjs";
import { claude_session_window_start } from "./claude_session_window_start.mjs";
export async function claude_sessions_restart_claude_session_refill(
  session_given,
  pane_given,
  minutes_given,
) {
  arguments_assert(arguments, 3);
  ("Empty the session of every window except the one this was typed in, then give each saved session a window again.");
  ("Killing comes before opening, not after: the sweep that clears the old windows cannot tell a window it just made from one left over, so opening first would throw away the new ones too.");
  let sessions = await claude_sessions_recent(minutes_given);
  if (not(sessions.length)) {
    let combined = text_combine_multiple([
      "Every Claude was closed and committed, but no transcript was written in the last ",
      minutes_given,
      " minutes, so there was nothing to reopen. Try a wider window?",
    ]);
    return combined;
  }
  let command = text_combine_multiple(["tmux kill-window -a -t ", pane_given]);
  await command_line_code_ignore(command);
  for (let session_saved of sessions) {
    await claude_session_window_start(session_given, session_saved);
  }
  let combined3 = text_combine_multiple([
    "Reopened ",
    sessions.length,
    " sessions as windows beside this one. They are already on the status bar - nothing to attach to.",
  ]);
  return combined3;
}
