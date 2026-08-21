import { app_replace_rule_sets_fns_rules_used } from "./app_replace_rule_sets_fns_rules_used.mjs";
import { app_replace_rule_sets_fns_rules_used_rows_write } from "./app_replace_rule_sets_fns_rules_used_rows_write.mjs";
export async function app_replace_rule_sets_fns_rules_used_rows_rewrite() {
  "Renders the saved list of rules-for-a-goal from what it currently reads back as, and so must leave the file exactly as it found it.";
  "It needs nothing but the repo, where the generator needs the whole solver run over every exercise - so this is the cheap way to check that the short form and the reader of it still agree.";
  let rule_sets = app_replace_rule_sets_fns_rules_used();
  let written =
    await app_replace_rule_sets_fns_rules_used_rows_write(rule_sets);
  return written;
}
