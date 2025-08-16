import { log_keep } from "./log_keep.mjs";
import { log } from "./log.mjs";
import { file_js_unparse } from "./file_js_unparse.mjs";
import { function_parse } from "./function_parse.mjs";
export async function function_transform(f_name, lambda$ast) {
  log_keep(function_transform.name + " " + f_name);
  let parsed = await function_parse(f_name);
  let { ast } = parsed;
  let result = await lambda$ast(ast);
  await file_js_unparse(parsed);
  if (false) {
  }
  return result;
}
