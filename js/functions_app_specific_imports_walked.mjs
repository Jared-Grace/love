import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { functions_app_specific_imports_generic_walked } from "./functions_app_specific_imports_generic_walked.mjs";
import { not_equal } from "./not_equal.mjs";
export async function functions_app_specific_imports_walked() {
  arguments_assert(arguments, 0);
  ("Every place a function belonging to no app imports one that belongs to a single app, and how many no-app functions were opened to say so.");
  ("This asks the whole invariant rather than a corner of it. Its predecessor walked js/app_shared_*.mjs alone, which is one family among many that belong to no app: html_, list_, ebible_ and every plain tooling name are shared in exactly the same sense, and an app-specific import in any of them hands that app to everybody downstream just the same.");
  ("One hop is enough here, and that is the whole reason to widen the set rather than to walk deeper. A road from a no-app function to an app-specific one has to cross from the first kind to the second somewhere, and wherever it crosses, the function on the near side belongs to no app and imports one that does - which is a pair this already reports.");
  ("The two questions the walk is given live here and nowhere else, so the plain reader beside this one is written out of this rather than beside it, and the pair of them cannot come to mean different things.");
  ("The count is what the gate above reports about itself. Offenders at nothing is the good day and is also what a walk that opened nothing says, so the number that separates them has to be the one the walk actually reached.");
  function near_wanted_is(f_name, app_own) {
    let unowned_is = equal(app_own, "");
    return unowned_is;
  }
  function pair_wanted_is(f_name, app_own, imported, app) {
    let reaches_is = not_equal(app, "");
    return reaches_is;
  }
  let told = await functions_app_specific_imports_generic_walked(
    near_wanted_is,
    pair_wanted_is,
  );
  return told;
}
