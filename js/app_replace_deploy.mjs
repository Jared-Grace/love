import { command_line_node_r } from "./command_line_node_r.mjs";
import { app_replace_deploy_inner } from "./app_replace_deploy_inner.mjs";
import { each_async } from "./each_async.mjs";
import { app_replace_rule_sets_fns_names } from "./app_replace_rule_sets_fns_names.mjs";
import { app_replace_rule_set_rename } from "./app_replace_rule_set_rename.mjs";
import { app_replace_rule_sets_fns_migrate_capitalization_upper } from "./app_replace_rule_sets_fns_migrate_capitalization_upper.mjs";
export async function app_replace_deploy() {
  let result = await app_replace_rule_sets_fns_migrate_capitalization_upper();
  let mapped = app_replace_rule_sets_fns_names();
  await each_async(mapped, app_replace_rule_set_rename);
  await command_line_node_r(app_replace_deploy_inner.name, []);
}
