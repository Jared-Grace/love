import { list_size } from "./list_size.mjs";
import { functions_reachable_unguarded } from "./functions_reachable_unguarded.mjs";
import { app_apps_all_main_fns } from "./app_apps_all_main_fns.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { property_get } from "./property_get.mjs";
import { function_node_only_is } from "./function_node_only_is.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
export async function apps_node_only_gate_run() {
  "QA gate: nothing an app can reach may call a Node built-in without a browser branch.";
  "Such a call throws at runtime and blanks the screen, which a green build happily hides.";
  "Reach is measured along the roads a page actually travels, so the walk stops wherever";
  "someone asked which environment they were in. Measuring the whole import closure instead";
  "named six functions that sit under a guard and cannot be fixed where they are, which is a";
  "gate that can never be cleared - so it stayed out of the suite and guarded nothing.";
  let mains = app_apps_all_main_fns();
  let reachable = await functions_reachable_unguarded(mains);
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
  ("Says how much it looked at, because a gate that answers nothing cannot be");
  ("told apart from one that did nothing. Both leave the same empty line, and the");
  ("reader is left inferring a pass from the absence of a complaint.");
  let r = {
    reachable: list_size(reachable),
    violations: 0,
  };
  return r;
}
