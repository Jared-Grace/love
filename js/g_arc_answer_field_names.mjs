import { g_arc_answer_fields } from "./g_arc_answer_fields.mjs";
import { property_list_map_property } from "./property_list_map_property.mjs";
export function g_arc_answer_field_names(group) {
  "What one level of a written arc calls its fields - the names alone, for a caller that has to walk them rather than describe them.";
  "TAKEN FROM THE ONE SOURCE the prompt and its answer example are built from, so a field renamed there is renamed for every reader of an arc at once. Spelled again here, the reading of an arc would keep looking for a field the writing of it had stopped asking for, and nothing would go red - the field would simply come back empty.";
  let fields = g_arc_answer_fields();
  let names = property_list_map_property(fields, group, "name");
  return names;
}
