import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_is } from "./text_is.mjs";
export function app_code_lesson_prose_tail_text_node_or_null(node) {
  arguments_assert(arguments, 1);
  ("The written-out piece of text a line of lesson writing ends on, handed back as the piece itself so it can be changed, or nothing when the line ends on something else.");
  ("A line of writing is given as a run of pieces taking it in turns - some written text, some a chip of code - so the piece at the end is the only one anything could be added to. When the end is a chip of code the line finishes in code and there is nowhere for punctuation to go. That is an ordinary shape rather than a fault, which is why nothing comes back instead of a refusal.");
  let expression = node.expression;
  let given = expression.arguments;
  let last_given = given[subtract(given.length, 1)];
  let listed = equal(last_given.type, "ArrayExpression");
  if (not(listed)) {
    return null;
  }
  let parts = last_given.elements;
  let tail = parts[subtract(parts.length, 1)];
  if (not(tail)) {
    return null;
  }
  let written = equal(tail.type, "Literal");
  if (not(written)) {
    return null;
  }
  let wording = text_is(tail.value);
  if (not(wording)) {
    return null;
  }
  return tail;
}
