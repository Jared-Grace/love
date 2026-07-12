import { app_a_body_inner } from "./app_a_body_inner.mjs";
import { property_get } from "./property_get.mjs";
export function app_a_body(node, parent, a, indent) {
  let body = property_get(node, "body");
  app_a_body_inner(parent, body, a, indent);
}
