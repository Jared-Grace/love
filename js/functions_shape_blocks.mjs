import { functions_shape_blocks_keys } from "./functions_shape_blocks_keys.mjs";
import { repo_functions_names } from "./repo_functions_names.mjs";
import { list_sort_number_mapper_reverse } from "./list_sort_number_mapper_reverse.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { subtract } from "./subtract.mjs";
import { multiply } from "./multiply.mjs";
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
  let r = await functions_shape_blocks_keys(love, line_count);
  let keys = property_get(r, "keys");
  let by_names = property_get(r, "by_names");
  let groups = [];
  for (let key of keys) {
    let found = property_get(by_names, key);
    let names = property_get(found, "names");
    let windows = property_get(found, "windows");
    let left = subtract(names.length, 1);
    let saving = multiply(left, windows.length);
    list_add(groups, {
      names,
      windows: windows.length,
      saving,
      sample: windows[0],
    });
  }
  function saving_of(group) {
    let saving = property_get(group, "saving");
    return saving;
  }
  list_sort_number_mapper_reverse(groups, saving_of);
  return groups;
}
