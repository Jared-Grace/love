import { daemon_stale_or_null } from "./daemon_stale_or_null.mjs";
import { daemon_started_at } from "./daemon_started_at.mjs";
import { daemons_names } from "./daemons_names.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_folder_paths_commit_seconds_since } from "./git_folder_paths_commit_seconds_since.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_min } from "./list_min.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function daemons_stale() {
  "Every daemon now running code the repo has since moved a day past.";
  "Asked of the one list the daemons are created from, so a daemon cannot be running unwatched by this and cannot be watched by it without existing.";
  "A daemon that is not running is passed over without a word. Being down is a real fault and a worse one, but it is somebody else's answer to give, and two checks naming one thing make the second read as a second fault.";
  let all = daemons_names();
  async function lambda$name(f_name) {
    let started = await daemon_started_at(f_name);
    let pair = { f_name, started };
    return pair;
  }
  let paired = await list_map_async(all, lambda$name);
  function lambda$pair(pair) {
    let up = null_not_is(pair.started);
    return up;
  }
  let running = list_filter(paired, lambda$pair);
  let none = list_empty_is(running);
  if (none) {
    return running;
  }
  ("git is asked only about commits made since the longest-running daemon started, because a commit older than every daemon cannot have left any of them behind");
  function lambda$started(pair) {
    let second = pair.started;
    return second;
  }
  let starts = list_map(running, lambda$started);
  let since = list_min(starts);
  let folder = folder_current_absolute();
  let path_seconds = await git_folder_paths_commit_seconds_since(folder, since);
  async function lambda$running(pair) {
    let record = await daemon_stale_or_null(
      pair.f_name,
      pair.started,
      path_seconds,
    );
    return record;
  }
  let answered = await list_map_async(running, lambda$running);
  let stale = list_filter_null_not_is(answered);
  return stale;
}
