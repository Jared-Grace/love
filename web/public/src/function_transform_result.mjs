import { data_path } from "../../../love/public/src/data_path.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { file_transform_cached } from "../../../love/public/src/file_transform_cached.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
export async function function_transform_result(f_name, lambda$ast) {
  async function lambda2() {
    let parsed = await function_parse_unaliased(f_name);
    let ast = object_property_get(parsed, "ast");
    let result = await lambda$ast(ast);
    await file_js_unparse(parsed);
    return result;
  }
  let d_path = data_path();
  let r = await file_transform_cached(d_path, lambda2);
  return r;
}
