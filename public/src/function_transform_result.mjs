import { null_is } from "../../../love/public/src/null_is.mjs";
import { file_read_cached } from "../../../love/public/src/file_read_cached.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
import { data_all_initialize } from "../../../love/public/src/data_all_initialize.mjs";
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
  await lambda2();
  return;
  let d_path = data_path();
  await data_all_initialize(d_path);
  let r = await file_transform_cached(d_path, lambda2);
  return r;
  let value = null;
  function lambda() {
    if (null_is(value)) {
    }
  }
  let exists = global_function_property_set(file_read_cached, lambda);
}
