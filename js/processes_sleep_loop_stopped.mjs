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
  ("Only ever a list, never an ending, the same as the runaway list beside it. The");
  ("shell belongs to a session that is still there behind it, and ending somebody");
  ("else's shell is a judgment about their work rather than about this machine.");
  let waiting = await processes_sleep_loop_waiting();
  let least = processes_sleep_loop_stopped_seconds();
  let stopped = [];
  for (let row of waiting) {
    let long_lived = property_greater_than(row, "alive_seconds", least);
    if (long_lived) {
      list_add(stopped, row);
    }
  }
  return stopped;
}
