import { catch_ignore } from "../../../love/public/src/catch_ignore.mjs";
import { js_unparse } from "../../../love/public/src/js_unparse.mjs";
export function js_unparse_try(ast) {
  let code = null;
  function lambda2() {
    code = js_unparse(ast);
  }
  catch_ignore(lambda2);
  return code;
}
