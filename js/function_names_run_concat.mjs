import { function_run } from "./function_run.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function function_names_run_concat(f_names) {
  "$plain f_names";
  "Runs every named function with no arguments and hands back the lists they answer with, joined end to end into one list.";
  arguments_assert(arguments, 1);
  ("The order of the answer is the order of the names, so a caller that sorted its names has already decided the order of the result and does not have to say so again here.");
  ("It exists because a corpus split across many functions for the sake of whoever edits it should not make every consumer learn how the editing was divided up. The split is a writing convenience; asking for all of it is the ordinary request.");
  async function run_named(f_name) {
    let answered = await function_run(f_name, []);
    return answered;
  }
  let lists = await list_map_async(f_names, run_named);
  let joined = list_concat_multiple(lists);
  return joined;
}
