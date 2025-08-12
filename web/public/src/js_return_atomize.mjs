import { js_node_atomize } from "./js_node_atomize.mjs";
import { js_visit_match } from "./js_visit_match.mjs";
import { js_return_on } from "./js_return_on.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { noop } from "./noop.mjs";
import { js_identifiers_names } from "./js_identifiers_names.mjs";
export function js_return_atomize(ast) {
  let existing = js_identifiers_names(ast);
  js_visit_type(ast, "ReturnStatement", (v) => {
    let { node } = v;
    js_return_on(node, noop, identifier_not);
    function identifier_not(argument) {
      let v = js_visit_match(argument);
      js_node_atomize(existing, v);
    }
  });
}
