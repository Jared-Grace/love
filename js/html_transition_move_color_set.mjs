import { arguments_assert } from "./arguments_assert.mjs";
import { html_transition_set } from "./html_transition_set.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function html_transition_move_color_set(component, duration) {
  arguments_assert(arguments, 2);
  ("from here on, let both where this piece is shown and how it is coloured take the given while - the two of them named in one breath");
  ("One breath because a piece holds only one saying of what may be slowed, and a second saying replaces the first rather than joining it. Told to move slowly and then told to fade slowly, a piece moves slowly and changes colour between two frames - and nothing anywhere says the first telling was thrown away.");
  let value = text_combine_multiple([
    "transform ",
    duration,
    "ms, background-color ",
    duration,
    "ms, color ",
    duration,
    "ms, box-shadow ",
    duration,
    "ms",
  ]);
  html_transition_set(component, value);
}
