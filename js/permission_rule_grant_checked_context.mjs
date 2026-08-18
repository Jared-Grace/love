import { permission_rule_grant_verdict_context } from "./permission_rule_grant_verdict_context.mjs";
import { equal } from "./equal.mjs";
import { permission_grant_names_fresh } from "./permission_grant_names_fresh.mjs";
import { permission_grant_names_settings_write } from "./permission_grant_names_settings_write.mjs";
import { not } from "./not.mjs";
import { permission_rule_command_probe } from "./permission_rule_command_probe.mjs";
import { guard_check } from "./guard_check.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function permission_rule_grant_checked_context(
  unaliased,
  context,
) {
  "grant one dispatcher function an allow rule, but only when nothing disqualifies it — the whole loop in one command: already granted, safe to grant, write it, ask the guard what it now says";
  "the point is to stop paying for the same prompt twice. the checking is what makes that safe to do without asking, so a refusal is a result, not a failure";
  "the shared answers arrive already worked out, so granting a whole ranking of names costs one pass over the repo rather than one pass for each name in it";
  "whether it may be granted is asked of the one function that answers that question, so a reading that only reports and this one that acts cannot come apart about what is safe";
  let verdict_first = await permission_rule_grant_verdict_context(
    unaliased,
    context,
  );
  let action_first = property_get(verdict_first, "action");
  let open = equal(action_first, "grantable");
  if (not(open)) {
    return verdict_first;
  }
  let rule = property_get(verdict_first, "rule");
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
  ("the guard reads the settings file on every call, so the rule is live the moment it is written — and because a hook answering allow settles the call before Claude's own permission engine is consulted, that engine's stale copy never gets a say. This used to report that a restart was needed, which was reasoned from the engine caching its settings and never tested; running a freshly granted command straight afterwards showed no prompt at all. The restart matters only for tools this guard does not front.");
  let command = permission_rule_command_probe(rule);
  let verdict = await guard_check(command);
  let written = {
    name: unaliased,
    rule,
    action: "granted",
    refusals: [],
    guard: property_get(verdict, "decision"),
    note: "live now — the guard reads the settings file on every call and answers before Claude's own permission engine is asked, so no restart is wanted",
  };
  return written;
}
