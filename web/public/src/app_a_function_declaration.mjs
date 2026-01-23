import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { app_a_nodes_list } from "../../../love/public/src/app_a_nodes_list.mjs";
import { app_a_parenthesis_wrap } from "../../../love/public/src/app_a_parenthesis_wrap.mjs";
import { app_a_function_node_child } from "../../../love/public/src/app_a_function_node_child.mjs";
import { js_keyword_async } from "../../../love/public/src/js_keyword_async.mjs";
import { app_a_keyword_blue_space } from "../../../love/public/src/app_a_keyword_blue_space.mjs";
import { js_keyword_function } from "../../../love/public/src/js_keyword_function.mjs";
import { false_is_assert } from "../../../love/public/src/false_is_assert.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_function_declaration(node, parent, a) {
  let generator = object_property_get(node, "generator");
  false_is_assert(generator);
  let v = js_keyword_function();
  app_a_keyword_blue_space(parent, v);
  let async = object_property_get(node, "async");
  if (async) {
    let v2 = js_keyword_async();
    app_a_keyword_blue_space(parent, v2);
  }
  let id = object_property_get(node, "id");
  app_a_function_node_child(a, id);
  app_a_parenthesis_wrap(parent, inner);
  function inner() {
    let params = object_property_get(node, "params");
    app_a_nodes_list(a, params, parent);
  }
  let body2 = object_property_get(node, "body");
  html_span_space(parent);
  app_a_function_node_child(a, body2);
}
