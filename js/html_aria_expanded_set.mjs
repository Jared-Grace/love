import { arguments_assert } from "./arguments_assert.mjs";
import { text_to } from "./text_to.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function html_aria_expanded_set(component, expanded) {
  "$plain expanded";
  "Tell a screen reader whether the thing this control folds is open or shut.";
  "A CARET IS NOT AN ANSWER TO THIS. The little triangle says which way the card is to somebody looking at it, and says nothing at all to somebody being read to - so without this a reader is told there is a button, and never told that pressing it has just opened something or that it was already open. It has to be written again on every change, because it is a statement about right now rather than about the control.";
  arguments_assert(arguments, 2);
  let value = text_to(expanded);
  html_attribute_set(component, "aria-expanded", value);
}
