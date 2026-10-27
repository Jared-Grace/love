import { arguments_assert } from "./arguments_assert.mjs";
import { js_module_extras } from "./js_module_extras.mjs";
import { js_unparse } from "./js_unparse.mjs";
export function js_module_extras_codes(ast) {
  "The code of everything on a module's top line beside its imports and exports, one entry each, written out the same way whatever spacing the file used - so two modules can be asked whether they keep the same things outside their functions.";
  arguments_assert(arguments, 1);
  let extras = js_module_extras(ast);
  function lambda(item) {
    let code = js_unparse(item);
    return code;
  }
  let codes = extras.map(lambda);
  return codes;
}
