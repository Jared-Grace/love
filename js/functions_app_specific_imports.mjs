import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { functions_app_specific_imports_generic } from "./functions_app_specific_imports_generic.mjs";
import { not_equal } from "./not_equal.mjs";
export async function functions_app_specific_imports() {
  arguments_assert(arguments, 0);
  ("Every place a function belonging to no app imports one that belongs to a single app - each answer naming the importer and the app-specific name it reached for.");
  ("This asks the whole invariant rather than a corner of it. Its predecessor walked js/app_shared_*.mjs alone, which is one family among many that belong to no app: html_, list_, ebible_ and every plain tooling name are shared in exactly the same sense, and an app-specific import in any of them hands that app to everybody downstream just the same.");
  ("One hop is enough here, and that is the whole reason to widen the set rather than to walk deeper. A road from a no-app function to an app-specific one has to cross from the first kind to the second somewhere, and wherever it crosses, the function on the near side belongs to no app and imports one that does - which is a pair this already reports. So asking every no-app function about its direct imports answers the closure question exactly, at one parse per file instead of a walk per function.");
  ("Measured on the day it was written: the narrow check had just reached zero, and this one starts from what the wider set really carries.");
  function near_wanted_is(f_name, app_own) {
    let unowned_is = equal(app_own, "");
    return unowned_is;
  }
  function pair_wanted_is(f_name, app_own, imported, app) {
    let reaches_is = not_equal(app, "");
    return reaches_is;
  }
  let offenders = await functions_app_specific_imports_generic(
    near_wanted_is,
    pair_wanted_is,
  );
  return offenders;
}
