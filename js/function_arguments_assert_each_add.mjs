import { arguments_assert } from "./arguments_assert.mjs";
import { function_transform } from "./function_transform.mjs";
import { function_arguments_assert_each_add_lambda } from "./function_arguments_assert_each_add_lambda.mjs";
export async function function_arguments_assert_each_add(f_name, predicates_comma) {
  arguments_assert(arguments, 2);
  let lambda = function_arguments_assert_each_add_lambda(predicates_comma);
  await function_transform(f_name, lambda);
}
