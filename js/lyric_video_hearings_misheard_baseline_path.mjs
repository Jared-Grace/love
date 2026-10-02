import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
export function lyric_video_hearings_misheard_baseline_path() {
  arguments_assert(arguments, 0);
  ("Where the ratchet keeps the recordings already known to be the right psalm sung and badly heard. Reading it, growing it and refusing to grow it are separate functions, so the file name is spelled once here rather than once in each of them.");
  let v = data_given_baselines_folder();
  let path = path_join([v, "lyric_video_hearings_misheard_baseline.json"]);
  return path;
}
