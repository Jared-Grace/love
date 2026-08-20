import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function app_ceb_bible_gloss_roots_shallower_baseline_path() {
  "Where the record of the Cebuano explanations naming a built word as their root is kept.";
  "Each line is the word the explanation named, then the word the dictionary gives, in that order.";
  let p = path_join([
    data_given_baselines_folder(),
    "app_ceb_bible_gloss_roots_shallower_baseline.json",
  ]);
  return p;
}
