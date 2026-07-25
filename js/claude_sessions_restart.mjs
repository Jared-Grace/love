import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { sleep } from "./sleep.mjs";
import { ai_git } from "./ai_git.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line_code_ignore } from "./command_line_code_ignore.mjs";
import { claude_running_count } from "./claude_running_count.mjs";
import { claude_sessions_restore } from "./claude_sessions_restore.mjs";
import { claude_tmux_session_name } from "./claude_tmux_session_name.mjs";
let SETTLE_MS = 500;
let SETTLE_TRIES = 20;
export async function claude_sessions_restart(minutes) {
  "Close every Claude and reopen the same set in a fresh tmux session.";
  "One command rather than four, because the four steps only work in this order and each one is a gate on the next. Commit first: a killed Claude never reaches its stopping hook, so the automatic commit that hook would have made is lost. Then quit them all, because the restore refuses while any session is alive - the freshest transcript of all belongs to a live session, and resuming it would put two processes on one file. Then kill the old tmux session, because the restore creates its session and cannot reuse one that already exists. Only then restore. Done by hand, the order has to be remembered every time, and getting it wrong fails late.";
  "Run it from a terminal OUTSIDE tmux. It kills every process named claude, including the one that invoked it, so this is a command for the human at the keyboard.";
  let session = claude_tmux_session_name();
  let inside = await claude_session_current_is(session);
  if (inside) {
    let combined = text_combine_multiple([
      "Nothing was changed: this terminal is inside the ",
      session,
      " tmux session, and killing that session would kill this command before it could restore anything. Run it from a terminal outside tmux?",
    ]);
    return combined;
  }
  await ai_git();
  await command_line_code_ignore("pkill -x claude");
  let remaining = await claude_sessions_settle();
  if (greater_than(remaining, 0)) {
    let combined2 = text_combine_multiple([
      "Nothing was restored: ",
      remaining,
      " Claude sessions are still alive after being asked to quit, and resuming one that is still running would put two processes on a single transcript. Close those by hand and try again?",
    ]);
    return combined2;
  }
  let command = text_combine_multiple(["tmux kill-session -t ", session]);
  await command_line_code_ignore(command);
  let restored = await claude_sessions_restore(minutes);
  return restored;
  async function claude_session_current_is(session) {
    "Which tmux session owns this terminal, if any. The pane is read from the environment rather than written into the command, because commands here run with no shell and would pass a dollar sign through as text.";
    let pane = process.env.TMUX_PANE;
    if (not(pane)) {
      return false;
    }
    let asking = text_combine_multiple([
      "tmux display-message -p -t ",
      pane,
      " #{session_name}",
    ]);
    let result = await command_line_code_ignore(asking);
    let name = property_get(result, "stdout").trim();
    let same = equal(name, session);
    return same;
  }
  async function claude_sessions_settle() {
    "pkill returns the moment the signal is sent, not when the processes are gone, so wait for the count to actually reach zero before restoring.";
    let running = await claude_running_count();
    for (let attempt = 0; less_than(attempt, SETTLE_TRIES); attempt++) {
      if (equal(running, 0)) {
        let r = 0;
        return r;
      }
      await sleep(SETTLE_MS);
      running = await claude_running_count();
    }
    return running;
  }
}
