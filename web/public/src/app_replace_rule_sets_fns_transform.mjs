import { app_replace_rule_sets_fns_transform_lambda_curried_right } from "../../../love/public/src/app_replace_rule_sets_fns_transform_lambda_curried_right.mjs";
import { app_replace_rule_sets_fns_transform_lambda } from "../../../love/public/src/app_replace_rule_sets_fns_transform_lambda.mjs";
import { functions_transform_list } from "../../../love/public/src/functions_transform_list.mjs";
import { app_replace_rule_sets_fns_names } from "../../../love/public/src/app_replace_rule_sets_fns_names.mjs";
export async function app_replace_rule_sets_fns_transform(lambda$a) {
  let names = app_replace_rule_sets_fns_names();
  async function lambda(a) {}
  let r2 =
    await app_replace_rule_sets_fns_transform_lambda_curried_right(lambda);
  await functions_transform_list(
    names,
    app_replace_rule_sets_fns_transform_lambda,
  );
  return names;
}
