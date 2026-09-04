import { function_new_from_temp } from "./function_new_from_temp.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function function_new_from_temp_multiple(f_names) {
  "Several functions drafted in the throwaway folder promoted into the repo in the order they are named, answered for one by one.";
  "$plain f_names";
  "the names of the drafts to promote, each naming its own file in the throwaway folder. They are looked up as file names and none of them is run.";
  "A unit worth building is rarely one function, and promoting a set of them one call at a time was the loop this repo builds a command out of rather than performs - it also spent one commit per function on what is a single piece of work.";
  "The order given is the order taken, because a draft that calls its neighbour wants that neighbour already standing when the canonicalising pass looks for the import to add. So the caller names them from the bottom up, and nothing here reorders that.";
  "Each answer is kept beside the ones before it, so a name that is already taken stops the run with everything up to it already promoted and visible. That is the honest end - the drafts that landed are in the repo and the rest are still in the folder, which is exactly what a second run needs to see.";
  let outputs = [];
  async function name_promote(f_name) {
    let output = await function_new_from_temp(f_name);
    list_add(outputs, output);
  }
  await each_async(f_names, name_promote);
  return outputs;
}
