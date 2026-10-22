import { arguments_assert } from "./arguments_assert.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function giveaway_psalms_boxes_whole_path() {
  arguments_assert(arguments, 0);
  ("Where the last answer about which given-away boxes really hold everything they were meant to hold is kept, so a gate can ask it without reaching across the world.");
  ("The asking takes half an hour and needs the network, which is why the answer is written down rather than asked again: the gate that reads this runs beside every other gate in the repo, and a gate that waited on a machine somewhere else would make the whole run slow and make it fail on a bad line rather than on a fault.");
  ("Reading it, writing it and judging by it are three separate functions, so the file name is spelled once here rather than once in each of them.");
  let folder = findings_folder();
  let path = path_join([folder, "giveaway_psalms_boxes_whole.json"]);
  return path;
}
