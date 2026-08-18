import { list_empty_is } from "./list_empty_is.mjs";
import { list_first } from "./list_first.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function js_calls_run_joins_is(run, call) {
  "Whether this call belongs with the run of calls gathered so far.";
  "A run that has nothing in it yet takes whatever comes first. After that a call joins only when it names the same function and is waited for in the same way, because one walk can only do one of those things to every item.";
  let empty_is = list_empty_is(run);
  if (empty_is) {
    return true;
  }
  let first = list_first(run);
  let name = property_get(first, "name");
  let name_new = property_get(call, "name");
  let name_same_is = equal(name, name_new);
  if (not(name_same_is)) {
    return false;
  }
  let waited_is = property_get(first, "waited_is");
  let waited_new_is = property_get(call, "waited_is");
  let waited_same_is = equal(waited_is, waited_new_is);
  return waited_same_is;
}
