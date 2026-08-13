import { daemon_stale_or_null } from "./daemon_stale_or_null.mjs";
import { daemons_names } from "./daemons_names.mjs";
import { list_filter_null_not_is } from "./list_filter_null_not_is.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function daemons_stale() {
  "Every daemon now running code the repo has since moved a day past.";
  "Asked of the one list the daemons are created from, so a daemon cannot be running unwatched by this and cannot be watched by it without existing.";
  let all = daemons_names();
  let answered = await list_map_async(all, daemon_stale_or_null);
  let stale = list_filter_null_not_is(answered);
  return stale;
}
