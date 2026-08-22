import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function bible_glyph_groups_spellable_baseline_path() {
  "Where the record of groups the seated words can already spell side by side is kept.";
  let v = data_given_baselines_folder();
  let p = path_join([v, "bible_glyph_groups_spellable_baseline.json"]);
  return p;
}
