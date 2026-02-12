import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_parse_unaliased } from "../../../love/public/src/function_parse_unaliased.mjs";
export async function function_transform_result_inner(f_name, lambda$ast) {
  let parsed = await function_parse_unaliased(f_name);
  let ast = property_get(parsed, "ast");
  let result = await lambda$ast(ast);
  let r4 = {
    parsed,
    result,
  };
  return r4;
}
