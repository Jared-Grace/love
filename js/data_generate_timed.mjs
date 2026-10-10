import { function_call_timed } from "./function_call_timed.mjs";
import { functions_facts_all } from "./functions_facts_all.mjs";
import { functions_facts_merge_all } from "./functions_facts_merge_all.mjs";
import { machine_load_average } from "./machine_load_average.mjs";
export async function data_generate_timed() {
  "The same index build the plain one does, answering with how long each half took rather than with the index: asking every file what it says about itself, and folding those answers into lookups.";
  "Asking for the index measured at most of the time the tidying pass takes on a small function, and the two halves are fixed by different means - the asking by remembering more, the folding by doing less of it - so which half is the slow one decides what to change.";
  "The load rides along because several of us share this machine, and a half measured while it was busy reads exactly like a half that got slower.";
  let asking = await function_call_timed(functions_facts_all, []);
  let facts = asking.value.facts;
  let data = {};
  let folding = await function_call_timed(functions_facts_merge_all, [
    facts,
    data,
  ]);
  let load = machine_load_average();
  let timed = {
    load,
    files: facts.length,
    changed: asking.value.changed,
    asking_ms: asking.milliseconds,
    folding_ms: folding.milliseconds,
  };
  return timed;
}
