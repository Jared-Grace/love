import { js_scope_binds_is } from "./js_scope_binds_is.mjs";
import { js_scope_is } from "./js_scope_is.mjs";
import { js_visit } from "./js_visit.mjs";
import { list_adder } from "./list_adder.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
export function js_scopes_binding(root, name) {
  "every scope under this node that binds the name itself. The node given counts as one of them, so a function asked about a word it takes as a parameter answers with itself, and a function asked about a word its body declares answers with the body.";
  "Unlike the shadowing walk, nothing here asks whether the word is hidden. The caller already knows it is; what is wanted is the binding at one named place, and asking again would only re-derive an answer already in hand.";
  function collect(emit) {
    function consider(v) {
      let node = property_get(v, "node");
      let scope = js_scope_is(node);
      if (not(scope)) {
        return;
      }
      let binds = js_scope_binds_is(node, name);
      if (not(binds)) {
        return;
      }
      emit(node);
    }
    js_visit(root, consider);
  }
  let scopes = list_adder(collect);
  return scopes;
}
