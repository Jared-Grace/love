import { html_clear } from "../../../love/public/src/html_clear.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function html_clear_context(context) {
  let root = object_property_get(context, "root");
  html_clear(root);
  return root;
}
