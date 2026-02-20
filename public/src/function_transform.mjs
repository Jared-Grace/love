import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { function_transform_result } from "../../../love/public/src/function_transform_result.mjs";
import { function_parse_declaration_js_unparse } from "../../../love/public/src/function_parse_declaration_js_unparse.mjs";
export async function function_transform(f_name, lambda$ast) {
  arguments_assert(arguments, 2);
  await function_transform_result(f_name, lambda$ast);
  let output = await function_parse_declaration_js_unparse(f_name);
  return output;
}
