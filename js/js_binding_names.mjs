import { js_declared_names } from "./js_declared_names.mjs";
import { js_function_params_all } from "./js_function_params_all.mjs";
import { js_caught_names } from "./js_caught_names.mjs";
import { js_function_expressions_own_names } from "./js_function_expressions_own_names.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
export function js_binding_names(ast) {
  "every name this module binds itself: declared functions and variables, every parameter, every name a catch clause binds, and the name a function expression carries for itself - nested scopes included. Duplicates are kept on purpose — a name bound twice is the signal. Imported names are excluded, because an import binds the repo function itself, which is the thing that must not be shadowed.";
  "Every caller reads this to SUBTRACT - to drop the names that are the file's own before treating what is left as the repo's. So a name missing from here is the dangerous direction: it leaves a local looking like the repo function of that name, and whatever was said about the repo function gets acted on against something else entirely. A name wrongly present only costs a rewrite that does not happen.";
  "The last two kinds were missing for exactly as long as the reading was built from declarations and parameters alone, and neither is either of those: a caught name is written like a parameter but belongs to no function, and a function expression's own name is readable only inside itself, so it is not declared to anything around it. Measured across the whole repo they are eighty-three and three hundred and twenty-two bindings, and two of them hid the repo's own error.";
  let declared = js_declared_names(ast);
  let params = js_function_params_all(ast);
  let caught = js_caught_names(ast);
  let own = js_function_expressions_own_names(ast);
  let names = list_concat_multiple([declared, params, caught, own]);
  return names;
}
