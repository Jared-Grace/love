import { arguments_assert } from "./arguments_assert.mjs";
import { apps_all_main_fns } from "./apps_all_main_fns.mjs";
import { function_reachable_unguarded_steps } from "./function_reachable_unguarded_steps.mjs";
export async function apps_reachable_unguarded_steps(target) {
  arguments_assert(arguments, 1);
  ("Which app can reach the function named, and by what road, or nothing if none of them can");
  ("The apps are asked one after another and the asking stops at the first that gets there, because the question being answered is whether any screen breaks - a second app reaching the same function is the same fault twice and does not change what anybody does about it");
  ("This costs a walk of the imports for each app it has to ask, so it is meant for the moment a fault has already been found rather than for measuring the whole repo. Naming the app is what makes a complaint actionable: the function on its own says something is wrong somewhere, and whoever reads it then rebuilds the road by hand to find out whose screen it is");
  let mains = apps_all_main_fns();
  for (let main of mains) {
    let steps = await function_reachable_unguarded_steps(main, target);
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
