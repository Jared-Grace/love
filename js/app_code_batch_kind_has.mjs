import { list_first_property } from "./list_first_property.mjs";
import { list_any } from "./list_any.mjs";
export function app_code_batch_kind_has(items, kind_is) {
  "whether any quiz kind of a lesson's batch is one kind_is accepts";
  let kinds = list_first_property(items, "exercises");
  let r = list_any(kinds, kind_is);
  return r;
}
