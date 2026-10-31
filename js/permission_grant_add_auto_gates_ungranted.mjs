import { arguments_assert } from "./arguments_assert.mjs";
import { permission_auto_pin_assert } from "./permission_auto_pin_assert.mjs";
import { functions_names } from "./functions_names.mjs";
import { permission_grant_names } from "./permission_grant_names.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_filter } from "./list_filter.mjs";
import { permission_grant_context } from "./permission_grant_context.mjs";
import { permission_auto_refusals_context } from "./permission_auto_refusals_context.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { permission_grant_add_multiple } from "./permission_grant_add_multiple.mjs";
export async function permission_grant_add_auto_gates_ungranted() {
  "Grants every check that holds no grant yet and that the auto check clears, so an agent running a check stops asking the human one check at a time.";
  "★ IT FINDS ITS OWN SET. A check is a function named to end in _gate_run, and the set is every such name the granted list does not hold - worked out when it runs, so it cannot go stale between a reading and the running.";
  "★ EACH NAME STILL FACES THE AUTO CHECK, and only after the pin says that check is the one a person last approved. A name ending in _gate_run proves nothing about what it does; the name only chooses which functions are asked about. One that reaches outside the repo is left asking and reported, never granted.";
  "The shared answers are worked out once for the whole sweep, because they cost a walk of the whole repo and asking the single-name check once per name made them fresh every time.";
  "It writes Claude's own allow rules, so do NOT grant it a standing approval.";
  arguments_assert(arguments, 0);
  await permission_auto_pin_assert();
  let names = await functions_names();
  let granted = permission_grant_names();
  function lambda(name) {
    let gate = text_ends_with(name, "_gate_run");
    if (not(gate)) {
      return false;
    }
    let held = list_includes(granted, name);
    let n = not(held);
    return n;
  }
  let ungranted = list_filter(names, lambda);
  let context = await permission_grant_context();
  let clean = [];
  let refused = [];
  for (let name of ungranted) {
    let refusals = await permission_auto_refusals_context(name, context);
    let none = list_empty_is(refusals);
    if (none) {
      list_add(clean, name);
    } else {
      list_add(refused, {
        name,
        refusals,
      });
    }
  }
  let added = null;
  let b = list_empty_is(clean);
  let any = not(b);
  if (any) {
    let names_comma = list_join_comma(clean);
    added = await permission_grant_add_multiple(names_comma);
  }
  let report = {
    granted: clean,
    refused,
    added,
  };
  return report;
}
