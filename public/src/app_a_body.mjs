import { app_a_body_inner } from "../../../love/public/src/app_a_body_inner.mjs";
import { property_get } from "../../../love/public/src/property_get.mjs";
export function app_a_body(node, parent, a, indent) {
  let body = property_get(node, "body");
  app_a_body_inner(parent, body, a, indent);
}
