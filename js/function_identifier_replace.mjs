import { function_current_get } from "./function_current_get.mjs";
import { function_identifier_replace_lambda } from "./function_identifier_replace_lambda.mjs";
import { function_transform } from "./function_transform.mjs";
export async function function_identifier_replace(
  identifier_name,
  replacement,
) {
  let f_name = await function_current_get();
  let lambda2 = function_identifier_replace_lambda(identifier_name, replacement);
  let v2 = await function_transform(f_name, lambda2);
  return v2;
}
