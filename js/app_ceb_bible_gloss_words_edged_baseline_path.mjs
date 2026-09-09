import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function app_ceb_bible_gloss_words_edged_baseline_path() {
  "Where the record of the Cebuano explained words still wearing a mark from the sentence around them is kept.";
  "Each line is the word as the store spells it, mark and all, which is the spelling somebody searches the store for. The bare spelling is not written down beside it: it is derivable from the line, and it is also the spelling that finds nothing, so a record in two columns would invite the search to be made under the wrong one.";
  let v = data_given_baselines_folder();
  let p = path_join([v, "app_ceb_bible_gloss_words_edged_baseline.json"]);
  return p;
}
