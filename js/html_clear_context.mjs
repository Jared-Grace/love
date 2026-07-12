import { html_clear } from "./html_clear.mjs";
import { property_get } from "./property_get.mjs";
export function html_clear_context(context) {
  let root = property_get(context, "root");
  html_clear(root);
  return root;
}
