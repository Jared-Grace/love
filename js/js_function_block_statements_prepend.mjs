import { list_concat_property } from "./list_concat_property.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { property_set } from "./property_set.mjs";
export function js_function_block_statements_prepend(declaration, block) {
  arguments_assert(arguments, 2);
  ("Put every line of one block of code in front of the lines a function already holds, leaving the function's own lines standing after them in the order they were written.");
  ("A move that builds the function it is going to leave behind out of written-out words, and then has to fold a whole body it was handed in ahead of them. Swapping the block in wholesale would throw those words away, and adding the words afterwards one at a time is the same work spelled out at every call.");
  let opening = property_get(block, "body");
  let own = property_get(declaration, "body");
  let all = list_concat_property(opening, own, "body");
  property_set(own, "body", all);
}
