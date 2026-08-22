import { property_equals } from "./property_equals.mjs";
import { g_arc_answer_field_names } from "./g_arc_answer_field_names.mjs";
import { list_includes } from "./list_includes.mjs";
import { assert_json } from "./assert_json.mjs";
import { g_arc_turns_numbered } from "./g_arc_turns_numbered.mjs";
import { property_get } from "./property_get.mjs";
import { equal } from "./equal.mjs";
export function g_arc_line_write(arc, number, field, text) {
  "$plain field";
  "$plain text";
  "Put fresh writing at one addressed line of an arc - a person's own field at turn zero, or a turn's own writing, or the catch-up standing above the turn that number belongs to.";
  "IT IS THE OTHER HALF OF THE LISTER, and the two have to be read together or they come apart. One walks the arc handing out addresses and the other takes an address back; if either learns a new place writing can live and the other does not, a note is filed against a line that can never be written, and nothing goes red because both halves work perfectly on their own.";
  "IT REFUSES AN ADDRESS IT CANNOT REACH rather than writing nothing quietly. A key that names no line is what a reviser inventing a turn looks like, and also what a stale note looks like after a turn count moved - both need a person, and neither survives being dropped on the floor.";
  "IT CHANGES THE ARC IT WAS GIVEN. A copy would leave the caller holding the old one with no sign of it, and the caller is about to hand what it holds to the store.";
  let person_field = equal(number, 0);
  if (person_field) {
    let list = g_arc_answer_field_names("person");
    let known = list_includes(list, field);
    assert_json(known, {
      field,
      hint: "turn zero is a person's own field and this is not one of them",
    });
    arc[field] = text;
    return true;
  }
  let numbered = g_arc_turns_numbered(arc);
  for (let entry of numbered) {
    let same = property_equals(entry, "number", number);
    if (same) {
      let catch_up_field = equal(field, "catch_up");
      if (catch_up_field) {
        let conversation = property_get(entry, "conversation");
        conversation[field] = text;
        return true;
      }
      let turn = property_get(entry, "turn");
      turn[field] = text;
      return true;
    }
  }
  assert_json(false, {
    number,
    field,
    hint: "no turn of the arc carries that number",
  });
  return false;
}
