import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_assign } from "./html_style_assign.mjs";
export function html_style_order_last(component) {
  "Puts one child at the end of the box it sits in, whatever order it was added in, as long as that box lays its children out in a row or a column.";
  "IT IS FOR THE THING THAT IS ADDED FIRST AND BELONGS LAST. A page that draws itself in stages has to put some parts down before it knows what the rest of them are, and the foot of a page is the clearest case: it is offered on every path through the screen, including the short paths that stop before anything is read, so it is put down before any of them is chosen. Added at the end instead, it would be missing from most of them.";
  "EVERY OTHER CHILD KEEPS THE PLACE IT WAS ADDED IN. A box like this gives all its children the same standing by default, and this hands one child a later standing than that - so nothing above it moves, and their order among themselves is untouched.";
  "A BOX THAT DOES NOT LAY ITS CHILDREN OUT THIS WAY IGNORES IT, and that is the safe way round: on such a page the thing was already added in the place it belongs, and this asks for nothing that would move it.";
  arguments_assert(arguments, 1);
  html_style_assign(component, {
    order: "1",
  });
}
