import { js_functionize } from "../../../love/public/src/js_functionize.mjs";
import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_a_functionize(a, f_name_new) {
  let context = object_property_get(a, "context");
  let a_first = object_property_get(context, app_a_functionize.name);
  function lambda(ai) {
    let node = object_property_get(ai, "node");
    let ast = object_property_get(ai, "ast");
    let v_match = js_visit_match(ast, node);
    let stack = object_property_get(v_match, "stack");
    let f = js_block_find(stack);
    return f;
  }
  let a_f = lambda(a);
  let index = object_property_get(a_f, "index");
  let body = object_property_get(a_f, "body");
  let a_first_f = lambda(a_first);
  let index2 = object_property_get(a_first_f, "index");
  let ast = object_property_get(a, "ast");
  await js_functionize(ast, f_name_new, body, index, index2);
}
