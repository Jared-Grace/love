import { property_path_get_2 } from "./property_path_get_2.mjs";
import { machine_load_average } from "./machine_load_average.mjs";
import { function_call_timed } from "./function_call_timed.mjs";
import { function_current_set } from "./function_current_set.mjs";
import { function_name_to_path_unalias } from "./function_name_to_path_unalias.mjs";
import { file_open } from "./file_open.mjs";
export async function function_open(f_name) {
  "Puts a function in front of the human, and says how long each of its three steps took.";
  "It used to hand back nothing, so every open printed the word undefined. That line was the one place a number could have gone, and the human asks for a file exactly when the editor feels slow - so the question the printed line was in a position to answer, and did not, was which of the three steps was the wait.";
  "The three are worth telling apart because they fail slowly for unrelated reasons: resolving the name lists the function files of every repo, launching the editor waits on a separate program that may itself be busy, and recording the current function reads and writes the human's saved data.";
  let resolving = await function_call_timed(function_name_to_path_unalias, [
    f_name,
  ]);
  let f_path = property_path_get_2(resolving, "value", "f_path");
  let opening = await function_call_timed(file_open, [f_path]);
  let recording = await function_call_timed(function_current_set, [f_name]);
  let timings = [resolving, opening, recording];
  ("The load is here for the same reason it is beside the gate times: several of us share this one machine, and a step measured while it was busy reads exactly like a step that got slower.");
  let load = machine_load_average();
  let report = {
    f_path,
    load,
    timings,
  };
  return report;
}
