import { null_is_if } from "../../../love/public/src/null_is_if.mjs";
import { js_unparse_try } from "../../../love/public/src/js_unparse_try.mjs";
export function js_unparse_or_self(ast) {
  let code = js_unparse_try(ast);
  code = null_is_if(code, ast);
  return code;
}
