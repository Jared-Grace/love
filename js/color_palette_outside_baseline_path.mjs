import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function color_palette_outside_baseline_path() {
  "where the palette ratchet keeps the files that already spelled their own screen colours. Reading it, rewriting it and refusing to grow it are separate functions, so the name of the file is spelled once here.";
  let v = data_given_baselines_folder();
  let path = path_join([v, "color_palette_outside_baseline.json"]);
  return path;
}
