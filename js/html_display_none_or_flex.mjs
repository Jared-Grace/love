import { arguments_assert } from "./arguments_assert.mjs";
import { html_display_none } from "./html_display_none.mjs";
import { html_display_flex } from "./html_display_flex.mjs";
export function html_display_none_or_flex(hidden, item) {
  "$plain hidden";
  "Take this component off the page or put it back, where putting it back means laying its children out in a row or column rather than stacking them.";
  "A HIDDEN COMPONENT FORGETS HOW IT WAS LAID OUT, because there is one setting for both questions: the same word says whether a thing is on the page and how its children are arranged, so hiding it overwrites the arrangement. Showing it again has to say the arrangement over, and the block-shaped twin of this would silently flatten a row into a stack.";
  arguments_assert(arguments, 2);
  if (hidden) {
    html_display_none(item);
  } else {
    html_display_flex(item);
  }
}
