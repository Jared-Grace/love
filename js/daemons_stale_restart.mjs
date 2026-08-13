import { daemon_restart } from "./daemon_restart.mjs";
import { daemons_stale } from "./daemons_stale.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function daemons_stale_restart() {
  "Restarts exactly those daemons now running code the repo has moved past, then asks again whether any is left.";
  "Asks which daemons are stale rather than being handed a list, so it cannot restart one that is fine and cannot pass over one that is not. That is also what makes it worth being a command at all: the alternative is reading the gate's finding and typing one restart per name, which leaves nothing behind and has to be got right by hand every time.";
  "Asking the same question again afterwards is the only honest way to say it worked, because a restart that did not take looks exactly like one that did - the daemon is up either way, and what it is running is the thing that cannot be seen from outside.";
  "Nothing is restarted when nothing is stale, so this is safe to run at any moment, including straight after itself.";
  let stale = await daemons_stale();
  function lambda$record(record) {
    let f_name = record.daemon;
    return f_name;
  }
  let restarted = list_map(stale, lambda$record);
  await list_map_async(restarted, daemon_restart);
  let left = await daemons_stale();
  let remaining = list_map(left, lambda$record);
  let r = {
    restarted,
    remaining,
  };
  return r;
}
