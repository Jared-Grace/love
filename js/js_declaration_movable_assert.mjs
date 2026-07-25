import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { js_module_variable_names } from "./js_module_variable_names.mjs";
import { list_intersect_empty_is_assert_json } from "./list_intersect_empty_is_assert_json.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
export function js_declaration_movable_assert(ast, declaration) {
  "Refuse to move a function out of its file when it reads or writes one of that file's own top-level variables. Such a function is not a separate unit: the variable is how it agrees with its neighbours about state, and a file boundary cannot carry that agreement. Moving it leaves the name bound to nothing, and an assignment to it turns into a fresh local that is thrown away - so the memoization or the pool or the counter it was guarding quietly stops working, with nothing failing loudly enough to notice.";
  "Shadowing makes this err toward refusing: a local inside the function that happens to reuse an outer name reads as a use of it. Refusing to move something movable costs a message, while moving something unmovable costs a bug that only shows up in production, so the asymmetry is chosen on purpose.";
  let referenced = js_identifiers_referenced_names(declaration);
  let shared = js_module_variable_names(ast);
  let name = js_function_declaration_name(declaration);
  list_intersect_empty_is_assert_json(referenced, shared, {
    name,
    hint: "this function shares top-level variables with the rest of its file, so it cannot become a file of its own — move the shared variables in with it, or pass them as arguments, or leave it where it is",
  });
}
