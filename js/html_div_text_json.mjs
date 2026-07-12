import { html_div_text } from "./html_div_text.mjs";
import { json_to } from "./json_to.mjs";
export function html_div_text_json(root, h) {
  let json = json_to(h);
  let div = html_div_text(root, json);
}
