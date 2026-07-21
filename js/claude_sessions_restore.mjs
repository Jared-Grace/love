import { command_line } from "./command_line.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { claude_sessions_recent } from "./claude_sessions_recent.mjs";
import { claude_session_title } from "./claude_session_title.mjs";
import { claude_running_count } from "./claude_running_count.mjs";
// Reopen every Claude that was running when the machine went down, one tmux
// window each, named after the prompt that started it.
//
// tmux rather than separate terminal windows because the status bar shows all of
// them on one line — so "which of these is waiting on me?" is one glance instead
// of clicking through a dozen tabs. The waiting marker itself is painted by
// .claude/hooks/tmux_window_mark.sh from the Stop and Notification hooks.
const TMUX_SESSION = "claude";
export async function claude_sessions_restore(minutes) {
  // Recency identifies the open-set correctly after a reboot and WRONGLY while
  // sessions are alive — a live session has the freshest transcript of all, so
  // resuming it would put a second process on the same file. Refuse rather than
  // guess which of the recent ids are safe.
  let running = await claude_running_count();
  if (running > 0) {
    return text_combine_multiple([
      "Nothing was changed: ",
      running,
      " Claude sessions are already running, and resuming one that is still alive would put two processes on a single transcript. Restore after a restart, when none are running?",
    ]);
  }
  let sessions = await claude_sessions_recent(minutes);
  if (!sessions.length) {
    return text_combine_multiple([
      "No transcripts were written in the last ",
      minutes,
      " minutes, so there is nothing to restore. Try a wider window?",
    ]);
  }
  let first = sessions[0];
  let opening = text_combine_multiple([
    "tmux new-session -d -P -F #{window_id} -s ",
    TMUX_SESSION,
    " -n ",
    await claude_session_title(property_get(first, "path")),
  ]);
  let window_first = null;
  try {
    window_first = await command_line(opening);
  } catch (running) {
    running;
    return text_combine_multiple([
      "A tmux session named ",
      TMUX_SESSION,
      " is already running, so nothing was changed. Attach to it with: tmux attach -t ",
      TMUX_SESSION,
    ]);
  }
  await claude_window_start(window_first, first);
  for (let session of sessions.slice(1)) {
    let naming = text_combine_multiple([
      "tmux new-window -d -P -F #{window_id} -t ",
      TMUX_SESSION,
      " -n ",
      await claude_session_title(property_get(session, "path")),
    ]);
    let window = await command_line(naming);
    await claude_window_start(window, session);
  }
  await command_line("tmux set-option -t claude mouse on");
  return text_combine_multiple([
    "Restored ",
    sessions.length,
    " sessions. Attach with: tmux attach -t ",
    TMUX_SESSION,
  ]);
  async function claude_window_start(window, session) {
    let id = property_get(window, "stdout").trim();
    // Our own name is the point of the window; let claude's process not fight it.
    await command_line(
      text_combine_multiple([
        "tmux set-option -w -t ",
        id,
        " automatic-rename off",
      ]),
    );
    // send-keys rather than launching claude as the window command, so the shell
    // survives claude exiting and the window stays available to reuse.
    await command_line(
      text_combine_multiple([
        "tmux send-keys -t ",
        id,
        ' "claude --resume ',
        property_get(session, "id"),
        '" Enter',
      ]),
    );
  }
}
