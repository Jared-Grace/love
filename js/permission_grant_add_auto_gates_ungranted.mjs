import { arguments_assert } from "./arguments_assert.mjs";
import { permission_auto_pin_assert } from "./permission_auto_pin_assert.mjs";
import { permission_grant_add_gates_ungranted_generic } from "./permission_grant_add_gates_ungranted_generic.mjs";
import { permission_auto_refusals_context } from "./permission_auto_refusals_context.mjs";
export async function permission_grant_add_auto_gates_ungranted() {
  "Grants every check that holds no grant yet and that the auto check clears, so an agent running a check stops asking the human one check at a time.";
  "★ IT FINDS ITS OWN SET. A check is a function named to end in _gate_run, and the set is every such name the granted list does not hold - worked out when it runs, so it cannot go stale between a reading and the running.";
  "★ EACH NAME STILL FACES THE AUTO CHECK, and only after the pin says that check is the one a person last approved. A name ending in _gate_run proves nothing about what it does; the name only chooses which functions are asked about. One that reaches outside the repo is left asking and reported, never granted.";
  "It writes Claude's own allow rules, so do NOT grant it a standing approval.";
  arguments_assert(arguments, 0);
  await permission_auto_pin_assert();
  let report = await permission_grant_add_gates_ungranted_generic(
    permission_auto_refusals_context,
  );
  return report;
}
