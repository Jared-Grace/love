import { permission_rules_unreachable_bash } from "./permission_rules_unreachable_bash.mjs";
import { permission_rules_unreachable_file } from "./permission_rules_unreachable_file.mjs";
import { permission_rules_unreachable_self_settings } from "./permission_rules_unreachable_self_settings.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
export async function permission_rules_unreachable() {
  "audit: every allow rule that can never take effect, whichever tool it grants";
  "reachability is not one question but one per decider. a command rule is judged by the bash guard, a memory path by the file-path hook, and a write inside Claude Code's own config folder by a built-in guard nothing here can configure, and a rule invisible to all of them is simply not checked, so the audit is the sum of what each decider can prove";
  let bash = await permission_rules_unreachable_bash();
  let file = await permission_rules_unreachable_file();
  let self_settings = await permission_rules_unreachable_self_settings();
  let write = await permission_rules_unreachable_write();
  let offenders = [];
  list_add_multiple(offenders, bash);
  list_add_multiple(offenders, file);
  list_add_multiple(offenders, self_settings);
  return offenders;
}
