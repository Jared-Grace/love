import { arguments_assert } from "./arguments_assert.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_equals_try } from "./property_equals_try.mjs";
import { property_get } from "./property_get.mjs";
import { js_object_pattern_plain_names_or_null } from "./js_object_pattern_plain_names_or_null.mjs";
export function js_statement_pattern_names_or_null(statement) {
  arguments_assert(arguments, 1);
  ("The words one line writes, when that line is a record being taken apart straight into words that already stand for something, and nothing at all when the line is anything else.");
  ("IT IS ASKED OF EVERY LINE IN A FUNCTION AND ALMOST NONE OF THEM ARE THIS SHAPE, so it answers with nothing rather than throwing. A line that is not this shape is not a fault in the function; it is simply most lines.");
  ("THE THREE THINGS IT CHECKS ARE THE THREE THAT MAKE THE REWRITING SAY THE SAME THING. The line has to be a writing rather than a reading, so that there is a right-hand side to name; it has to write plainly rather than add to what was there, so that the record handed over is the whole of what lands; and its left-hand side has to be a record taken apart rather than a single word, because a single word is already written on a line of its own.");
  let names = null;
  let expression = property_get_or_null(statement, "expression");
  let assignment_is = property_equals_try(
    expression,
    "type",
    "AssignmentExpression",
  );
  if (assignment_is) {
    let plain_is = property_equals_try(expression, "operator", "=");
    if (plain_is) {
      let left = property_get(expression, "left");
      let pattern_is = property_equals_try(left, "type", "ObjectPattern");
      if (pattern_is) {
        let properties = property_get(left, "properties");
        names = js_object_pattern_plain_names_or_null(properties);
      }
    }
  }
  return names;
}
