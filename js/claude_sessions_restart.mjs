import { claude_sessions_restart_claude_session_refill } from "./claude_sessions_restart_claude_session_refill.mjs";
import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { less_than } from "./less_than.mjs";
import { not } from "./not.mjs";
import { sleep } from "./sleep.mjs";
import { ai_git } from "./ai_git.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { command_line_code_ignore } from "./command_line_code_ignore.mjs";
import { command_line_interactive } from "./command_line_interactive.mjs";
import { claude_running_count } from "./claude_running_count.mjs";
import { claude_sessions_restore } from "./claude_sessions_restore.mjs";
import { claude_tmux_session_name } from "./claude_tmux_session_name.mjs";
let SETTLE_MS = 500;
let SETTLE_TRIES = 20;
export async function claude_sessions_restart(minutes) {
  "Close every Claude and reopen the same set, in one command, from wherever it is typed.";
  "One command rather than four, because the four steps only work in this order and each one is a gate on the next. Commit first: a killed Claude never reaches its stopping hook, so the automatic commit that hook would have made is lost. Then quit them all, because reopening refuses while any session is alive - the freshest transcript of all belongs to a live session, and resuming it would put two processes on one file. Then clear the old windows away. Only then reopen. Done by hand the order has to be remembered every time, and getting it wrong fails late.";
  "Two endings, because where it was typed changes what is possible. Typed INSIDE the tmux session, it cannot kill that session - it would kill this command mid-flight and leave everything closed and nothing reopened - so it empties the session instead, keeping only the window it was typed in, and refills it. That path needs no attaching at all: the human is already looking at the window list being rebuilt. Typed OUTSIDE, there is nothing to protect, so the session is killed, rebuilt from nothing, and the terminal is handed to it - which is what makes it one command there too.";
  let session = claude_tmux_session_name();
  let pane = process.env.TMUX_PANE;
  let inside = await claude_pane_session_is(pane, session);
  await ai_git();
  await command_line_code_ignore("pkill -x claude");
  let remaining = await claude_sessions_settle();
  if (greater_than(remaining, 0)) {
    let combined = text_combine_multiple([
      "Nothing was reopened: ",
      remaining,
      " Claude sessions are still alive after being asked to quit, and resuming one that is still running would put two processes on a single transcript. Close those by hand and try again?",
    ]);
    return combined;
  }
  if (inside) {
    let refilled = await claude_sessions_restart_claude_session_refill(
      session,
      pane,
      minutes,
    );
    return refilled;
  }
  let command = text_combine_multiple(["tmux kill-session -t ", session]);
  await command_line_code_ignore(command);
  let restored = await claude_sessions_restore(minutes);
  let command2 = text_combine_multiple(["tmux attach -t ", session]);
  await command_line_interactive(command2);
  return restored;
  async function claude_pane_session_is(pane_given, session_given) {
    "Whether this terminal is a pane of the session about to be rebuilt. The pane is read from the environment rather than written into the command, because commands here run with no shell and would pass a dollar sign through as text.";
    if (not(pane_given)) {
      return false;
    }
    let asking = text_combine_multiple([
      "tmux display-message -p -t ",
      pane_given,
      " #{session_name}",
    ]);
    let result = await command_line_code_ignore(asking);
    let name = property_get(result, "stdout").trim();
    let same = equal(name, session_given);
    return same;
  }
  async function claude_sessions_settle() {
    "pkill returns the moment the signal is sent, not when the processes are gone, so wait for the count to actually reach zero before reopening.";
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
