import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function bundle_sizes_baseline_path() {
  "Where the size each client bundle was last seen at is kept.";
  "It sits in the baselines room with the other fifty ratchet records, and it is the room's own function that says so rather than a spelling of the room written out here. This one was the last file left in the data folder's doorway, under an address written whole before the two rooms existed, and being the only one there is what a gate finally noticed - not that it was wrong, but that it was alone. The room has moved twice already and a whole-address spelling is the shape that survives a move while pointing at nowhere, because nothing on the way past ever reads it.";
  let v = data_given_baselines_folder();
  let path = path_join([v, "bundle_sizes_baseline.json"]);
  return path;
}
