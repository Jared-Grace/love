import { list_get_end } from "./list_get_end.mjs";
import { each } from "./each.mjs";
import { js_type } from "./js_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { list_get } from "./list_get.mjs";
import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
export function js_atomize(ast) {
  marker();
  js_visit_type(ast, "CallExpression", (v) => {
    let { node } = v;
    let { stack } = v;
    log(list_get_end(stack, 1));
  });
}
