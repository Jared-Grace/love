import { sword_version_download_path } from "./sword_version_download_path.mjs";
import { path_join } from "./path_join.mjs";
export function sword_module_path(sword_folder) {
  "$plain sword_folder";
  "Where inside an unpacked Sword download the text of the module itself sits.";
  "A Sword package is a small tree rather than a folder of files: the settings file goes one way and the text another, and the text is always four folders down under its own name. That layout is the package format's, not this repo's, so it is spelt once here rather than at each reader.";
  let folder = sword_version_download_path(sword_folder);
  let joined = path_join([folder, "modules", "texts", "ztext", sword_folder]);
  return joined;
}
