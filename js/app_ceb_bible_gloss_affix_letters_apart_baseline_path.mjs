import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function app_ceb_bible_gloss_affix_letters_apart_baseline_path() {
  "Where the record of the Cebuano explanations quoting letters no cut of their word holds is kept.";
  "Each line is the word, then what the explanation called the piece, then the letters it quoted for it.";
  let p = path_join([
    data_given_baselines_folder(),
    "app_ceb_bible_gloss_affix_letters_apart_baseline.json",
  ]);
  return p;
}
