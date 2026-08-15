import { arguments_assert } from "./arguments_assert.mjs";
import { html_style_set } from "./html_style_set.mjs";
export function html_style_overflow_clear(component) {
  arguments_assert(arguments, 1);
  ("stop saying anything about what overflows a thing, so it goes back to whatever it would have done on its own");
  ("The other half of hiding it. Hiding what overflows also stops a child's margin reaching outside the thing, so a box that had one is a different size hidden than it is unhidden - which means the hiding has to be undone as deliberately as it was done, and not simply left on.");
  html_style_set(component, "overflow", "");
}
