import { each } from "./each.mjs";
import { js_type } from "./js_type.mjs";
import { js_visit } from "./js_visit.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { log } from "./log.mjs";
import { marker } from "./marker.mjs";
export function js_atomize(ast) {
  marker();
  js_visit_type(ast, "BlockStatement", (v) => {
    let { node } = v;
    let { body } = node;
    each(body, (b) => {
      log(b);
    });
  });
}
