import { html_ol } from "./html_ol.mjs";
import { html_li } from "./html_li.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
import { app_code_prose_code_parts } from "./app_code_prose_code_parts.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_prose_code_list(parent, lines) {
  "a lettered list of explanation lines - each line is itself a parts-list (the same [kind, text] shape a single line takes), rendered as one lettered item (a, b, c). For a small fixed set of cases where the enumeration itself carries meaning, such as the three cases of a trichotomy. Letters, not numbers, so the marker never reads as one of the numbers being compared. Its own top and bottom margin are cleared so the surrounding flex gap alone spaces it from its neighbours.";
  let ol = html_ol(parent);
  html_style_assign(ol, {
    "margin-top": "0",
    "margin-bottom": "0",
    "list-style-type": "lower-alpha",
  });
  function line_render(parts) {
    "one lettered item built from its parts";
    let li = html_li(ol);
    let rendered = app_code_prose_code_parts(li, parts);
    return rendered;
  }
  list_map(lines, line_render);
  return ol;
}
