import { app_replace_rule_sets_fn_migrate_goals_space_add } from "./app_replace_rule_sets_fn_migrate_goals_space_add.mjs";
import { each_async } from "./each_async.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { list_map } from "./list_map.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_array_expression_single_elements } from "./js_array_expression_single_elements.mjs";
import { app_replace_rule_sets_fns } from "./app_replace_rule_sets_fns.mjs";
export async function app_replace_rule_sets_fns_migrate_goals_space_add() {
  let f_name = app_replace_rule_sets_fns.name;
  let ast = await function_ast(f_name);
  let elements = js_array_expression_single_elements(ast);
  let mapped = list_map(elements, js_identifier_name);
  async function lambda(name) {
    await app_replace_rule_sets_fn_migrate_goals_space_add(name);
  }
  let waited = await each_async(mapped, lambda);
}
