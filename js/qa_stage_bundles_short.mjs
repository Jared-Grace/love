import { arguments_assert } from "./arguments_assert.mjs";
import { file_extension_js } from "./file_extension_js.mjs";
import { list_filter_ends_with } from "./list_filter_ends_with.mjs";
import { functions_names_set } from "./functions_names_set.mjs";
import { path_join } from "./path_join.mjs";
import { bundle_names_missing } from "./bundle_names_missing.mjs";
import { list_map_unordered_async_filter_property_list_empty_not_is } from "./list_map_unordered_async_filter_property_list_empty_not_is.mjs";
export async function qa_stage_bundles_short(folder, file_names) {
  "$plain folder";
  "$plain file_names";
  "Every built file among the pieces one build has just put in a stage folder that reads a name of this repo's own it never defines, answered as the file and the names it is short of.";
  "It is handed the names of the pieces rather than reading the folder, because the folder holds every app that has ever been moved up and only the pieces this run made are this run's to answer for. Sweeping the whole folder would let one app's stale build stand in the way of every other app's route out, which is the one thing the walk beside it was written to avoid.";
  "This is the one failure a reading of the sources cannot see. A bundle is written by a build rather than by anybody, so a stale or half-written one holds a call to a function whose definition never made it in, while the file the call came from is perfectly correct and every check over the sources stays green.";
  "The set of names the repo answers to is gathered once here and handed to each file, because gathering fifteen thousand names once rather than once per file is the difference between a second and a minute.";
  "A file that looks short is named at once rather than read a second time. The sweep this grew out of read a doubtful file again, because it walked a folder ten people were building into and half a written file is short of names the finished one carries. These pieces were copied here seconds ago by this same run, out of a build made from one commit, so reading them again would be reading the same bytes; and being over-strict here costs a run that can be asked for again, where being lenient costs a page that dies on boot.";
  "Asking all the files at once and then keeping only the ones that came back short is a helper, shared with the sweep that asks the same shape of question of every app waiting to be sent.";
  arguments_assert(arguments, 2);
  let suffix = file_extension_js();
  let built = list_filter_ends_with(file_names, suffix);
  let known = await functions_names_set();
  async function ask(name) {
    let f_path = path_join([folder, name]);
    let missing = await bundle_names_missing(f_path, known);
    let answer = {
      name,
      missing,
    };
    return answer;
  }
  let offenders =
    await list_map_unordered_async_filter_property_list_empty_not_is(
      built,
      ask,
      "missing",
    );
  return offenders;
}
