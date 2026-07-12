import { catch_ignore } from "./catch_ignore.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_unparse_try(ast) {
  let code = null;
  function lambda() {
    code = js_unparse(ast);
  }
  catch_ignore(lambda);
  return code;
}
