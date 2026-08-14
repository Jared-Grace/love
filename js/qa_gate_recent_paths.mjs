import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { folder_history_is } from "./folder_history_is.mjs";
import { qa_gate_recent_seconds } from "./qa_gate_recent_seconds.mjs";
import { divide_floor } from "./divide_floor.mjs";
import { git_folder_paths_commit_seconds_since } from "./git_folder_paths_commit_seconds_since.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { subtract } from "./subtract.mjs";
import { not } from "./not.mjs";
export async function qa_gate_recent_paths() {
  "Every file in this folder committed inside the recent window, each with the second it was committed at.";
  "The whole folder is asked in one question bounded by the window, rather than one question per name. Asking git about a named file makes it look through the whole of history for it, and a red run can name a hundred functions.";
  "Where the window starts is worked out here rather than given, because there is exactly one right answer to it - now, less the window - and a caller passing its own could only get it wrong.";
  "Asked somewhere with no history, it answers that nothing was committed rather than throwing. This is reached while a red gate is being reported, and a throw there loses every complaint after the first.";
  let folder = folder_current_absolute();
  let recorded = await folder_history_is(folder);
  if (not(recorded)) {
    let nothing = {};
    return nothing;
  }
  let allowed = qa_gate_recent_seconds();
  let milliseconds = date_now_milliseconds();
  let now = divide_floor(milliseconds, 1000);
  let since = subtract(now, allowed);
  let path_seconds = await git_folder_paths_commit_seconds_since(folder, since);
  return path_seconds;
}
