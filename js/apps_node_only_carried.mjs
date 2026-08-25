import { arguments_assert } from "./arguments_assert.mjs";
import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
import { functions_reachable_carried } from "./functions_reachable_carried.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get } from "./property_get.mjs";
import { function_node_only_is } from "./function_node_only_is.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_empty_not_is_assert_json } from "./list_empty_not_is_assert_json.mjs";
export async function apps_node_only_carried() {
  "Every function an app's bundle carries that could never run in a browser.";
  "★ THESE ARE NOT BROKEN PAGES - THEY ARE PAID-FOR WEIGHT. The sister question asks what an app can REACH in a browser and rightly turns aside at every environment check, so it answers nothing about what is shipped; a bundler follows a plain import whether the branch runs or not. Each name here is code a page downloads in order never to execute it.";
  "The remedy is one shape: give the build machine's half its own name and ask for it by that name at the moment it is wanted, so a bundler cannot see through the address and the whole tree stays out of the page. That is why the question is worth asking now and was not before - there was no way to act on the answer, so an earlier attempt at this was written and left out of the suite.";
  "It asserts it looked at something before reporting what it found, because an empty answer here is indistinguishable from a walk that never started, and the second one reads as a clean bill of health.";
  arguments_assert(arguments, 0);
  let mains = apps_all_main_fns();
  let carried = await functions_reachable_carried(mains);
  list_empty_not_is_assert_json(carried, {
    hint: "no app main reached anything at all, so nothing was actually examined - the entry point list is the thing to look at, not the empty answer",
  });
  let paths = await functions_names_to_paths();
  async function measure(f_name) {
    let f_path = property_get(paths, f_name);
    let only = await function_node_only_is(f_path);
    let result = {
      f_name,
      only,
    };
    return result;
  }
  let measured = await list_map_unordered_async(carried, measure);
  function only_lambda(m) {
    let only = property_get(m, "only");
    return only;
  }
  let violations = list_filter(measured, only_lambda);
  let f_names = list_map_property(violations, "f_name");
  let sorted = list_sort_text(f_names);
  return sorted;
}
