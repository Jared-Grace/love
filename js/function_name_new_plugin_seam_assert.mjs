import { process_human_seam_is } from "./process_human_seam_is.mjs";
import { function_name_new_plugin_names } from "./function_name_new_plugin_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { assert_json } from "./assert_json.mjs";
export function function_name_new_plugin_seam_assert(plugin_name) {
  "A copy or a wrap calls the plugin it is handed, passing it the old function name, so the plugin is not merely read - it runs. From the ai seam only the known name-deriving plugins are accepted, because a name that derives nothing and instead deletes or uploads would be doing it with a real argument and no one watching.";
  "The human's own terminal keeps every plugin. There the call was typed on purpose by the person who will see the result, which is the same reason the ai seam is the only one that needs the fence.";
  let human = process_human_seam_is();
  if (human) {
    return;
  }
  let names = function_name_new_plugin_names();
  let known = list_includes(names, plugin_name);
  assert_json(known, {
    hint: "a copy or wrap plugin should be one of the known name-deriving functions — was a different function named here?",
    plugin_name,
    names,
  });
}
