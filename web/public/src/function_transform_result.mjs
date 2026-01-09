import { function_parse_unaliased_second } from "../../../love/public/src/function_parse_unaliased_second.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { file_transform_cached } from "../../../love/public/src/file_transform_cached.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
export async function function_transform_result(f_name, lambda$ast) {

    const v = await function_name_to_path_unalias(f_name);
    let f_path = object_property_get(v, "f_path");
    async function lambda2() {
      let parsed = await function_parse_unaliased_second(v);
      let ast = object_property_get(parsed, "ast");
      let result = await lambda$ast(ast);
      await file_js_unparse(parsed);
      return result;
    }
    let r = await file_transform_cached(f_path, lambda2);
    return r;
}
