import { js_functionize } from "../../../love/public/src/js_functionize.mjs";
import { js_block_find } from "../../../love/public/src/js_block_find.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { list_map } from "../../../love/public/src/list_map.mjs";
import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export async function app_a_functionize(a) {
  let context = object_property_get(a, "context");
  let a_first = storage_local_get_context(context, app_a_functionize.name);
  function lambda(ai) {
    let node = object_property_get(ai, "node");
    let ast = object_property_get(ai, "ast");
    let v_match = js_visit_match(ast, node);
    let stack = object_property_get(v_match, "stack");
    let f = js_block_find(stack);
    let index = object_property_get(f, "index");
    return index;
  }
  let mapped = list_map([a, a_first], lambda);
  await js_functionize(ast2, f_name_new, stack2, index_from, index_to);
}
