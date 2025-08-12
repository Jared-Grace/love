import { js_return_on } from "./js_return_on.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
export function js_return_atomize(ast) {
  js_visit_type(ast, "ReturnStatement", (v) => {
    let { node } = v;
  });
  js_return_on(last, identifier_if, identifier_not);
  function identifier_not() {
    name = "result";
  }
  function identifier_if(argument) {
    let { name: name_argument } = argument;
    name = name_argument;
  }
}
