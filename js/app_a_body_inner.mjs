import { app_a_body_inner_lambda3 } from "./app_a_body_inner_lambda3.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
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
import { html_div } from "./html_div.mjs";
import { equal } from "./equal.mjs";
import { property_get } from "./property_get.mjs";
import { list_first_is } from "./list_first_is.mjs";
export function app_a_body_inner(parent, body, a, indent) {
  "Draws the statements of one function's body as lines down the page, with the run of import lines at the top folded away behind a button.";
  "Nearly every file here opens with more import lines than code, because the canonicalizing pass writes one for every name used, so they start closed. There is a button above them and a second one at their foot saying the same thing, so whichever end of them you arrived at you can shut them from there.";
  "An indented line is built as a row of two: a leading space that never shrinks, and beside it a span that wraps. A long line wrapping inside that span comes back round under its own first word rather than under the margin, which is the difference between reading a nested call and hunting for where it began.";
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
          function lambda3(b2) {
            let r = app_a_body_inner_lambda3(b2, hidden);
            return r;
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
