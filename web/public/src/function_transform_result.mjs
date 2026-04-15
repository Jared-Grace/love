import { log_unparse } from "../../../love/public/src/log_unparse.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { undefined_is_if_null } from "../../../love/public/src/undefined_is_if_null.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { list_map_async } from "../../../love/public/src/list_map_async.mjs";
import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
export async function function_transform_result(f_names, lambda$ast) {
  let split = text_split_comma(f_names);
  async function lambda_each_function(f_name) {
    log(function_transform_result.name, {
      1: 1,
    });
    let parsed = await function_parse_unaliased(f_name);
    log(function_transform_result.name, {
      1: 2,
    });
    let ast = property_get(parsed, "ast");
    log(function_transform_result.name, {
      1: 3,
    });
    let result = await lambda$ast(ast);
    log(function_transform_result.name, {
      1: 4,
    });
    result = undefined_is_if_null(result);
    log(function_transform_result.name, {
      1: 5,
    });
    await file_js_unparse(parsed);
    log(function_transform_result.name, {});
    return result;
  }
  let r3 = await list_map_async(split, lambda_each_function);
  return r3;
  log_unparse(ast);
}
