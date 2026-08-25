import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { path_join } from "./path_join.mjs";
export async function webpack_dev_bundle_path(a_name) {
  "$plain a_name";
  "Where one app's dev bundle is written, worked out the same way the build that writes it works it out.";
  "IT IS DERIVED RATHER THAN SPELLED because not every app lives in this repository, so the folder is only half a guess from the app's name - the other half is which repository it came out of, which the app's own record holds and nothing else does. Spelled out instead, an app in another repository is looked for here, found missing, and reported as never built.";
  "The build itself is the one place this was worked out, which meant nothing could ask where a bundle IS without running one. Asked separately, the same path answers whether the file on disk is behind the code that goes into it.";
  arguments_assert(arguments, 1);
  let info = await app_shared_name_search_info(a_name);
  let repo_name = property_get(info, "repo_name");
  let name = property_get(info, "a_name");
  let folder = app_shared_name_dev_text();
  let public_dev = folder_public_join(folder);
  let config_folder = repo_path_combine(repo_name, public_dev);
  let file = file_name_js(name);
  let path = path_join([config_folder, file]);
  return path;
}
