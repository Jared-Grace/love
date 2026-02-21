import { js_statement_block_new } from "../../../love/public/src/js_statement_block_new.mjs";
import { not } from "../../../love/public/src/not.mjs";
import { js_visit_type_each_async } from "../../../love/public/src/js_visit_type_each_async.mjs";
import { object_replace } from "../../../love/public/src/object_replace.mjs";
import { list_includes } from "../../../love/public/src/list_includes.mjs";
import { js_node_type } from "../../../love/public/src/js_node_type.mjs";
import { object_copy } from "../../../love/public/src/object_copy.mjs";
import { js_node_type_not_is } from "../../../love/public/src/js_node_type_not_is.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export async function js_if_blockify_generic(
  ast,
  type,
  property_name,
  add_copy,
) {
  async function lambda(v) {
    let node = property_get(v, "node");
    let body = property_get(node, property_name);
    let nti = js_node_type_not_is(body, "BlockStatement");
    if (nti) {
      let copy = object_copy(body);
      let nt = js_node_type(body);
      let includes = list_includes(["EmptyStatement"], nt);
      const bs_body = [];
      if (not(includes)) {
        add_copy(bs_body, copy);
      }
      let from = js_statement_block_new(bs_body);
      object_replace(body, from);
    }
  }
  await js_visit_type_each_async(ast, type, lambda);
}
