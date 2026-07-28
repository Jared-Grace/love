import { ai_log_entries } from "./ai_log_entries.mjs";
import { ai_log_loops_ranked } from "./ai_log_loops_ranked.mjs";
import { list_take } from "./list_take.mjs";
export async function ai_log_loops_frequent(top) {
  "Ask the log which step gets run over and over in a row - what to turn into one command that finds its own set.";
  let entries = await ai_log_entries();
  let loops = ai_log_loops_ranked(entries);
  let taken = list_take(loops, top);
  return taken;
}
