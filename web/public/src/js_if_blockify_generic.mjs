import { not } from "./not.mjs";
import { js_visit_type_each_async } from "./js_visit_type_each_async.mjs";
import { object_replace } from "./object_replace.mjs";
import { list_add } from "./list_add.mjs";
import { object_property_set } from "./object_property_set.mjs";
import { js_statement_return } from "./js_statement_return.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { object_property_get } from "./object_property_get.mjs";
export async function js_if_blockify_generic(ast, type, property_name) {
  async function lambda(v) {
    let { node } = v;
    let body = object_property_get(node, property_name);
    let nti = js_node_type_not_is(body, "BlockStatement");
    if (nti) {
      let copy = object_copy(body);
      let nt = js_node_type(body);
      let includes = list_includes(["EmptyStatement"], nt);
      const bs_body = [];
      if (not(includes)) {
        let r = js_statement_return("");
        object_property_set(r, "argument", copy);
        list_add(bs_body, r);
      }
      object_replace(body, {
        type: "BlockStatement",
        body: bs_body,
      });
    }
  }
  await js_visit_type_each_async(ast, type, lambda);
}
