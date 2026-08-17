import { functions_shape_blocks_key } from "./functions_shape_blocks_key.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_shape_blocks(line_count) {
  "Runs of work that more than one function writes out - the sets of functions that";
  "share a block of that many lines, biggest saving first.";
  "The repo already asks whether two functions are the same all the way through, and";
  "that question cannot see the commonest reason to write a shared unit: several";
  "functions that agree on a long middle and differ at the two ends. Seven gates each";
  "wrote out the same twenty-five lines of collecting, counting and refusing, and every";
  "one of them was invisible to the whole-function question because each asked a";
  "different reader in the middle. Somebody noticed by eye, which is the part this";
  "removes.";
  "The comparison is the shape rather than the source, so private names and prose are";
  "already out of the way and two spellings of one block land on the same text.";
  "Every window of that many lines is looked at rather than only whole functions, and";
  "the windows of one shared run are then gathered under the set of functions holding";
  "them. So a run of twenty shared lines reads as one finding worth about twenty lines";
  "rather than as fifteen findings, and the count of windows is the measure of how much";
  "writing a shared unit would take back.";
  "Reads and changes nothing. Whether a shared block is one idea or two that happen to";
  "be written alike is a judgment, and so is what to call the unit that would hold it.";
  let love = await repo_functions_names("love");
  let groups = await functions_shape_blocks_key(love, line_count);
  function saving_of(group) {
    let saving = property_get(group, "saving");
    return saving;
  }
  list_sort_number_mapper_reverse(groups, saving_of);
  return groups;
}
