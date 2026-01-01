import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
export async function function_transform_result(f_name, lambda$ast) {
  let parsed = await function_parse_unaliased(f_name);
  let ast = object_property_get(parsed, "ast");
  let result = await lambda$ast(ast);
  await file_js_unparse(parsed);
  return result;
}
