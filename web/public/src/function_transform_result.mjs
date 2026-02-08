import { text_split_comma } from "../../../love/public/src/text_split_comma.mjs";
import { data_path } from "../../../love/public/src/data_path.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
import { data_all_initialize } from "../../../love/public/src/data_all_initialize.mjs";
import { file_transform_cached } from "../../../love/public/src/file_transform_cached.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
import { each_async } from "../../../love/public/src/each_async.mjs";
export async function function_transform_result(f_names, lambda$ast) {
  let split = text_split_comma(f_names);
  async function lambda(f_name) {
    async function lambda2() {
      let parsed = await function_parse_unaliased(f_name);
      let ast = object_property_get(parsed, "ast");
      let result = await lambda$ast(ast);
      await file_js_unparse(parsed);
      return result;
    }
    await lambda2();
  }
  await each_async(split, lambda);
  return;
  let d_path = data_path();
  await data_all_initialize(d_path);
  let r = await file_transform_cached(d_path, lambda2);
  return r;
}
