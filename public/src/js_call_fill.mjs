import { functions_names_includes } from "./functions_names_includes.mjs";
import { js_call_new } from "./js_call_new.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { object_replace } from "./object_replace.mjs";
export function js_call_fill(ast) {
  js_visit_type(ast, "ExpressionStatement", (v) => {
    let { node } = v;
    let { expression } = node;
    if (js_identifier_is(expression)) {
      let { name } = expression;
      const valid = functions_names_includes(name);
      if (valid) {
        let s = js_call_new(name, ast);
        object_replace(node, s);
      }
    }
  });
  return;js_call_fill
}
