import { arguments_assert } from "./arguments_assert.mjs";
import { findings_folder } from "./findings_folder.mjs";
import { path_join } from "./path_join.mjs";
export function ebible_bible_folders_verses_punctuation_only_path() {
  "Where the answer to which verses across every downloaded translation carry punctuation and nothing else is kept.";
  "It is a finding rather than a given: a record of what a walk over the bibles turned up, not a part of the bibles, and the walk costs hours so it wants reading back far more often than it wants running.";
  arguments_assert(arguments, 0);
  let folder = findings_folder();
  let v = path_join([folder, "ebible_verses_punctuation_only.json"]);
  return v;
}
