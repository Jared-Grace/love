import { js_visit_returns } from "../../../love/public/src/js_visit_returns.mjs";
import { js_identifier_is_if } from "../../../love/public/src/js_identifier_is_if.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function js_visit_returns_identifiers(lambda2, ast) {
  function lambda(v) {
    let node = property_get(v, "node");
    let argument = property_get(node, "argument");
    function lambda5() {
      lambda2(node, argument);
    }
    js_identifier_is_if(argument, lambda5);
  }
  js_visit_returns(ast, lambda);
}
