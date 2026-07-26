import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { command_line } from "./command_line.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { claude_sessions_recent } from "./claude_sessions_recent.mjs";
import { claude_session_title } from "./claude_session_title.mjs";
import { claude_running_count } from "./claude_running_count.mjs";
import { claude_tmux_session_name } from "./claude_tmux_session_name.mjs";
import { claude_window_claude_start } from "./claude_window_claude_start.mjs";
import { claude_session_window_start } from "./claude_session_window_start.mjs";
("Reopen every Claude that was running when the machine went down, one tmux");
("window each, named after the prompt that started it.");
("");
("tmux rather than separate terminal windows because the status bar shows all of");
('them on one line — so "which of these is waiting on me?" is one glance instead');
("of clicking through a dozen tabs. The waiting marker itself is painted by");
(".claude/hooks/tmux_window_mark.sh from the Stop and Notification hooks.");
let TMUX_SESSION = claude_tmux_session_name();
export async function claude_sessions_restore(minutes) {
  "Recency identifies the open-set correctly after a reboot and WRONGLY while";
  "sessions are alive — a live session has the freshest transcript of all, so";
  "resuming it would put a second process on the same file. Refuse rather than";
  "guess which of the recent ids are safe.";
  let running = await claude_running_count();
  if (greater_than(running, 0)) {
    let combined = text_combine_multiple([
      "Nothing was changed: ",
      running,
      " Claude sessions are already running, and resuming one that is still alive would put two processes on a single transcript. Restore after a restart, when none are running?",
    ]);
    return combined;
  }
  let sessions = await claude_sessions_recent(minutes);
  if (not(sessions.length)) {
    let combined2 = text_combine_multiple([
      "No transcripts were written in the last ",
      minutes,
      " minutes, so there is nothing to restore. Try a wider window?",
    ]);
    return combined2;
  }
  let first = sessions[0];
  let session_path = property_get(first, "path");
  let TITLE_MISSING = await claude_session_title(session_path);
  let opening = text_combine_multiple([
    "tmux new-session -d -P -F #{window_id} -s ",
    TMUX_SESSION,
    " -n ",
    TITLE_MISSING,
  ]);
  let window_first = null;
  try {
    window_first = await command_line(opening);
  } catch (already_open) {
    already_open;
    let combined3 = text_combine_multiple([
      "A tmux session named ",
      TMUX_SESSION,
      " is already running, so nothing was changed. Attach to it with: tmux attach -t ",
      TMUX_SESSION,
    ]);
    return combined3;
  }
  let window_id = property_get(window_first, "stdout").trim();
  let session_id = property_get(first, "id");
  await claude_window_claude_start(window_id, session_id);
  for (let session of sessions.slice(1)) {
    await claude_session_window_start(TMUX_SESSION, session);
  }
  let command = text_combine_multiple([
    "tmux set-option -t ",
    TMUX_SESSION,
    " mouse on",
  ]);
  await command_line(command);
  let combined4 = text_combine_multiple([
    "Restored ",
    sessions.length,
    " sessions. Attach with: tmux attach -t ",
    TMUX_SESSION,
  ]);
  return combined4;
}
