import { log_unparse } from "./log_unparse.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { log } from "./log.mjs";
import { js_visit_type } from "./js_visit_type.mjs";
import { object_replace } from "./object_replace.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_statement_return } from "./js_statement_return.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
import { marker } from "./marker.mjs";
export async function js_if_blockify(ast) {
  return;
  async function lambda(v) {
    let { node } = v;
    let body = object_property_get(node, "consequent");
    const type = "BlockStatement";
    let nti = js_node_type_not_is(body, type);
    if (nti) {
      let copy = object_copy(body);
      let r = js_statement_return("");
      object_property_set(r, "argument", copy);
      return;
      object_replace(body, {
        type: "BlockStatement",
        body: [r],
      });
      await log_unparse(body);
    }
  }
  await js_visit_type_each_async(ast, "IfStatement", lambda);
}
