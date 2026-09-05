import { arguments_assert } from "./arguments_assert.mjs";
import { data_given_baselines_folder } from "./data_given_baselines_folder.mjs";
import { path_join } from "./path_join.mjs";
export function web_assets_stamped_path() {
  "Where the record of the assets as they stood when the version stamp was last set is kept.";
  "The file is deliberately NOT named after any function here. A word in a path that matches a function name is rewritten by the canonicalising pass into a reference to that function, and the path then follows every later rename of it - while nothing renames the file already on the disk, so the record is quietly left behind and read back as empty.";
  arguments_assert(arguments, 0);
  let folder = data_given_baselines_folder();
  let p = path_join([folder, "web_assets_stamped.json"]);
  return p;
}
