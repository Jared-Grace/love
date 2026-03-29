import { app_replace_rule_sets_fns_transform_lambda } from "../../../love/public/src/app_replace_rule_sets_fns_transform_lambda.mjs";
export async function app_replace_rule_sets_fns_transform_lambda_curried_right(
  lambda$a,
) {
  let r2 =
    async function app_replace_rule_sets_fns_transform_lambda_curried_right_result(
      ast,
    ) {
      let r = await app_replace_rule_sets_fns_transform_lambda(ast, lambda$a);
      return r;
    };
  return r2;
}
