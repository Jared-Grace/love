import { app_replace_rule_sets_fns_transform_lambda_curried_right } from "./app_replace_rule_sets_fns_transform_lambda_curried_right.mjs";
import { functions_transform_list } from "./functions_transform_list.mjs";
import { app_replace_rule_sets_fns_names } from "./app_replace_rule_sets_fns_names.mjs";
export async function app_replace_rule_sets_fns_transform(lambda$a) {
  let names = app_replace_rule_sets_fns_names();
  let r =
    await app_replace_rule_sets_fns_transform_lambda_curried_right(lambda$a);
  await functions_transform_list(names, r);
  return names;
}
