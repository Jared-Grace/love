import { g_arc_answer_fields } from "./g_arc_answer_fields.mjs";
import { property_get } from "./property_get.mjs";
import { list_find_property_get } from "./list_find_property_get.mjs";
export function g_arc_answer_field_shape(group, name) {
  "$plain group";
  "$plain name";
  "What kind of thing one field of a written arc is - a fact, somebody's own words, a description, a verdict or an aside - read from the one place the fields are described.";
  "IT IS ASKED FOR BY NAME BECAUSE ITS CALLER ALREADY KNOWS THE NAME. A screen walking a level's fields carries each field object and reads the shape straight off it; a screen laying the fields out in an order of its own has spelled every name already, and asking here is how it gets the shape without spelling that too.";
  "A NAME NOTHING ANSWERS TO THROWS, and that is why the finding is not softened to a null. A missing shape drawn as a default would look exactly like a field that had never been shaped, so the one screen it broke is the one place the fault would be invisible.";
  let fields = g_arc_answer_fields();
  let group_fields = property_get(fields, group);
  let shape = list_find_property_get(group_fields, "name", name, "shape");
  return shape;
}
