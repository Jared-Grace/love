import { arguments_assert } from "./arguments_assert.mjs";
import { g_arc_answer_field_names } from "./g_arc_answer_field_names.mjs";
import { property_set } from "./property_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_prefix_without } from "./text_prefix_without.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
export function g_arc_review_line_apply_person(arc, line) {
  "A line of a review page saying one of the things the page says about the person - what they do, what their trouble is, how they are summed up - put onto the arc, answering whether the line was one of those.";
  "THE FIELDS ARE ASKED FOR RATHER THAN WRITTEN OUT, so a field added to what a person is answers here without anybody remembering to come back. The mark of such a line is the field's own name and a colon, which is the same rule the page is laid out by.";
  "IT IS THE FIRST THING TRIED and it is a loop, which is why it is here rather than in the line of the reader that calls it: a loop that can return out of the middle of itself is the one shape a straight run of marks cannot hold without becoming two readings.";
  arguments_assert(arguments, 2);
  let names = g_arc_answer_field_names("person");
  for (let name of names) {
    let prefix = text_combine_multiple([name, ": "]);
    let starts = text_starts_with(line, prefix);
    if (starts) {
      let value = text_prefix_without(line, prefix);
      property_set(arc, name, value);
      return true;
    }
  }
  return false;
}
