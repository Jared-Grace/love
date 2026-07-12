import { html_display_flex } from "./html_display_flex.mjs";
import { ternary } from "./ternary.mjs";
import { html_span } from "./html_span.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_a_function_node_child_parent } from "./app_a_function_node_child_parent.mjs";
import { js_node_type_not_is } from "./js_node_type_not_is.mjs";
import { list_map } from "./list_map.mjs";
import { app_a_button_wide } from "./app_a_button_wide.mjs";
import { not } from "./not.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
import { each } from "./each.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { html_div } from "./html_div.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_is } from "./list_first_is.mjs";
export function app_a_body_inner(parent, body, a, indent) {
  let parent_new = parent;
  let imports = false;
  function lambda(b) {
    let t = "ImportDeclaration";
    let v = list_first_is(body, b);
    if (v) {
      let type = property_get(b, "type");
      if (equal(type, t)) {
        imports = true;
        parent_new = html_div(parent);
        let parent_new_saved = parent_new;
        let hidden = true;
        let buttons = null;
        function imports_refresh() {
          function lambda3(b) {
            let text = null;
            text = ternary(hidden, "Show", "Hide");
            text += " imports";
            html_text_set(b, text);
          }
          each(buttons, lambda3);
          html_display_none_or_block(hidden, parent_new_saved);
          hidden = not(hidden);
        }
        function lambda2(item) {
          let v2 = app_a_button_wide(item, "", imports_refresh);
          return v2;
        }
        buttons = list_map([parent, parent_new_saved], lambda2);
        imports_refresh();
      }
    }
    if (imports) {
      let ti = js_node_type_not_is(b, t);
      if (ti) {
        imports = false;
        parent_new = parent;
      }
    }
    let line = html_div(parent_new);
    if (indent) {
      html_display_flex(line);
      let s = html_span_text(line, " ");
      html_style_assign(s, {
        flex: "0 0 auto",
        "white-space": "pre",
      });
      let span = html_span(line);
      html_style_assign(span, {
        "white-space": "pre-wrap",
        "min-width": "0",
      });
      line = span;
    }
    app_a_function_node_child_parent(a, b, line);
  }
  each(body, lambda);
}
