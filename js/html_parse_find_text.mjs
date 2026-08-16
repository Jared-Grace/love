import { html_parse_find } from "./html_parse_find.mjs";
import { html_parse_text } from "./html_parse_text.mjs";
export function html_parse_find_text(root, d, selector) {
  "The words inside the one element a selector names - the two-step every reader of a parsed page was writing out for itself.";
  let found = html_parse_find(root, selector);
  let text = html_parse_text(d, found);
  return text;
}
