import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_lesson_prose_box_declaration_is } from "./app_code_lesson_prose_box_declaration_is.mjs";
export function app_code_lesson_prose_drawer_name_after(body, place) {
  arguments_assert(arguments, 2);
  ("The name of the next thing a lesson screen actually draws after the line at this place, or nothing when the next thing is not a drawing at all.");
  ("Two kinds of line are stepped over on the way. A paragraph written for whoever reads the code is not on the screen at all. A line working a value out is not on the screen either - it is what the drawing underneath will be given - so the drawing is still the next thing shown even with several of them in between.");
  ("Opening a new box is where the walk stops and hands back nothing, because the box above has ended and what is drawn after belongs under different writing. The end of the run of lines stops it the same way, and so does a line that is neither a drawing nor anything stepped over.");
  let count = body.length;
  let next = place + 1;
  while (less_than(next, count)) {
    let node = body[next];
    let expression = node.expression;
    let said = false;
    if (expression) {
      said = equal(expression.type, "Literal");
    }
    if (said) {
      next = next + 1;
      continue;
    }
    let declaring = equal(node.type, "VariableDeclaration");
    if (declaring) {
      let opens = app_code_lesson_prose_box_declaration_is(node);
      if (opens) {
        return null;
      }
      next = next + 1;
      continue;
    }
    if (not(expression)) {
      return null;
    }
    let calling = equal(expression.type, "CallExpression");
    if (not(calling)) {
      return null;
    }
    let callee = expression.callee;
    let plain = equal(callee.type, "Identifier");
    if (not(plain)) {
      return null;
    }
    let r = callee.name;
    return r;
  }
  return null;
}
