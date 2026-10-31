import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline_path() {
  "Where the record of the Urdu explanations quoting a Bible chapter with words it does not hold is kept.";
  arguments_assert(arguments, 0);
  let v = data_given_baselines_folder();
  let p = path_join([
    v,
    "app_en_learn_bible_gloss_urdu_bible_quotes_absent_baseline.json",
  ]);
  return p;
}
