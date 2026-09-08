import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_includes } from "./text_includes.mjs";
export function app_code_lesson_prose_box_declaration_is(node) {
  arguments_assert(arguments, 1);
  ("Whether this line is the one that starts a fresh box on a lesson screen, rather than working something out to be drawn in the box already open.");
  ("It matters because a reading that walks down a lesson looking for what comes under a line of writing has to stop somewhere. Working out a value to draw is a line worth stepping over - nothing is shown by it - but opening a box ends the box above it, and whatever is drawn after that is under different writing. Stepping over it would answer a question about one box with something taken from the next.");
  let named = node.declarations;
  let first = named[0];
  let init = first.init;
  if (not(init)) {
    return false;
  }
  let calling = equal(init.type, "CallExpression");
  if (not(calling)) {
    return false;
  }
  let callee = init.callee;
  let plain = equal(callee.type, "Identifier");
  if (not(plain)) {
    return false;
  }
  let container = "container";
  let opens = text_includes(callee.name, container);
  return opens;
}
