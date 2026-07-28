import { less_than } from "./less_than.mjs";
import { function_open_names } from "./function_open_names.mjs";
import { data_identifiers_search } from "./data_identifiers_search.mjs";
import { function_calls_name_is } from "./function_calls_name_is.mjs";
import { properties_get } from "./properties_get.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_copy } from "./list_copy.mjs";
import { list_size } from "./list_size.mjs";
import { list_add } from "./list_add.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function function_open_names_reached() {
  "Every fn that puts a VS Code window on the human's screen, however many calls away the opening is.";
  "Its neighbour answers the same question one call deep, which is right for what that one is asked and too narrow for what is built on it. The rename twin that opens its result opens a window; so does every fn that calls that twin, and there were seven of those, none of them on the one-deep list. The gate that refuses to auto-approve an opener reads the one-deep list, so a grant on any of the seven passes the gate and then buys the guaranteed error the gate exists to prevent.";
  "Growth follows real calls rather than imports. An import closure was tried first and swallowed half the repo - it counts a path that is never taken, so the repo-wide gate came out as a window-opener while plainly running fine on the ai seam. What a fn calls is what it does; what its file imports is only what it could reach.";
  "The two names that would have made this concrete are left out of the prose on purpose. The auto pass turns a bare fn name in a message into a real reference and adds the import to match, so naming the repo-wide gate here pulled every gate it runs into a file that merely mentioned it.";
  "Settling is checked rather than assumed. A pass that adds nothing means the set is closed, and a run that never stops adding says the call graph is not what this expects, which is worth an error rather than a silent cut-off at whatever round the loop happened to end on.";
  let openers = await function_open_names();
  let expanded = [];
  let rounds = 12;
  for (let round = 0; less_than(round, rounds); round = round + 1) {
    let before = list_size(openers);
    let names = list_copy(openers);
    for (let name of names) {
      let done = list_includes(expanded, name);
      if (done) {
        continue;
      }
      list_add(expanded, name);
      let by_name = await data_identifiers_search(name);
      let callers = properties_get(by_name);
      for (let caller of callers) {
        let known = list_includes(openers, caller);
        if (known) {
          continue;
        }
        let calls = await function_calls_name_is(caller, name);
        if (not(calls)) {
          continue;
        }
        list_add(openers, caller);
      }
    }
    let after = list_size(openers);
    let settled = equal(before, after);
    if (settled) {
      return openers;
    }
  }
  throw new Error(
    "function open names reached: the set of window openers was still growing after " +
      rounds +
      " rounds, so either the call graph has a cycle this does not expect or the repo has grown past what this bound was chosen for",
  );
}
