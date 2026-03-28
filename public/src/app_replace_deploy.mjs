import { command_line_node_r } from "../../../love/public/src/command_line_node_r.mjs";
import { app_replace_deploy_2 } from "../../../love/public/src/app_replace_deploy_2.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
import { app_replace_rule_sets_fns_names } from "../../../love/public/src/app_replace_rule_sets_fns_names.mjs";
import { app_replace_rule_set_rename } from "../../../love/public/src/app_replace_rule_set_rename.mjs";
import { app_replace_rule_sets_fns_migrate_capitalization_upper } from "../../../love/public/src/app_replace_rule_sets_fns_migrate_capitalization_upper.mjs";
export async function app_replace_deploy() {
  let result = await app_replace_rule_sets_fns_migrate_capitalization_upper();
  let mapped = app_replace_rule_sets_fns_names();
  await each_async(mapped, app_replace_rule_set_rename);
  await command_line_node_r(f_name, args);
  await app_replace_deploy_2();
}
