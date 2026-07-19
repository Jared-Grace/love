import { log } from "./log.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { daemon_status } from "./daemon_status.mjs";
import { daemons_names } from "./daemons_names.mjs";
export async function daemons_status() {
  ("one command that answers 'is everything running?' — asking systemd by hand invites the wrong unit name, and a wrong name answers inactive for a daemon that is perfectly healthy");
  ("the same list the daemons are created from, so a daemon can never be running unwatched or watched without existing");
  let v = await list_map_async(daemons_names(), daemon_status);
  log(daemons_status.name, v);
  return v;
}
