import { app_a_statement_choices_add } from "../../../love/public/src/app_a_statement_choices_add.mjs";
import { app_a_overlay_choices } from "../../../love/public/src/app_a_overlay_choices.mjs";
import { js_keyword_else } from "../../../love/public/src/js_keyword_else.mjs";
import { null_not_is } from "../../../love/public/src/null_not_is.mjs";
import { html_span_space } from "../../../love/public/src/html_span_space.mjs";
import { app_a_parenthesis_wrap } from "../../../love/public/src/app_a_parenthesis_wrap.mjs";
import { app_a_function_node_child } from "../../../love/public/src/app_a_function_node_child.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
import { app_a_keyword_purple_space } from "../../../love/public/src/app_a_keyword_purple_space.mjs";
import { js_keyword_if } from "../../../love/public/src/js_keyword_if.mjs";
export function app_a_if_statement(a) {
  let node = property_get(a, "node");
  let parent = property_get(a, "parent");
  let k = js_keyword_if();
  let v4 = app_a_keyword_purple_space(parent, k);
  let keyword = property_get(v4, "keyword");
  async function lambda(o, choices) {
    app_a_statement_choices_add(choices, a, o);
  }
  app_a_overlay_choices(a, keyword, lambda);
  function lambda19() {
    let test = property_get(node, "test");
    app_a_function_node_child(a, test);
  }
  app_a_parenthesis_wrap(parent, lambda19);
  html_span_space(parent);
  let consequent = property_get(node, "consequent");
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
