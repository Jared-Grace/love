import { arguments_assert } from "./arguments_assert.mjs";
import { folder_web_latest_absolute } from "./folder_web_latest_absolute.mjs";
import { path_join } from "./path_join.mjs";
export function folder_web_latest_absolute_join(f_path) {
  "$plain f_path";
  "One thing inside the folder a build waits in until it has been walked, spelled from the root.";
  "It is built on the neighbour that names the folder itself rather than beside it, so there is one place where where-we-are becomes what-is-waiting.";
  arguments_assert(arguments, 1);
  let folder = folder_web_latest_absolute();
  let combined = path_join([folder, f_path]);
  return combined;
}
