import { js_unparse_try } from "../../../love/public/src/js_unparse_try.mjs";
export function js_unparse_or_self(ast) {
  return js_unparse_try(ast);
}
