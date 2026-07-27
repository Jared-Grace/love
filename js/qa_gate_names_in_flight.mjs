import { git_folder_is } from "./git_folder_is.mjs";
import { not } from "./not.mjs";
import { function_name_to_path_relative } from "./function_name_to_path_relative.mjs";
import { list_map } from "./list_map.mjs";
import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { git_files_changed_folder } from "./git_files_changed_folder.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
export async function qa_gate_names_in_flight(f_names) {
  "Of the functions a gate complained about, the ones somebody is editing right now";
  "The whole question a reader has on a red gate is whether it is theirs to fix, and the first half of that answer is free: a file with nothing uncommitted in it has been in this state since before anybody sat down today, so the complaint is standing debt rather than anybody's half-finished edit. A file with a change not yet committed is the opposite, and it is where the fault almost always is";
  "It cannot say whose, and it does not pretend to. Several of us edit this one folder with no isolation, and an edit made by hand leaves no note of who made it, so a file being mid-edit is the most that can honestly be read off the folder";
  "Asked somewhere with no history, it answers that nothing is in flight rather than throwing. This is asked from inside the frozen copy as well as out here, and the copy is made without the history on purpose - so the question genuinely has no answer there, and a thrown one would take the whole run down in the middle of reporting a red gate, losing every complaint after the first";
  let folder = folder_current_absolute();
  let recorded = await git_folder_is(folder);
  if (not(recorded)) {
    let nothing = [];
    return nothing;
  }
  let paths = list_map(f_names, function_name_to_path_relative);
  let changed = await git_files_changed_folder(folder, paths);
  function editing_is(f_name) {
    let f_path = function_name_to_path_relative(f_name);
    let b = list_includes(changed, f_path);
    return b;
  }
  let flying = list_filter(f_names, editing_is);
  return flying;
}
