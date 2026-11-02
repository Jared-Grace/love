import { arguments_assert } from "./arguments_assert.mjs";
import { repo_love_functions_names } from "./repo_love_functions_names.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
import { list_includes_not } from "./list_includes_not.mjs";
import { list_filter } from "./list_filter.mjs";
export async function permission_grant_gates_ungranted() {
  "Every check that holds no grant yet: a function named to end in _gate_run that the granted list does not hold, worked out when asked, so it cannot go stale between a reading and the running.";
  arguments_assert(arguments, 0);
  let names = await repo_love_functions_names();
  let granted = permission_grant_names();
  function lambda(name) {
    let gate = text_ends_with(name, "_gate_run");
    if (not(gate)) {
      return false;
    }
    let n = list_includes_not(granted, name);
    return n;
  }
  let ungranted = list_filter(names, lambda);
  return ungranted;
}
