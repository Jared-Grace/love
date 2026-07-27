import { text_combine } from "./text_combine.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { permission_grant_rule } from "./permission_grant_rule.mjs";
import { permission_grant_refusals_context } from "./permission_grant_refusals_context.mjs";
import { permission_run_names } from "./permission_run_names.mjs";
import { permission_settings_paths } from "./permission_settings_paths.mjs";
import { permission_rule_command_probe } from "./permission_rule_command_probe.mjs";
import { guard_check } from "./guard_check.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { json_format_to_spaces } from "./json_format_to_spaces.mjs";
import { list_first } from "./list_first.mjs";
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
  ("the repo-shared settings file rather than the per-machine one, so peers and the gates see the grant");
  let list = permission_settings_paths();
  let settings_path = list_first(list);
  let settings = await file_read_json(settings_path);
  let permissions = property_get(settings, "permissions");
  let allow = property_get(permissions, "allow");
  list_add(allow, rule);
  ("the width this file is already kept at — rewriting it at another turns a one-line addition into a whole-file diff");
  let spaces = 2;
  let json = json_format_to_spaces(settings, spaces);
  ("the file ends in a newline and every other tool that touches it keeps one — dropping it makes the last line read as changed in every later diff");
  let json_line = text_combine(json, "\n");
  await file_overwrite(settings_path, json_line);
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
