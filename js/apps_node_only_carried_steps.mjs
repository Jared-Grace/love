import { arguments_assert } from "./arguments_assert.mjs";
import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
import { function_dependency_path } from "./function_dependency_path.mjs";
export async function apps_node_only_carried_steps(target) {
  "$plain target";
  "Which app's bundle carries the function named, and by what chain of imports, or nothing if none of them does.";
  "★ THE NAME ALONE IS NOT ACTIONABLE AND THE CHAIN IS. A page carrying code it can never run is fixed by finding the one link where the build machine's half parts from the browser's, and giving that half its own name; the offending function is usually the far end of the chain and never the place to edit. Without the chain every reader walks the imports by hand and arrives at the same answer, paid for again each time.";
  "It is asked for by name rather than worked out up front, because the road costs a walk of the imports per app asked and the ordinary reading of the ratchet wants none of them - the count is the thing being watched, and the road only matters once somebody means to shorten it.";
  "The asking stops at the first app that carries it. A second app carrying the same function is the same weight in another bundle, fixed by the same edit at the same link, so naming it would change nothing anybody does.";
  arguments_assert(arguments, 1);
  let mains = apps_all_main_fns();
  for (let main of mains) {
    let steps = await function_dependency_path(main, target);
    if (steps) {
      let r = {
        app: main,
        steps,
      };
      return r;
    }
  }
  return null;
}
