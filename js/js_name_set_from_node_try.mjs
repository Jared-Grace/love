import { js_list_declarations_nodes } from "./js_list_declarations_nodes.mjs";
import { js_declaration_declarators_get } from "./js_declaration_declarators_get.mjs";
import { property_get } from "./property_get.mjs";
import { js_node_name_text_try } from "./js_node_name_text_try.mjs";
import { not_equal } from "./not_equal.mjs";
import { property_or_null } from "./property_or_null.mjs";
export function js_name_set_from_node_try(ast, name) {
  "Whatever a written name was set from, and nothing at all when it was never set here.";
  "Asked because a reading that stops at what stands in an argument stops one step too early. A value is almost never handed to a call where it is made; it is set on one line and passed on the next, and a reading that only looks at the argument sees a name and learns nothing - which is the same answer it gives for a word typed in by hand, so the two cannot be told apart.";
  "The whole thing it was set from is handed back rather than one fact about it, because the callers want different facts: one asks which function made the value, another asks whether it was simply a written word. Answering only the first left the second with no way to ask at all.";
  "One step is all this takes, on purpose. Following a name through a second name, and through a shape being taken apart, and back out of a lambda is a different piece of work with different failures, and nothing here has needed it. A caller that hides its value behind two steps reads here as coming from nowhere, which is the safe way for a reading like this to be wrong.";
  let nodes = js_list_declarations_nodes(ast, null);
  for (let node of nodes) {
    let declarators = js_declaration_declarators_get(node);
    for (let declarator of declarators) {
      let bound_node = property_get(declarator, "id");
      let bound = js_node_name_text_try(bound_node);
      let other = not_equal(bound, name);
      if (other) {
        continue;
      }
      let set_from = property_or_null(declarator, "init");
      return set_from;
    }
  }
  return null;
}
