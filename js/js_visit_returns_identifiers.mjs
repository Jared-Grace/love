import { js_return_argument_identifier_is_if } from "./js_return_argument_identifier_is_if.mjs";
import { js_visit_returns } from "./js_visit_returns.mjs";
import { property_get } from "./property_get.mjs";
export function js_visit_returns_identifiers(ast, lambda2) {
  function lambda(v) {
    let node = property_get(v, "node");
    function lambda5() {
      lambda2({
        node,
        argument,
        v,
      });
    }
    let argument = js_return_argument_identifier_is_if(node, lambda5);
  }
  js_visit_returns(ast, lambda);
}
