import { list_size } from "./list_size.mjs";
import { list_replace_multiple } from "./list_replace_multiple.mjs";
import { app_a_function_on_change } from "./app_a_function_on_change.mjs";
import { js_node_type_is_if } from "./js_node_type_is_if.mjs";
import { list_get_end_2 } from "./list_get_end_2.mjs";
import { list_get_end_1 } from "./list_get_end_1.mjs";
import { js_node_to_visitor } from "./js_node_to_visitor.mjs";
import { js_function_declaration_to_block_body } from "./js_function_declaration_to_block_body.mjs";
import { list_add } from "./list_add.mjs";
import { app_a_functionize_choices_add } from "./app_a_functionize_choices_add.mjs";
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
    app_a_functionize_choices_add(choices, a, o);
    let ast = property_get(a, "ast");
    let v_match = js_node_to_visitor(ast, node);
    let stack = property_get(v_match, "stack");
    let e2 = list_get_end_2(stack);
    function lambda6() {
      list_add(choices, {
        shortcut: "l",
        text: "Flatten",
        fn: async function lambda4() {
          let e1 = list_get_end_1(stack);
          let body_block = js_function_declaration_to_block_body(node);
          list_replace_multiple(e1, node, body_block);
          await app_a_function_on_change(a, o);
        },
      });
    }
    js_node_type_is_if(e2, "BlockStatement", lambda6);
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
