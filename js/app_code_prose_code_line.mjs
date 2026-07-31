import { html_div } from "./html_div.mjs";
import { app_code_prose_code_parts } from "./app_code_prose_code_parts.mjs";
export function app_code_prose_code_line(parent, parts) {
  "one explanation line built from parts - each part is a two-item [kind, text] pair where kind 'code' renders a dark code token (a symbol or a short expression) and anything else renders plain prose. The shared building block for the comparison lessons' explanation lines.";
  let div = html_div(parent);
  app_code_prose_code_parts(div, parts);
  return div;
}
