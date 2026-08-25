import { webpack_dev_config_folder_named } from "./webpack_dev_config_folder_named.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { path_join } from "./path_join.mjs";
export async function webpack_dev_bundle_path(a_name) {
  "$plain a_name";
  "Where one app's dev bundle is written, worked out the same way the build that writes it works it out.";
  "THE FOLDER IS ASKED FOR RATHER THAN WORKED OUT HERE, and it is the same asking the build makes. Worked out separately, this would answer about a file the build never wrote the day either derivation moved, and the whole use of this is to compare what is on disk against the code that goes into it.";
  "What is left here is the file's own name, which is the app's settled name said as a script - the one part of a bundle's whereabouts the build does not need to know, because the build hands the folder over and lets the bundler name what it writes.";
  arguments_assert(arguments, 1);
  let named = await webpack_dev_config_folder_named(a_name);
  let config_folder = property_get(named, "config_folder");
  let name = property_get(named, "a_name");
  let file = file_name_js(name);
  let path = path_join([config_folder, file]);
  return path;
}
