import { file_js_parse } from "../../../love/public/src/file_js_parse.mjs";
import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { undefined_is } from "./undefined_is.mjs";
export async function function_transform_result_inner(f_name, lambda$ast) {
  let u2 = await function_name_unalias(f_name);
  let unaliased = property_get(u2, "unaliased");
  let result2 = await function_name_to_path_search(unaliased);
  let u = object_merge(u2, result2);
  let unaliased2 = property_get(u, "unaliased");
  let f_path = property_get(u, "f_path");
  let parsed_before = await file_js_parse(f_path);
  let parsed = object_merge(
    {
      unaliased2,
    },
    parsed_before,
  );
  let ast = property_get(parsed, "ast");
  let result = await lambda$ast(ast);
  if (undefined_is(result)) {
    result = null;
  }
  let r4 = {
    parsed,
    result,
  };
  return r4;
}
