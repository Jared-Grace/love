import { app_apps_all_main_fns } from "./app_apps_all_main_fns.mjs";
import { function_dependencies } from "./function_dependencies.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get } from "./property_get.mjs";
import { function_node_only_is } from "./function_node_only_is.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function apps_node_only_gate_run() {
  "QA gate: nothing an app can reach may call a Node built-in without a browser branch.";
  "Such a call throws at runtime and blanks the screen, which a green build happily hides.";
  let mains = app_apps_all_main_fns();
  let reachable = await function_dependencies(mains);
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
  let measured = await list_map_unordered_async(reachable, measure);
  function only_lambda(m) {
    let only = property_get(m, "only");
    return only;
  }
  let violations = list_filter(measured, only_lambda);
  list_empty_is_assert_json(violations, {
    hint: "an app reaches a function that calls a Node built-in with no browser branch, so that screen blanks at runtime; give the function a browser branch, or swap the caller onto one that already has it",
  });
}
