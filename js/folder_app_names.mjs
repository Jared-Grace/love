import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { html_extension } from "./html_extension.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { list_map } from "./list_map.mjs";
import { path_name } from "./path_name.mjs";
export async function folder_app_names(folder) {
  "$plain folder";
  "The apps one folder publishes: the name of every page sitting in it, with the extension taken off.";
  "Which folder is received rather than reached for, and that is the whole of why this exists. Reaching for it means asking which repo this machine is currently pointed at, and that answer lives in a setting nobody commits - so inside a frozen copy of the repo the question comes back with no repo of that name and throws.";
  "A gate that throws while being judged writes down no offenders, and a gate that named nobody cannot be shown to be about somewhere else, so it holds every app out of every deployment. Measured 2026-08-26: sixteen judged commits in a row were unshippable for every app, and the whole of what was wrong was one folder being looked up by a name the copy could not see.";
  arguments_assert(arguments, 1);
  let files = await folder_read_files(folder);
  let sufix = html_extension();
  let htmls = list_filter_ends_with(files, sufix);
  let names = list_map(htmls, path_name);
  return names;
}
