import { undefined_is_if_null } from "./undefined_is_if_null.mjs";
import { function_parse_unaliased } from "./function_parse_unaliased.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
export async function function_transform_result(f_names, lambda$ast) {
  let split = text_split_comma(f_names);
  async function lambda_each_function(f_name) {
    let parsed = await function_parse_unaliased(f_name);
    let ast = property_get(parsed, "ast");
    let result = await lambda$ast(ast);
    result = undefined_is_if_null(result);
    await file_js_unparse(parsed);
    return result;
  }
  let r = await list_map_async(split, lambda_each_function);
  return r;
}
