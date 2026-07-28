import { ai_log_entries } from "./ai_log_entries.mjs";
import { ai_log_loops_ranked } from "./ai_log_loops_ranked.mjs";
import { function_sweep_twin } from "./function_sweep_twin.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { list_take } from "./list_take.mjs";
import { each_async } from "./each_async.mjs";
export async function ai_log_loops_frequent(top) {
  "Ask the log which step gets run over and over in a row - what to turn into one command that finds its own set.";
  "Each entry carries the sweep that already exists for that step, because the first time this was read the conclusion drawn from it was wrong: every one of the six steps at the top already had a batch form sitting in the repo, and the reading was taken as a list of commands to write. The number says a loop happened; this says whether anything was missing.";
  let entries = await ai_log_entries();
  let loops = ai_log_loops_ranked(entries);
  let taken = list_take(loops, top);
  async function each_taken(record) {
    let step = property_get(record, "step");
    let sweeps = await function_sweep_twin(step);
    property_set(record, "sweep_exists", sweeps);
  }
  await each_async(taken, each_taken);
  return taken;
}
