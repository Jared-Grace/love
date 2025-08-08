import {file_js_unparse} from './file_js_unparse.mjs';
import {function_parse} from "./function_parse.mjs";
export async function function_transform(f_name, lambda) {
  let parsed = await function_parse(f_name);
  let {ast} = parsed;
  lambda(ast);
  await file_js_unparse(parsed);
}
