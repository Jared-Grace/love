import { log } from "../../../love/public/src/log.mjs";
import { js_visit_type } from "../../../love/public/src/js_visit_type.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export function js_destructure_functionize(ast) {
  marker("1");
  function lambda(v) {
  return;$g$v$node
    log({
      v,
    });
  }
  js_visit_type(ast, "VariableDeclarator", lambda);
  let { node, parent, context } = a;
}
