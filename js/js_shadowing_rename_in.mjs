import { js_function_node_find_named_node } from "./js_function_node_find_named_node.mjs";
import { js_name_unbound_assert } from "./js_name_unbound_assert.mjs";
import { js_scope_identifier_rename } from "./js_scope_identifier_rename.mjs";
import { js_scopes_binding } from "./js_scopes_binding.mjs";
import { list_single } from "./list_single.mjs";
export function js_shadowing_rename_in(ast, scope_name, name, name_after) {
  "end one hiding in a file that hides the same word in more than one place: the binding to move is addressed by the function it sits in, so a file with two of them is cleared one at a time by naming each. Only the mentions reading that one binding move; the other bindings of the word, and the outer one they all hide, stay exactly as they were.";
  "The plain rename refuses such a file on purpose - with several inner bindings there is no single one to move, and which is meant is a judgment. Naming the holder supplies exactly that judgment and nothing else, so this stays behaviour-preserving for the same reason the plain one is.";
  "The holder is named rather than counted because a position in a list is not an address: it changes the moment somebody adds a scope above it, and a rename aimed by number would then land on a different binding while still looking right.";
  js_name_unbound_assert(ast, name_after);
  let holder = js_function_node_find_named_node(ast, scope_name);
  let scopes = js_scopes_binding(holder, name);
  let scope = list_single(scopes);
  let renamed = js_scope_identifier_rename(scope, name, name_after);
  return renamed;
}
