import { js_list_nodes_object_expression } from "./js_list_nodes_object_expression.mjs";
import { app_replace_rule_sets_fn_migrate_goals_space_add_elements } from "./app_replace_rule_sets_fn_migrate_goals_space_add_elements.mjs";
import { function_transform } from "./function_transform.mjs";
import { log } from "./log.mjs";
export async function app_replace_rule_sets_fn_migrate_space_add(name) {
  async function lambda(ast) {
    log(app_replace_rule_sets_fn_migrate_space_add.name, {
      name,
    });
    let list = js_list_nodes_object_expression(ast);
    app_replace_rule_sets_fn_migrate_goals_space_add_elements(list);
  }
  let output = await function_transform(name, lambda);
}
