import { fn_name } from "./fn_name.mjs";
import { function_ast } from "./function_ast.mjs";
import { js_find_declaration_named } from "./js_find_declaration_named.mjs";
import { list_ensure } from "./list_ensure.mjs";
import { js_selects_array_elements } from "./js_selects_array_elements.mjs";
import { list_map_property } from "./list_map_property.mjs";
export async function qa_gates_names() {
  "The gates the whole-repo gate lists, read off the file it is written in rather than off the list a running program is holding.";
  "The two answers are the same everywhere except in the one place it matters. A program loads that file once, at its start, and keeps what it read; so a command that adds a gate to the list and then asks what the list holds is answered from before its own edit. It reads as the edit having silently done nothing, which is the worst way for a repair to be wrong - it hands work back as undone at the moment it was done.";
  "Reading the source instead costs a parse and answers about the file as it now stands, which is what every caller here actually means by the list.";
  let f_name = fn_name("qa_gates");
  let ast = await function_ast(f_name);
  let found = js_find_declaration_named(ast, "gates");
  let selects = list_ensure(found);
  let elements = js_selects_array_elements(ast, selects);
  let names = list_map_property(elements, "name");
  return names;
}
