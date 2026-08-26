import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function commits_message_path_baseline_path() {
  "Where the record of the commits already messaged with a path reaching out of this repo is kept.";
  "IT IS EMPTY, AND IT EXISTS SO THAT IT CAN STAY EMPTY. Its sibling rule was written with nothing to record and no way of recording anything, and five commits later it was red for good, because a commit cannot be edited and the reading cannot be made to start later without letting those five go unaccounted. The same reading watches this rule over the same history, so the same thing can happen here, and the difference between a rule that survives it and a rule that gets switched off is whether the record was already there on the day it was needed.";
  arguments_assert(arguments, 0);
  let v = data_given_baselines_folder();
  let p = path_join([v, "commits_message_path_baseline.json"]);
  return p;
}
