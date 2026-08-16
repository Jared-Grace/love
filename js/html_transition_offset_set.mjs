import { arguments_assert } from "./arguments_assert.mjs";
import { html_transition_set } from "./html_transition_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_transition_offset_set(component, duration) {
  arguments_assert(arguments, 2);
  ("from here on, let any move of this piece away from its place take the given while rather than happening at once");
  let value = text_combine_multiple([
    "left ",
    duration,
    "ms, top ",
    duration,
    "ms",
  ]);
  html_transition_set(component, value);
}
