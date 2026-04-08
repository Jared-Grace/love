import { null_is } from "../../../love/public/src/null_is.mjs";
import { js_unparse_try } from "../../../love/public/src/js_unparse_try.mjs";
export function js_unparse_or_self(ast) {
  let code = js_unparse_try(ast);
  if (null_is(value)) {
    code = ast;
  }
  return code;
}
