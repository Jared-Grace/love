import { js_function_params_all } from "./js_function_params_all.mjs";
import { js_catch_clause_names_all } from "./js_catch_clause_names_all.mjs";
import { js_identifiers_referenced_names } from "./js_identifiers_referenced_names.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
import { js_declared_names } from "./js_declared_names.mjs";
import { js_global_names } from "./js_global_names.mjs";
import { list_concat_multiple } from "./list_concat_multiple.mjs";
import { list_difference } from "./list_difference.mjs";
export function js_function_declaration_free_names(declaration) {
  "The names a function body reads but does not itself bind - not its own name, not one of its locals, not a JS global. What is left is everything the body reaches for from outside itself, which is the same thing as what it calls and what it leans on.";
  "Imports are deliberately NOT subtracted here, unlike the whole-module question. A stub that calls one repo function imports that function, so subtracting imports would leave nothing and make every stub look like it reaches for nothing at all. The question asked here is what the body reaches for, not what the file forgot to import.";
  let referenced = js_identifiers_referenced_names(declaration);
  let own = js_function_declaration_name(declaration);
  let locals = js_declared_names(declaration);
  ("What the function is handed is bound as firmly as what it declares, and leaving it out said every parameter was reached for from outside. Both callers below ask about functions that are not written yet, and an unwritten function reads none of what it is handed, so nothing showed it - until a caller asked about finished work and was told that a whole signature came from somewhere else.");
  let handed = js_function_params_all(declaration);
  ("A caught error is bound by neither of those two - it is not declared and it is not written in a parameter list - so it is asked for on its own, the same way the whole-module question asks for it.");
  let caught = js_catch_clause_names_all(declaration);
  let globals = js_global_names();
  let bound = list_concat_multiple([[own], locals, handed, caught, globals]);
  let free = list_difference(referenced, bound);
  return free;
}
