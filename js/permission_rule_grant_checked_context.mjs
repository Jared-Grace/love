import { permission_grant_names_fresh } from "./permission_grant_names_fresh.mjs";
import { permission_grant_names_settings_write } from "./permission_grant_names_settings_write.mjs";
import { not } from "./not.mjs";
import { permission_grant_rule } from "./permission_grant_rule.mjs";
import { permission_grant_refusals_context } from "./permission_grant_refusals_context.mjs";
import { permission_run_names } from "./permission_run_names.mjs";
import { permission_rule_command_probe } from "./permission_rule_command_probe.mjs";
import { guard_check } from "./guard_check.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
import { greater_than } from "./greater_than.mjs";
export async function permission_rule_grant_checked_context(
  unaliased,
  context,
) {
  "grant one dispatcher function an allow rule, but only when nothing disqualifies it — the whole loop in one command: already granted, safe to grant, write it, ask the guard what it now says";
  "the point is to stop paying for the same prompt twice. the checking is what makes that safe to do without asking, so a refusal is a result, not a failure";
  "the shared answers arrive already worked out, so granting a whole ranking of names costs one pass over the repo rather than one pass for each name in it";
  let rule = permission_grant_rule(unaliased, "scripts/ai.mjs");
  ("read fresh for every name rather than carried in the shared answers, because each grant written changes it and a stale copy would grant the same name twice");
  let granted_names = await permission_run_names();
  let already = list_includes(granted_names, unaliased);
  if (already) {
    let unchanged = {
      name: unaliased,
      rule,
      action: "already granted",
      refusals: [],
    };
    return unchanged;
  }
  let refusals = await permission_grant_refusals_context(unaliased, context);
  let disqualified = greater_than(refusals.length, 0);
  if (disqualified) {
    let refused = {
      name: unaliased,
      rule,
      action: "refused",
      refusals,
    };
    return refused;
  }
  ("the granted names are what a grant is written to, and the settings file is generated from them. This used to append the rule to the settings file alone and never open the names list at all, which is why grants made from the prompt record went missing: a rule the list does not account for is thrown away by the next thing that regenerates the file, and the regeneration is a gate anybody may run. Three approvals the human had already given departed that way before the cause was found, and it was never a race - a writer that never writes the source loses every time.");
  ("read off the file rather than out of memory, because the safety check above walks the whole repo and a peer granting during that walk has rewritten the list since");
  let names_now = await permission_grant_names_fresh();
  ("asked again against the list as it stands now, because a name spelled twice renders the same rule twice");
  let arrived = list_includes(names_now, unaliased);
  if (not(arrived)) {
    list_add(names_now, unaliased);
  }
  await permission_grant_names_settings_write(names_now);
  ("the one rule handed back is the one for this seam, out of the several the generator writes for a name. It is the one the guard is asked about below, so it is the one worth reporting.");
  ("the guard reads the settings file on every call, so it can answer for the rule right away — Claude's own permission engine cannot, and will keep prompting until the session restarts");
  let command = permission_rule_command_probe(rule);
  let verdict = await guard_check(command);
  let written = {
    name: unaliased,
    rule,
    action: "granted",
    refusals: [],
    guard: property_get(verdict, "decision"),
    note: "the guard sees it now; Claude's permission engine only after a session restart",
  };
  return written;
}
