import { property_get } from "./property_get.mjs";
import { process_starter_gone_is } from "./process_starter_gone_is.mjs";
import { not } from "./not.mjs";
import { property_greater_than } from "./property_greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { processes_sleep_loop_waiting } from "./processes_sleep_loop_waiting.mjs";
import { processes_sleep_loop_stopped_seconds } from "./processes_sleep_loop_stopped_seconds.mjs";
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
  let waiting = await processes_sleep_loop_waiting();
  let least = processes_sleep_loop_stopped_seconds();
  let stopped = [];
  for (let row of waiting) {
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
