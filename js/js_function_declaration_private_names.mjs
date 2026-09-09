import { arguments_assert } from "./arguments_assert.mjs";
import { js_function_declaration_personal_names } from "./js_function_declaration_personal_names.mjs";
import { js_function_declaration_params_names } from "./js_function_declaration_params_names.mjs";
import { list_difference } from "./list_difference.mjs";
export function js_function_declaration_private_names(declaration) {
  arguments_assert(arguments, 1);
  ("Every name a function chose for itself apart from the names it gave the things it was handed: its own name, and the names it gave what it made along the way.");
  ("The narrower twin of the reader beside it, and the difference between them is exactly what a search for copies of one function's body inside another is allowed to blank. Blanking a name a function made along the way is safe, because two functions calling the same thing a count and a total are doing the same work. Blanking a name a function was handed is not, because two functions reading a different one of their own arguments at the same place are not doing the same work at all, and a swap that treated them as copies would hand the wrong thing over.");
  ("Anything comparing whole functions wants the wider twin instead, because there the arguments are lined up by where they stand and their names carry no meaning. It is only when a run has to keep working where it already stands that the spelling of what it reads becomes the thing being checked.");
  let personal = js_function_declaration_personal_names(declaration);
  let params = js_function_declaration_params_names(declaration);
  let private_names = list_difference(personal, params);
  return private_names;
}
