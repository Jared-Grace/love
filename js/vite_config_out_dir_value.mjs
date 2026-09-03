import { arguments_assert } from "./arguments_assert.mjs";
import { folder_web_latest } from "./folder_web_latest.mjs";
export function vite_config_out_dir_value() {
  "The folder the other bundler writes a build into: the checked stage, the same one the main bundler writes into, so that a page built either way is found in the same place.";
  "IT ASKS THE STAGE FOR ITS FOLDER RATHER THAN JOINING THE STAGE'S NAME ONTO THE SERVED ROOT. The checked stage was a room inside the served folder until 2026-09-03 and sits beside it now, and a build settings value is exactly the kind of place a folder move cannot see, because the path is assembled from two calls and never spelled out in letters anywhere for a sweep to find.";
  arguments_assert(arguments, 0);
  let path = folder_web_latest();
  return path;
}
