import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
export function js_unparse_try(ast) {
  let code = null;
  code = js_unparse(ast);
  return code;
}
