import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_insert } from "./html_insert.mjs";
export function html_div_first(parent) {
  arguments_assert(arguments, 1);
  ("a new div made the FIRST thing inside its parent rather than the last");
  ("For the case where a piece of page has to stand above things that are already there - the parent was filled by somebody else, so there is no earlier moment to have made it in.");
  let div = html_div(parent);
  html_insert(parent, div, 0);
  return div;
}
