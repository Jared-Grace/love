import { object_replace } from "./object_replace.mjs";
import { js_statement_block_new } from "./js_statement_block_new.mjs";
import { not } from "./not.mjs";
import { list_includes } from "./list_includes.mjs";
import { js_node_type } from "./js_node_type.mjs";
import { object_copy } from "./object_copy.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_if_blockify_generic_node(node, property_name, add_copy) {
  let body = property_get(node, property_name);
  let nti = js_node_type_not_is(body, "BlockStatement");
  if (nti) {
    let copy = object_copy(body);
    let nt = js_node_type(body);
    let includes = list_includes(["EmptyStatement"], nt);
    let bs_body = [];
    if (not(includes)) {
      add_copy(bs_body, copy);
    }
    let from = js_statement_block_new(bs_body);
    object_replace(body, from);
  }
}
