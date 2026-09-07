import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function app_ceb_bible_gloss_roots_claimed_stopped_short_baseline_path() {
  "Where the record of the Cebuano explanations cutting a root short of a root the dictionary knows is kept.";
  "Each line is the letters the explanation claimed, then the longer run at the same spot in the same word that the dictionary vouches for, in that order.";
  let v = data_given_baselines_folder();
  let p = path_join([
    v,
    "app_ceb_bible_gloss_roots_claimed_stopped_short_baseline.json",
  ]);
  return p;
}
