import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function app_ceb_bible_gloss_passages_respell_refused_baseline_path() {
  "Where the record of the Cebuano passages the respell walks past is kept.";
  "Each line is the chapter code and then the verses the passage covers, which is the pair somebody opens the store at to mend one. How far apart the two counts were is not written down: it is what the disagreement measures rather than what it is, and it moves under a half-repair while the passage stays the same passage.";
  let v = data_given_baselines_folder();
  let p = path_join([
    v,
    "app_ceb_bible_gloss_passages_respell_refused_baseline.json",
  ]);
  return p;
}
