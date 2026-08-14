import { global_function_property_exists } from "./global_function_property_exists.mjs";
import { global_function_property_get } from "./global_function_property_get.mjs";
import { qa_gate_recent_paths } from "./qa_gate_recent_paths.mjs";
import { global_function_property_set } from "./global_function_property_set.mjs";
export async function qa_gate_recent_paths_remembered() {
  "Every file in this folder committed inside the recent window, asked once and then kept for as long as this process lives.";
  "The run that wants this asks gate by gate, and each ask is a whole program that reads the history. A red run of sixteen gates paid for sixteen walks over the same hour of commits to learn the same thing every time.";
  "It is asked with no arguments so that there is nothing to key the keeping on. Where the window starts moves every second, so a keeping keyed on it would never find what it kept, and the two callers would disagree about the same afternoon by however long the run took between them.";
  "Keeping it is safe for the same reason keeping the last commit of a file is: a run is short, and a peer committing halfway through would only mean two names in one report were judged a minute apart. Being told the same thing twice is better than being told two different things.";
  "Asked somewhere with no history, it answers that nothing was committed rather than throwing. This is reached while a red gate is being reported, and a throw there loses every complaint after the first.";
  let held = global_function_property_exists(
    qa_gate_recent_paths_remembered,
    "paths",
  );
  if (held) {
    let kept = global_function_property_get(
      qa_gate_recent_paths_remembered,
      "paths",
    );
    return kept;
  }
  let path_seconds = await qa_gate_recent_paths();
  global_function_property_set(
    qa_gate_recent_paths_remembered,
    "paths",
    path_seconds,
  );
  return path_seconds;
}
