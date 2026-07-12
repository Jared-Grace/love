import { js_statement_if_consequent_get } from "./js_statement_if_consequent_get.mjs";
import { js_statement_if_test_get } from "./js_statement_if_test_get.mjs";
import { app_a_statement_choices_add } from "./app_a_statement_choices_add.mjs";
import { app_a_overlay_choices } from "./app_a_overlay_choices.mjs";
import { js_keyword_else } from "./js_keyword_else.mjs";
import { null_not_is } from "./null_not_is.mjs";
import { html_span_space } from "./html_span_space.mjs";
import { app_a_parenthesis_wrap } from "./app_a_parenthesis_wrap.mjs";
import { app_a_function_node_child } from "./app_a_function_node_child.mjs";
import { property_get } from "./property_get.mjs";
import { app_a_keyword_purple_space } from "./app_a_keyword_purple_space.mjs";
import { js_keyword_if } from "./js_keyword_if.mjs";
export function app_a_if_statement(a) {
  let node = property_get(a, "node");
  let parent = property_get(a, "parent");
  let k = js_keyword_if();
  let v = app_a_keyword_purple_space(parent, k);
  let keyword = property_get(v, "keyword");
  async function lambda(o, choices) {
    app_a_statement_choices_add(choices, a, o);
  }
  app_a_overlay_choices(a, keyword, lambda);
  function lambda19() {
    let test = js_statement_if_test_get(node);
    app_a_function_node_child(a, test);
  }
  app_a_parenthesis_wrap(parent, lambda19);
  html_span_space(parent);
  let consequent = js_statement_if_consequent_get(node);
  app_a_function_node_child(a, consequent);
  let alternate = property_get(node, "alternate");
  let nn = null_not_is(alternate);
  if (nn) {
    html_span_space(parent);
    let kw = js_keyword_else();
    app_a_keyword_purple_space(parent, kw);
    app_a_function_node_child(a, alternate);
  }
}
