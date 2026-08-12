import { function_ast } from "./function_ast.mjs";
import { js_find_declaration_named } from "./js_find_declaration_named.mjs";
import { list_ensure } from "./list_ensure.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function qa_gates_names_generic(list_f_name) {
  "$plain list_f_name";
  arguments_assert(arguments, 1);
  ("The gates a named list holds, read off the file that list is written in rather than off the list a running program is holding.");
  ("The two answers are the same everywhere except in the one place it matters. A program loads that file once, at its start, and keeps what it read; so a command that adds a gate to the list and then asks what the list holds is answered from before its own edit. It reads as the edit having silently done nothing, which is the worst way for a repair to be wrong - it hands work back as undone at the moment it was done.");
  ("Reading the source instead costs a parse and answers about the file as it now stands, which is what every caller here actually means by the list.");
  ("There is a second reason to read rather than import, and it belongs to the halves. Importing a list of gates imports every gate in it, so anything asking about the whole roster inherits everything the whole roster can reach - and a check on what the gates reach would then be reaching all of it itself, and would name itself as the offender. Reading the names carries none of that.");
  ("Which list is a parameter because there are two of them and they are written the same way: the whole roster, and the half asked of this machine rather than of a frozen copy. Both spell their gates as a run of names given to a binding called gates, so one reading answers for either.");
  let ast = await function_ast(list_f_name);
  let found = js_find_declaration_named(ast, "gates");
  let selects = list_ensure(found);
  let elements = js_selects_array_elements(ast, selects);
  let names = list_map_property(elements, "name");
  return names;
}
