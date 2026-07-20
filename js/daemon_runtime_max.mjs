import { fn_name } from "./fn_name.mjs";
export function daemon_runtime_max(name) {
  "how long this daemon may run before systemd recycles it (a RuntimeMaxSec value), or null to run indefinitely. A long-lived watcher slowly degrades: webpack_watch ran ~a day, bloated to 4.1GB, and silently STOPPED rebuilding on save while still reporting active. Recycling on a schedule (systemd stops it after this long, and Restart=always brings it back fresh + re-indexed) heals that. A hard MemoryMax would not: the startup stale-rebuild sweep legitimately spikes to ~6.5GB from concurrent webpack builds, so any cap safe for the sweep is too high to catch the stuck state. Daemons that hold no accumulating state (server, git_push_auto) return null.";
  let watcher = fn_name("webpack_watch");
  let is_watcher = name === watcher;
  if (is_watcher) {
    return "12h";
  }
  return null;
}
