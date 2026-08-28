import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { file_names_app_names } from "./file_names_app_names.mjs";
export async function folder_app_names(folder) {
  "$plain folder";
  "The apps one folder publishes: the name of every page sitting in it, with the extension taken off.";
  "Which folder is received rather than reached for, and that is the whole of why this exists. Reaching for it means asking which repo this machine is currently pointed at, and that answer lives in a setting nobody commits - so inside a frozen copy of the repo the question comes back with no repo of that name and throws.";
  "A gate that throws while being judged writes down no offenders, and a gate that named nobody cannot be shown to be about somewhere else, so it holds every app out of every deployment. Measured 2026-08-26: sixteen judged commits in a row were unshippable for every app, and the whole of what was wrong was one folder being looked up by a name the copy could not see.";
  "Reading the folder is the whole of what is this one's own. Turning the file names into app names is the same work here and for the pages that are live, and is said once next door.";
  arguments_assert(arguments, 1);
  let files = await folder_read_files(folder);
  let names = file_names_app_names(files);
  return names;
}
