import { global_function_property_exists } from "../../../love/public/src/global_function_property_exists.mjs";
import { global_function_property_set } from "../../../love/public/src/global_function_property_set.mjs";
import { app_a_functionize } from "../../../love/public/src/app_a_functionize.mjs";
import { list_add } from "../../../love/public/src/list_add.mjs";
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
    let ne = global_function_property_exists(context, app_a_functionize.name);
    if (ne) {
      list_add(choices, {
        shortcut: "f",
        text: "Functionize start",
        fn: async function lambda() {
          let context = object_property_get(a, "context");
          global_function_property_set(context, app_a_functionize.name, a);
          let overlay_close = object_property_get(o, "overlay_close");
          overlay_close();
        },
      });
    }
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
