import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function app_ceb_bible_gloss_words_unwritten_baseline_path() {
  "Where the record of the Cebuano explained words the translation never writes standing alone is kept.";
  "Each line is one word, spelled the way the store spells it and in small letters - which is the whole of what somebody needs to go looking for it, because the word is what is searched for and the chapters it stands in fall out of that search.";
  let v = data_given_baselines_folder();
  let p = path_join([v, "app_ceb_bible_gloss_words_unwritten_baseline.json"]);
  return p;
}
