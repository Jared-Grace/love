import { lambda_value } from "../../../love/public/src/lambda_value.mjs";
import { js_code_binary } from "../../../love/public/src/js_code_binary.mjs";
export function app_code_lesson_operators_dot_numbers_example(operator) {
  let combined = js_code_binary("shirt", operator, "size");
  let example_get = lambda_value(combined);
  return example_get;
}
