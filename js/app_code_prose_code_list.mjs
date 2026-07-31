import { html_ol } from "./html_ol.mjs";
import { html_li } from "./html_li.mjs";
import { app_code_prose_code_parts } from "./app_code_prose_code_parts.mjs";
import { list_map } from "./list_map.mjs";
export function app_code_prose_code_list(parent, lines) {
  "a numbered list of explanation lines - each line is itself a parts-list (the same [kind, text] shape a single line takes), rendered as one numbered item. For a small fixed set of cases where the numbering itself carries meaning, such as the three cases of a trichotomy.";
  let ol = html_ol(parent);
  function line_render(parts) {
    "one numbered item built from its parts";
    let li = html_li(ol);
    let rendered = app_code_prose_code_parts(li, parts);
    return rendered;
  }
  list_map(lines, line_render);
  return ol;
}
