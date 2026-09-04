import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function app_ceb_bible_gloss_affix_kinds_wrong_baseline_path() {
  "Where the record of the Cebuano explanations naming a piece their word has no piece of is kept.";
  "Each line is the word, then the name the explanation gave a piece of it - a prefix where the dictionary cuts an infix, and the like. The letters quoted are not part of the line, because the fault is the name and one word wears the same wrong name in every chapter that met it.";
  let v = data_given_baselines_folder();
  let p = path_join([v, "app_ceb_bible_gloss_affix_kinds_wrong_baseline.json"]);
  return p;
}
