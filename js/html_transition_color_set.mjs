import { arguments_assert } from "./arguments_assert.mjs";
import { html_transition_set } from "./html_transition_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_transition_color_set(component, duration) {
  arguments_assert(arguments, 2);
  ("from here on, let any change to how this piece is coloured take the given while rather than happening at once - its fill, its lettering and its edge together");
  ("All three named, because they are one colouring to the eye: a fill that fades while the edge around it goes at once is read as two things happening to one piece rather than as the piece changing.");
  let value = text_combine_multiple([
    "background-color ",
    duration,
    "ms, color ",
    duration,
    "ms, box-shadow ",
    duration,
    "ms",
  ]);
  html_transition_set(component, value);
}
