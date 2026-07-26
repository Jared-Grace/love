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
  let globals = js_global_names();
  let bound = list_concat_multiple([[own], locals, globals]);
  let free = list_difference(referenced, bound);
  return free;
}
