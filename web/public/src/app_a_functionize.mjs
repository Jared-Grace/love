import { storage_local_get_context } from "../../../love/public/src/storage_local_get_context.mjs";
import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
export function app_a_functionize(a) {
  let context = object_property_get(a, "context");
  let a_first = storage_local_get_context(context, app_a_functionize.name);
  let node = object_property_get(a, "node");
  let node2 = object_property_get(a_first, "node");
}
