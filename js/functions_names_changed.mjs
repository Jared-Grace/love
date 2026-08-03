import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { folder_history_is } from "./folder_history_is.mjs";
import { folder_js } from "./folder_js.mjs";
import { git_files_changed_folder } from "./git_files_changed_folder.mjs";
import { list_filter } from "./list_filter.mjs";
import { function_path_own_is } from "./function_path_own_is.mjs";
import { list_map } from "./list_map.mjs";
import { function_path_to_name } from "./function_path_to_name.mjs";
import { not } from "./not.mjs";
export async function functions_names_changed() {
  "The functions of this repo with an edit in them git has not been given yet - what somebody at this keyboard is in the middle of.";
  "Asked of this one folder rather than of every repo beside it. The question it exists to serve is what did I just touch, and the answer to that is a handful of files, which is what makes checks over it cheap enough to run before every commit rather than once a day.";
  "A file git has never seen answers here too, because the porcelain reading names those as well - and a brand new function is exactly the one most likely to have been written without the canonicalizing pass run over it.";
  "Asked somewhere with no history it answers that nothing has changed rather than throwing, the same way the gate's in-flight reading does. This runs inside the frozen copy as well as out here, and the copy is made without the history on purpose.";
  let folder = folder_current_absolute();
  let recorded = await folder_history_is(folder);
  if (not(recorded)) {
    let nothing = [];
    return nothing;
  }
  let src = folder_js();
  let paths = [src];
  let changed = await git_files_changed_folder(folder, paths);
  let own = list_filter(changed, function_path_own_is);
  ("What git names is filtered rather than trusted. The folder holds a file that is not a function often enough - a half-written one left by a process that died, an editor's leavings - and a name taken off one of those is fed straight back through the naming law to open a file nobody wrote.");
  let f_names = list_map(own, function_path_to_name);
  return f_names;
}
