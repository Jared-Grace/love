import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { fn_name } from "./fn_name.mjs";
import { apps_reachable_unguarded_steps } from "./apps_reachable_unguarded_steps.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { list_size } from "./list_size.mjs";
import { functions_reachable_unguarded } from "./functions_reachable_unguarded.mjs";
import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
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
  let mains = apps_all_main_fns();
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
  async function blame(violation) {
    let f_name = property_get(violation, "f_name");
    let reached = await apps_reachable_unguarded_steps(f_name);
    let app = property_get_or_null(reached, "app");
    let steps = property_get_or_null(reached, "steps");
    let told = {
      f_name,
      app,
      steps,
    };
    return told;
  }
  let violations = list_filter(measured, only_lambda);
  ("Whose screen breaks, and by what road, is worked out only once something is");
  ("already wrong. The name of the offending function on its own says a page is");
  ("broken somewhere without saying where, so every reader of this complaint walked");
  ("the imports by hand to find out - the same walk, giving the same answer, paid");
  ("again by each of them. It is not done up front because it costs a walk of the");
  ("imports per app asked, and on the ordinary run there is nothing to ask about.");
  let blamed = await list_map_unordered_async(violations, blame);
  list_empty_is_assert_json(blamed, {
    hint:
      "an app reaches a function that calls a Node built-in with no browser branch, so that screen blanks at runtime. Two causes: (1) a REAL call into the Node function - give that function a browser branch, or swap the caller onto one that already has it; (2) the only link is an imported-fn X.name reference (a fn imported ONLY to spell its name, which drags its whole dependency tree into the bundle) - run " +
      fn_name("file_name_references_strip") +
      text_combine_multiple([
        " on the file holding that reference to swap X.name for a dependency-free ",
        fn_name("fn_name"),
        " marker (then the now-unused import is dropped)",
      ]),
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
