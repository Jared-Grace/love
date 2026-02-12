import { property_get } from "../../../love/public/src/property_get.mjs";
import { function_parse } from "../../../love/public/src/function_parse.mjs";
export async function function_transform_result_inner(f_name, lambda$ast) {
  let parsed = await function_parse(f_name);
  let ast = property_get(parsed, "ast");
  return ast;
}
