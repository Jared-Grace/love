import { list_find } from "../../../love/public/src/list_find.mjs";
import { js_visit_match } from "../../../love/public/src/js_visit_match.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { app_a_overlay_choices } from "../../../love/public/src/app_a_overlay_choices.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
import { js_keyword_else } from "../../../love/public/src/js_keyword_else.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { app_a_parenthesis_wrap } from "../../../love/public/src/app_a_parenthesis_wrap.mjs";
import { app_a_function_node_child } from "../../../love/public/src/app_a_function_node_child.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { app_a_keyword_purple_space } from "../../../love/public/src/app_a_keyword_purple_space.mjs";
import { js_keyword_if } from "../../../love/public/src/js_keyword_if.mjs";
export function app_a_if_statement(a, node, parent) {
  marker("1");
  let k = js_keyword_if();
  let v4 = app_a_keyword_purple_space(parent, k);
  let keyword = object_property_get(v4, "keyword");
  async function lambda(o) {
    let choices = [
      {
        shortcut: "a",
        text: "Add above",
        fn: function lambda2() {
          let ast = object_property_get(a, "ast");
          let v_match = js_visit_match(ast, node);
          let stack = object_property_get(v_match, "stack");
          function lambda3(item) {}
          let found = list_find(list, lambda3);
          log({
            stack,
          });
        },
      },
    ];
    return choices;
  }
  app_a_overlay_choices(a, keyword, lambda);
  function lambda19() {
    let test = object_property_get(node, "test");
    app_a_function_node_child(a, test);
  }
  app_a_parenthesis_wrap(parent, lambda19);
  html_span_space(parent);
  let consequent = object_property_get(node, "consequent");
  app_a_function_node_child(a, consequent);
  let alternate = object_property_get(node, "alternate");
  let nn = null_not_is(alternate);
  if (nn) {
    html_span_space(parent);
    let kw = js_keyword_else();
    app_a_keyword_purple_space(parent, kw);
    app_a_function_node_child(a, alternate);
  }
}
