import { arguments_assert } from "./arguments_assert.mjs";
import { js_module_extras } from "./js_module_extras.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_unparse } from "./js_unparse.mjs";
import { error_json } from "./error_json.mjs";
export function js_module_extras_none_assert(ast, path) {
  "$plain path";
  "Refuses a module holding anything on its top line beside imports and exports, naming what it holds, so a write that carries only the function stops instead of dropping the rest.";
  "★ WHY A REFUSAL AND NOT A WARNING: the write that drops a variable kept beside a function leaves a file that parses, canonicalises and commits, and then throws on every call because the body reads a name nothing binds any more. That is how the Strong's Greek dictionary lookup broke on 2026-10-12, with nothing red until the whole repo check ran.";
  arguments_assert(arguments, 2);
  let extras = js_module_extras(ast);
  let held = list_empty_not_is(extras);
  if (held) {
    function lambda(item) {
      let code = js_unparse(item);
      return code;
    }
    let codes = extras.map(lambda);
    error_json({
      hint: "this file holds more than its imports and its one function, and writing the function alone would drop the rest; leave it alone here, or move what it holds inside the function first by a route that keeps the whole file",
      path,
      extras: codes,
    });
  }
}
