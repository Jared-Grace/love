import { arguments_assert } from "./arguments_assert.mjs";
import { html_ol } from "./html_ol.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { html_li } from "./html_li.mjs";
import { app_learn_js_prose_code_parts } from "./app_learn_js_prose_code_parts.mjs";
import { list_map } from "./list_map.mjs";
export function app_learn_js_prose_code_list_generic(
  parent,
  lines,
  list_style_type,
) {
  arguments_assert(arguments, 3);
  ("a list of explanation lines, each line itself a parts-list of [kind, text], marked by the list style handed in (lower-alpha, decimal, ...). Its own top and bottom margin are cleared so the surrounding flex gap alone spaces it from its neighbours.");
  let ol = html_ol(parent);
  html_style_assign(ol, {
    "margin-top": "0",
    "margin-bottom": "0",
    "list-style-type": list_style_type,
  });
  function line_render(parts) {
    "one item built from its parts";
    let li = html_li(ol);
    let rendered = app_learn_js_prose_code_parts(li, parts);
    return rendered;
  }
  list_map(lines, line_render);
  return ol;
}
