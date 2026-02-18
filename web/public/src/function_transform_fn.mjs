import { app_replace_rule_sets } from "../../../love/public/src/app_replace_rule_sets.mjs";
import { function_transform } from "../../../love/public/src/function_transform.mjs";
export async function function_transform_fn(fn, lambda) {
  let r = await function_transform(app_replace_rule_sets.name, lambda);
  return r;
}
