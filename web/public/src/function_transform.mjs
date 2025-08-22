import { function_transform_result } from "./function_transform_result.mjs";
import { function_parse_declaration_js_unparse } from "./function_parse_declaration_js_unparse.mjs";
export async function function_transform(f_name, lambda$ast) {
  await function_transform_result(f_name, lambda$ast);
  let output = await function_parse_declaration_js_unparse(f_name);
  return output;
}
