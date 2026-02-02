import { list_is } from "../../../love/public/src/list_is.mjs";
import { list_copy_reverse } from "../../../love/public/src/list_copy_reverse.mjs";
import { list_remove } from "../../../love/public/src/list_remove.mjs";
import { list_index_of } from "../../../love/public/src/list_index_of.mjs";
import { js_node_type_is_if } from "../../../love/public/src/js_node_type_is_if.mjs";
import { list_get_end_2 } from "../../../love/public/src/list_get_end_2.mjs";
import { list_get_end_1 } from "../../../love/public/src/list_get_end_1.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { js_declaration_to_block_body } from "../../../love/public/src/js_declaration_to_block_body.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
import { app_a_functionize_choices_add } from "../../../love/public/src/app_a_functionize_choices_add.mjs";
import { app_a_paste } from "../../../love/public/src/app_a_paste.mjs";
import { app_a_overlay_choices } from "../../../love/public/src/app_a_overlay_choices.mjs";
import { each } from "../../../love/public/src/each.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { app_a_nodes_list } from "../../../love/public/src/app_a_nodes_list.mjs";
import { app_a_parenthesis_wrap } from "../../../love/public/src/app_a_parenthesis_wrap.mjs";
import { app_a_function_node_child } from "../../../love/public/src/app_a_function_node_child.mjs";
import { js_keyword_async } from "../../../love/public/src/js_keyword_async.mjs";
import { app_a_keyword_blue_space } from "../../../love/public/src/app_a_keyword_blue_space.mjs";
import { js_keyword_function } from "../../../love/public/src/js_keyword_function.mjs";
import { false_is_assert } from "../../../love/public/src/false_is_assert.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_function_declaration(a) {
  marker("1");
  let node = object_property_get(a, "node");
  let parent = object_property_get(a, "parent");
  let generator = object_property_get(node, "generator");
  false_is_assert(generator);
  let async = object_property_get(node, "async");
  if (async) {
    let ka = js_keyword_async();
    app_a_keyword_blue_space(parent, ka);
  }
  let kf = js_keyword_function();
  let k = app_a_keyword_blue_space(parent, kf);
  let keyword = object_property_get(k, "keyword");
  function lambda3(o) {
    let choices = [];
    app_a_functionize_choices_add(choices, a, o);
    let ast = object_property_get(a, "ast");
    let v_match = js_visit_match(ast, node);
    let stack = object_property_get(v_match, "stack");
    let e2 = list_get_end_2(stack);
    function lambda6() {
      list_add(choices, {
        shortcut: "l",
        text: "Flatten",
        fn: function lambda4() {
          let e1 = list_get_end_1(stack);
          let index = list_index_of(e1, node);
          list_remove(e1, node);
          let body_block = js_declaration_to_block_body(node);
          let copy = list_copy_reverse(body_block);
          function lambda5(item) {
            let l = list_is(value);
          }
          each(copy, lambda5);
          log({
            e1,
          });
        },
      });
    }
    js_node_type_is_if(e2, "BlockStatement", lambda6);
    return choices;
  }
  app_a_overlay_choices(a, keyword, lambda3);
  let id = object_property_get(node, "id");
  app_a_function_node_child(a, id);
  app_a_parenthesis_wrap(parent, inner);
  function inner() {
    let params = object_property_get(node, "params");
    app_a_nodes_list(a, params, parent);
  }
  let body = object_property_get(node, "body");
  html_span_space(parent);
  let r = app_a_function_node_child(a, body);
  let left = object_property_get(r, "left");
  let right = object_property_get(r, "right");
  function lambda(lr) {
    function lambda2(o) {
      let choices = [];
      let body_list = object_property_get(body, "body");
      app_a_paste(choices, a, o, body_list);
      return choices;
    }
    app_a_overlay_choices(a, lr, lambda2);
  }
  each([left, right], lambda);
}
