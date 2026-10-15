import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function giveaway_psalms_pictures_passed_over_baseline_path() {
  arguments_assert(arguments, 0);
  ("Where the record is kept of crops passed over because another crop already holds the published name they would have been given away under.");
  let v = data_given_baselines_folder();
  let p = path_join([v, "giveaway_psalms_pictures_passed_over_baseline.json"]);
  return p;
}
