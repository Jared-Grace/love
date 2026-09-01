import { arguments_assert } from "./arguments_assert.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_function_params_all } from "./js_function_params_all.mjs";
import { list_concat } from "./list_concat.mjs";
import { js_global_names } from "./js_global_names.mjs";
import { list_intersection } from "./list_intersection.mjs";
export function js_globals_shadowed_names(ast) {
  arguments_assert(arguments, 1);
  ("Every word the language and the page already answer to that this function also binds a name of its own to, anywhere inside it.");
  ("A word in here is not supplied from outside any more. Inside this function it means whatever the local binding means, and the global it shares a spelling with cannot be reached at all - so anything treating it as already available wherever a piece of this function is moved to is wrong about it.");
  ("Both kinds of binding are asked for, because either one hides the word: a declaration writes it at its own level, and a parameter writes it at the head of a function. Asking only for declarations would leave a function taking one of these words as a parameter looking like it read the page's own.");
  let declared = js_declared_names(ast);
  let params = js_function_params_all(ast);
  let bound = list_concat(declared, params);
  let globals = js_global_names();
  let shadowed = list_intersection(globals, bound);
  return shadowed;
}
