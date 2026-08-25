import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { properties_get } from "./properties_get.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
export async function webpack_dev_functions_modified_ms() {
  "Every function here paired with when its file was last written.";
  "ASKED ONCE FOR ALL OF THEM RATHER THAN ONCE PER ASKER. Each app reaches hundreds of functions and nearly all of those are small shared ones, so asking per app asks the same file over and over - thirty-two apps deep, that is the same few thousand questions asked thirty-two times to get thirty-two copies of one answer.";
  "A file that is not there answers with nothing rather than throwing, which is the honest answer for a name whose file has just been moved out from under this by somebody else working in the same folder.";
  arguments_assert(arguments, 0);
  let paths = await functions_names_to_paths();
  let f_names = properties_get(paths);
  let times = {};
  for (let f_name of f_names) {
    let path = property_get(paths, f_name);
    let ms = await path_modified_ms(path);
    property_set(times, f_name, ms);
  }
  return times;
}
