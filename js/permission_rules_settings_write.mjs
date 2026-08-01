import { permission_rules } from "./permission_rules.mjs";
import { permission_rule_settings_write_is } from "./permission_rule_settings_write_is.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export async function permission_rules_settings_write() {
  "audit: every allow rule, in either settings file, that would let a tool change a file holding Claude's own permission rules";
  "both files are swept, not just the shared one. A rule granting the shared file is caught by the file having to match what the granted-names list generates; a rule granting the local file is watched against a record; and a rule sitting in the LOCAL file granting either of them is the case both of those read past, since one checks contents rather than authors and the other only notices that the local file changed.";
  let rules = await permission_rules();
  let offenders = [];
  for (let rule of rules) {
    let widens = await permission_rule_settings_write_is(rule);
    if (not(widens)) {
      continue;
    }
    list_add(offenders, rule);
  }
  return offenders;
}
