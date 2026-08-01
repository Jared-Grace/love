import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { function_auto_check } from "./function_auto_check.mjs";
import { property_get } from "./property_get.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { not } from "./not.mjs";
export async function functions_auto_refused() {
  arguments_assert(arguments, 0);
  ("every function the normalize pass cannot carry through and leave loadable, asked of the whole repo at once and answered without touching a file");
  ("the per-name check has been askable for a while and there was no way to ask it of everything. So the answer was only ever known for the handful of names somebody happened to run it on, which is the wrong handful: a pass that breaks one shape of code breaks it everywhere that shape occurs, and the file being edited today is the least likely place to notice.");
  let f_names = await functions_names();
  let results = await list_map_unordered_async(f_names, function_auto_check);
  function refused_is(result) {
    let ok = property_get(result, "ok");
    let refused = not(ok);
    return refused;
  }
  let refused = list_filter(results, refused_is);
  let names = list_map_property(refused, "name");
  return names;
}
