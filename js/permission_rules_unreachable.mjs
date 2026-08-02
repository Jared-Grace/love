import { permission_rules_unreachable_tool_unmatched } from "./permission_rules_unreachable_tool_unmatched.mjs";
import { permission_rules_unreachable_bash } from "./permission_rules_unreachable_bash.mjs";
import { permission_rules_unreachable_file } from "./permission_rules_unreachable_file.mjs";
import { permission_rules_unreachable_self_settings } from "./permission_rules_unreachable_self_settings.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function permission_rules_unreachable() {
  "audit: every allow rule that can never take effect, whichever tool it grants";
  "reachability is not one question but one per decider. a command rule is judged by the bash guard, a memory path by the file-path hook, and a write inside Claude Code's own config folder by a built-in guard nothing here can configure, and a rule invisible to all of them is simply not checked, so the audit is the sum of what each decider can prove";
  "the permission engine is a decider too, and the one that answers without being handed a path: it matches a file tool against Edit rules alone, so a rule naming any of the other file-editing tools is dead on its tool name whatever it grants";
  let bash = await permission_rules_unreachable_bash();
  let file = await permission_rules_unreachable_file();
  let self_settings = await permission_rules_unreachable_self_settings();
  let unmatched = await permission_rules_unreachable_tool_unmatched();
  let offenders = [];
  list_add_multiple(offenders, bash);
  list_add_multiple(offenders, file);
  list_add_multiple(offenders, self_settings);
  list_add_multiple(offenders, unmatched);
  return offenders;
}
