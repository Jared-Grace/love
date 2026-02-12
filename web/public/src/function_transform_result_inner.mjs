import { function_parse_unaliased_second } from "../../../love/public/src/function_parse_unaliased_second.mjs";
import { function_name_to_path_unalias } from "../../../love/public/src/function_name_to_path_unalias.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { undefined_is } from "./undefined_is.mjs";
export async function function_transform_result_inner(f_name, lambda$ast) {
  const u = await function_name_to_path_unalias(f_name);
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
