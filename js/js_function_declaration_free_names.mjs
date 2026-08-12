import { js_free_names_generic } from "./js_free_names_generic.mjs";
import { js_function_declaration_name } from "./js_function_declaration_name.mjs";
export function js_function_declaration_free_names(declaration) {
  "The names a function body reads but does not itself bind - not its own name, not one of its locals, not one of the words it is handed, not an error it catches, not a JS global. What is left is everything the body reaches for from outside itself, which is the same thing as what it calls and what it leans on.";
  "Imports are deliberately NOT subtracted here, unlike the whole-module question. A stub that calls one repo function imports that function, so subtracting imports would leave nothing and make every stub look like it reaches for nothing at all. The question asked here is what the body reaches for, not what the file forgot to import.";
  "A lone declaration is not a module, so its own name is not among the names declared inside it the way it would be if the whole file were being read. It is handed to the shared reading for that reason, in the place the whole-module question hands its imports - and that one argument is now the whole difference between the two.";
  let own = js_function_declaration_name(declaration);
  let free = js_free_names_generic(declaration, [own]);
  return free;
}
