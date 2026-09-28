import { daemons_recycled } from "./daemons_recycled.mjs";
import { list_includes } from "./list_includes.mjs";
import { fn_name } from "./fn_name.mjs";
export function daemon_runtime_max(name) {
  ("how long this daemon may run before systemd recycles it (a RuntimeMaxSec value), or null to run indefinitely. A long-lived watcher slowly degrades: ",
    fn_name("webpack_watch"),
    " ran ~a day, bloated to 4.1GB, and silently STOPPED rebuilding on save while still reporting active. Recycling on a schedule (systemd stops it after this long, and Restart=always brings it back fresh + re-indexed) heals that. A hard MemoryMax would not: the startup stale-rebuild sweep legitimately spikes to ~6.5GB from concurrent webpack builds, so any cap safe for the sweep is too high to catch the stuck state. Daemons that hold no accumulating state (server, ",
    fn_name("git_push_auto"),
    ") were once left running forever; ",
    fn_name("daemons_recycled"),
    " now names every daemon recycled, and why.");
  let list = daemons_recycled();
  let recycled = list_includes(list, name);
  if (recycled) {
    let r = "12h";
    return r;
  }
  return null;
}
