import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_answer_fields } from "./g_arc_answer_fields.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
export function g_arc_review_person_fields(arc) {
  arguments_assert(arguments, 1);
  let described = g_arc_answer_fields();
  let chosen_fields = property_get(described, "person");
  let fields = [];
  for (let one_field of chosen_fields) {
    let name = property_get(one_field, "name");
    let shape = property_get(one_field, "shape");
    let value = property_get(arc, name);
    list_add(fields, {
      name,
      value,
      shape,
    });
  }
  return fields;
}
