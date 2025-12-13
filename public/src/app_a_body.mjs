import { app_a_body_inner } from "../../../love/public/src/app_a_body_inner.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_body(node, parent, a) {
  let body = object_property_get(node, "body");
  app_a_body_inner(parent, body, a);
}
