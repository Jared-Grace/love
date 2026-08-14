import { fn_name } from "./fn_name.mjs";
import { daemon_stop } from "./daemon_stop.mjs";
import { daemons_names } from "./daemons_names.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function daemons_stop() {
  "Stops every daemon this repo runs, and answers how each one stands afterwards.";
  ("Asks ",
    fn_name("daemons_names"),
    " for the set rather than being handed one, so a daemon added later is stopped by this without anybody remembering to come back here. A list typed at the call site is the shape that quietly goes out of date, and the one left running is the one that writes.");
  ("Written for the window a history rewrite needs: four of these commit or push on their own, and none of them sleeps. Bringing them all back afterwards is ",
    fn_name("daemons_ensure"),
    ".");
  let names = daemons_names();
  let stopped = await list_map_async(names, daemon_stop);
  return stopped;
}
