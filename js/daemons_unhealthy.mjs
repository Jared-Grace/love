import { list_filter } from "./list_filter.mjs";
import { daemon_healthy_is_not } from "./daemon_healthy_is_not.mjs";
import { daemons_status } from "./daemons_status.mjs";
export async function daemons_unhealthy() {
  ("the daemons that are not fine: empty means every daemon in the list is running and will come back on its own");
  ("anything other than active counts, so inactive, failed, and a unit that was never installed all answer here — all three mean the same thing to whoever is waiting on it");
  let statuses = await daemons_status();
  let v = list_filter(statuses, daemon_healthy_is_not);
  return v;
}
