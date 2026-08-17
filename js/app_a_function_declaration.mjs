import { app_a_function_declaration_choices_get } from "./app_a_function_declaration_choices_get.mjs";
import { list_size } from "./list_size.mjs";
import { app_a_paste } from "./app_a_paste.mjs";
import { app_a_overlay_choices } from "./app_a_overlay_choices.mjs";
import { each } from "./each.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { app_a_nodes_list } from "./app_a_nodes_list.mjs";
import { app_a_parenthesis_wrap } from "./app_a_parenthesis_wrap.mjs";
import { app_a_function_node_child } from "./app_a_function_node_child.mjs";
import { js_keyword_async } from "./js_keyword_async.mjs";
import { app_a_keyword_blue_space } from "./app_a_keyword_blue_space.mjs";
import { js_keyword_function } from "./js_keyword_function.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { property_get } from "./property_get.mjs";
export function app_a_function_declaration(a) {
  let node = property_get(a, "node");
  let parent = property_get(a, "parent");
  let generator = property_get(node, "generator");
  false_is_assert_json(generator, {
    hint: "generator functions aren't rendered here yet — was a function* declaration encountered?",
  });
  let async = property_get(node, "async");
  if (async) {
    let ka = js_keyword_async();
    app_a_keyword_blue_space(parent, ka);
  }
  let kf = js_keyword_function();
  let k = app_a_keyword_blue_space(parent, kf);
  let keyword = property_get(k, "keyword");
  function choices_get(o, choices) {
    let r2 = app_a_function_declaration_choices_get(o, choices, a, node);
    return r2;
  }
  app_a_overlay_choices(a, keyword, choices_get);
  let id = property_get(node, "id");
  app_a_function_node_child(a, id);
  app_a_parenthesis_wrap(parent, inner);
  function inner() {
    let params = property_get(node, "params");
    app_a_nodes_list(a, params, parent);
  }
  let body = property_get(node, "body");
  html_span_space(parent);
  let r = app_a_function_node_child(a, body);
  let left = property_get(r, "left");
  let right = property_get(r, "right");
  function lambda(lr) {
    function lambda2(o) {
      let choices = [];
      let body_list = property_get(body, "body");
      let size = list_size(body_list);
      app_a_paste(choices, a, o, body_list, size, "");
      return choices;
    }
    app_a_overlay_choices(a, lr, lambda2);
  }
  each([left, right], lambda);
}
