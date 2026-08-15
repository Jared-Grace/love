import { daemon_restart } from "./daemon_restart.mjs";
import { daemons_names } from "./daemons_names.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function daemons_restart() {
  "Starts every daemon again, so that all of them read the repo as it now stands.";
  "The one to say after a folder the daemons reach has been given a new home. A daemon holds the place it was told about when it started, and a place that has moved does not announce itself - the daemon carries on looking where the folder used to be, finds nothing there, and reports having found nothing, which is exactly what it reports on a quiet day.";
  "Every daemon rather than the ones that look stale, because the reading that decides staleness waits a day before saying so. That wait is right for an ordinary change and wrong for a move: the folder is gone now, and a day of looking in the wrong place is a day of backups nobody took.";
  "Asked of the one list the daemons are created from, so this cannot come to know a different set of daemons than the one that made them.";
  let names = daemons_names();
  async function lambda(f_name) {
    let status = await daemon_restart(f_name);
    return status;
  }
  let restarted = await list_map_async(names, lambda);
  return restarted;
}
