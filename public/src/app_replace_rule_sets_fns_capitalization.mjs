import { function_transform } from "../../../love/public/src/function_transform.mjs";
import { app_replace_rule_sets_fn_migrate_goals_space_add_elements } from "../../../love/public/src/app_replace_rule_sets_fn_migrate_goals_space_add_elements.mjs";
import { js_list_type_nodes } from "../../../love/public/src/js_list_type_nodes.mjs";
import { app_replace_rule_sets_fn_migrate_space_add } from "../../../love/public/src/app_replace_rule_sets_fn_migrate_space_add.mjs";
import { log } from "../../../love/public/src/log.mjs";
export async function app_replace_rule_sets_fns_capitalization() {
  async function lambda3(ast) {
    log(app_replace_rule_sets_fns_capitalization.name, {
      name,
    });
    const type = "ObjectExpression";
    let list = js_list_type_nodes(ast, type);
    app_replace_rule_sets_fn_migrate_goals_space_add_elements(list);
  }
  let output = await function_transform(name, lambda3);
}
