import { object_merge } from "../../../love/public/src/object_merge.mjs";
import { function_name_to_path_search } from "../../../love/public/src/function_name_to_path_search.mjs";
import { function_name_unalias } from "../../../love/public/src/function_name_unalias.mjs";
import { function_parse_unaliased_second } from "../../../love/public/src/function_parse_unaliased_second.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { undefined_is } from "./undefined_is.mjs";
export async function function_transform_result_inner(f_name, lambda$ast) {
  let u2 = await function_name_unalias(f_name);
  let unaliased = property_get(u2, "unaliased");
  let result2 = await function_name_to_path_search(unaliased);
  let u = object_merge(u2, result2);
  let parsed = await function_parse_unaliased_second(u);
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
