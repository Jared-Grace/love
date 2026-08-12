import os from "os";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_first } from "./list_first.mjs";
export function machine_load_minute() {
  arguments_assert(arguments, 0);
  ("How much work this machine has had on it over the last minute, counted in processes - so a number near the count of processors means they are all busy, and a number well under one means the machine is doing nothing.");
  ("The last minute rather than the last five or the last fifteen, because everything asking this wants to know whether the machine is quiet NOW. A longer reading remembers a crowd that has already gone home, and would go on refusing a quiet machine for the quarter of an hour after it went quiet.");
  let minutes = os.loadavg();
  let r = list_first(minutes);
  return r;
}
