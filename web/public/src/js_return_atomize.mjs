import { js_return_on } from "./js_return_on.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { noop } from "./noop.mjs";
export function js_return_atomize(ast) {
  js_visit_type(ast, "ReturnStatement", (v) => {
    let { node } = v;
    js_return_on(node, noop, identifier_not);
    function identifier_not() {
      name = "result";
    }
  });
}
