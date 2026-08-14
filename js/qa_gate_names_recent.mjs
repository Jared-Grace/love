import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { folder_history_is } from "./folder_history_is.mjs";
import { qa_gate_recent_seconds } from "./qa_gate_recent_seconds.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { git_folder_paths_commit_seconds_since } from "./git_folder_paths_commit_seconds_since.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_filter } from "./list_filter.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
export async function qa_gate_names_recent(f_names) {
  "Of the functions a gate complained about, the ones somebody committed lately.";
  "Its neighbour asks whether a file has a change nobody has committed, and that catches only the seconds between one peer's save and their commit. This repo commits one small idea at a time, many times an hour, so a peer deep in a topic has a clean file almost always - and the reading beside this one calls their live work standing debt. Measured in one afternoon: sixteen gates red, the run said nothing was in flight, and six of them went green on their own within the hour while nobody touched them.";
  "So the two are asked together rather than one replacing the other. A file being edited right now is still the surer answer, and lately committed is the weaker one that covers the rest of somebody's afternoon.";
  "Which files were committed inside the window is a question about the folder rather than about these names, so it is asked one name along and kept there. This is asked once per red gate, and the answer is the same every time within a run.";
  let path_seconds = await qa_gate_recent_paths_remembered();
  function lately_is(f_name) {
    let f_path = function_name_to_path_relative(f_name);
    let b = property_exists(path_seconds, f_path);
    return b;
  }
  let lately = list_filter(f_names, lately_is);
  return lately;
}
