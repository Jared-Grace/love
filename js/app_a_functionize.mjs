import { js_node_to_block } from "./js_node_to_block.mjs";
import { property_path_get_2 } from "./property_path_get_2.mjs";
import { js_functionize } from "./js_functionize.mjs";
import { property_get } from "./property_get.mjs";
export async function app_a_functionize(a, f_name_new) {
  let a_first = property_path_get_2(a, "context", app_a_functionize.name);
  function lambda(ai) {
    let node = property_get(ai, "node");
    let ast_inner = property_get(ai, "ast");
    let f = js_node_to_block(ast_inner, node);
    return f;
  }
  let a_f = lambda(a);
  let index = property_get(a_f, "index");
  let body = property_get(a_f, "body");
  let a_first_f = lambda(a_first);
  let index2 = property_get(a_first_f, "index");
  let ast = property_get(a, "ast");
  await js_functionize(ast, f_name_new, body, index, index2);
}
