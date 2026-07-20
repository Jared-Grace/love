import { list_filter_property_not } from "./list_filter_property_not.mjs";
import { daemons_status } from "./daemons_status.mjs";
export async function daemons_unhealthy() {
  ("the daemons that are not running: empty means every daemon in the list is up");
  ("anything other than active counts as unhealthy — inactive, failed, and a unit that was never installed all answer here, and all three mean the same thing to whoever is waiting on it");
  let statuses = await daemons_status();
  let v = list_filter_property_not(statuses, "active", "active");
  return v;
}
