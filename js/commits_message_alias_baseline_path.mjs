import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function commits_message_alias_baseline_path() {
  "Where the record of the commits already messaged with an alias key is kept.";
  "A COMMIT IS THE ONE OFFENCE THAT CANNOT BE REPAIRED. Every other ratchet in the repo records something a command could still put right, and says so in its own advice; a message belongs to a commit that is already in the history, and the only way to change one is to write every commit after it again under a new name. So this record is not a let-off waiting to be cleared - it is the only way the rule can be kept at all for what was written before the rule existed.";
  arguments_assert(arguments, 0);
  let v = data_given_baselines_folder();
  let p = path_join([v, "commits_message_alias_baseline.json"]);
  return p;
}
