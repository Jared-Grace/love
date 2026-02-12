import { assert_arguments } from "../../../love/public/src/assert_arguments.mjs";
import { function_transform_result } from "../../../love/public/src/function_transform_result.mjs";
import { function_parse_declaration_js_unparse } from "../../../love/public/src/function_parse_declaration_js_unparse.mjs";
export async function function_transform(f_name, lambda$ast) {
  assert_arguments(arguments, 2);
  await function_transform_result(f_name, lambda$ast);
  let output = await function_parse_declaration_js_unparse(f_name);
  return output;
}
