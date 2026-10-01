import { arguments_assert } from "./arguments_assert.mjs";
import { processes_sleep_loop_waiting } from "./processes_sleep_loop_waiting.mjs";
import { processes_sleep_loop_stopped_seconds } from "./processes_sleep_loop_stopped_seconds.mjs";
import { property_get } from "./property_get.mjs";
import { process_line_sleep_loop_deliberate_why_or_null } from "./process_line_sleep_loop_deliberate_why_or_null.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_greater_than } from "./property_greater_than.mjs";
import { process_starter_gone_is } from "./process_starter_gone_is.mjs";
import { list_add } from "./list_add.mjs";
export async function processes_sleep_loop_stopped() {
  arguments_assert(arguments, 0);
  ("The loops that wait by sleeping and have been at it long enough that they are");
  ("not waiting for anything any more.");
  ("Its neighbour reports every one of them and sets no line, because a loop a");
  ("moment old is doing exactly its job. This one draws the line, so that something");
  ("can be asked automatically that otherwise waits on somebody wondering.");
  ("Only ever a list, never an ending, the same as the runaway list beside it.");
  ("Ending somebody else's shell is a judgment about their work rather than about");
  ("this machine.");
  ("Age alone was the whole of the line once, and it named the wrong loops. A watch");
  ("somebody set this morning and is still reading has been alive for hours by");
  ("lunchtime, and was reported here as stopped - so the one way to clear this list");
  ("was to end a run that was working, which is the very thing the paragraph above");
  ("forbids. So age is now half of it, and the other half asks whether anyone is");
  ("still there: a loop is only stopped when the session that started it has gone.");
  ("★ AND THOSE TWO HALVES BOTH ANSWER WRONG FOR A LOOP THAT IS MEANT TO OUTLIVE");
  ("EVERY SESSION. A watch the machine itself keeps is old because it is supposed");
  ("to be, and has no session behind it because none ever started it - so it scored");
  ("full marks on both halves and was named here every single time. Measured");
  ("2026-10-01: it had been named for ten days running, the gate above it threw on");
  ("that one line, and the gate was not in the repo-wide list, so the only thing it");
  ("could ever have caught was hidden behind the only thing it got wrong. A");
  ("detector whose answer is never empty says nothing by being non-empty.");
  ("So there is a third half, and it is a correction rather than an exception: a");
  ("loop waiting for something that really does arrive was never stopped. The");
  ("register of those is kept by name, because no reading of the machine can tell");
  ("one from a session that has died - that is a claim about what a loop is for.");
  let waiting = await processes_sleep_loop_waiting();
  let least = processes_sleep_loop_stopped_seconds();
  let stopped = [];
  for (let row of waiting) {
    ("Asked first, and of the line rather than of the clock, because it is the");
    ("cheapest of the three and the only one that can be wrong about the KIND of");
    ("loop rather than about its age.");
    let line = property_get(row, "line");
    let why = process_line_sleep_loop_deliberate_why_or_null(line);
    let b = null_is(why);
    let meant = not(b);
    if (meant) {
      continue;
    }
    let long_lived = property_greater_than(row, "alive_seconds", least);
    if (not(long_lived)) {
      continue;
    }
    let pid = property_get(row, "pid");
    let gone = process_starter_gone_is(pid);
    if (gone) {
      list_add(stopped, row);
    }
  }
  return stopped;
}
