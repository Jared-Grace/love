import { js_function_declaration_free_names } from "./js_function_declaration_free_names.mjs";
import { list_single_item } from "./list_single_item.mjs";
import { todo } from "./todo.mjs";
import { lists_equal_pair } from "./lists_equal_pair.mjs";
export function js_function_stub_is(declaration) {
  "Whether a function is an unwritten placeholder - a body that reaches for nothing outside itself except the one call that says this is not written yet.";
  "A repo written by many hands at once accumulates these, and they all look exactly alike, because there is only one way to say nothing has been written. That makes them pile up under a single shape and read as the same work under many names, which is the opposite of what is true: they are many different jobs, none of them done. Telling them apart lets a reader see an unfinished job rather than a duplicated one.";
  let free = js_function_declaration_free_names(declaration);
  let wanted = list_single_item(todo.name);
  let stub = lists_equal_pair(free, wanted);
  return stub;
}
