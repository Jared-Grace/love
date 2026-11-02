import { property_get } from "./property_get.mjs";
import { list_first_property } from "./list_first_property.mjs";
import { list_any } from "./list_any.mjs";
export function app_code_lesson_kind_has(lesson, kind_is) {
  "whether any of a lesson's quiz kinds is one kind_is accepts";
  let batch = property_get(lesson, "batch");
  let items = batch();
  let kinds = list_first_property(items, "exercises");
  let r = list_any(kinds, kind_is);
  return r;
}
