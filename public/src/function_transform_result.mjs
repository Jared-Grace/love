import { file_js_unparse } from "../../../love/public/src/file_js_unparse.mjs";
import { function_parse } from "../../../love/public/src/function_parse.mjs";
export async function function_transform_result(f_name, lambda$ast) {
  let parsed = await function_parse(f_name);
  let { ast } = parsed;
  let result = await lambda$ast(ast);
  await file_js_unparse(parsed);
  return result;
}
