import { permission_grant_rule } from "./permission_grant_rule.mjs";
import { permission_run_names } from "./permission_run_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { permission_grant_refusals_context } from "./permission_grant_refusals_context.mjs";
import { greater_than } from "./greater_than.mjs";
export async function permission_rule_grant_verdict_context(
  unaliased,
  context,
) {
  "What would happen if this dispatcher function were granted an allow rule - it already holds one, something disqualifies it, or nothing does - worked out without writing anything.";
  "The judgment is separated from the writing because two callers want it and only one of them may write. A daily reading of what still costs the human a prompt has to be able to say which of those could be granted, and a reading that granted as it read would be an unattended thing editing the file that decides what may run unattended.";
  "Separated rather than copied, so the answer the report gives and the answer the granting acts on are the same answer. A second implementation of a safety check is a second thing to keep true, and the two coming apart would be a report saying safe about something the grant refuses, or worse the other way round.";
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
  let open = {
    name: unaliased,
    rule,
    action: "grantable",
    refusals: [],
  };
  return open;
}
