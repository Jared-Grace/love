import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function html_clear_context(context) {
  let root = property_get(context, "root");
  html_clear(root);
  return root;
}
