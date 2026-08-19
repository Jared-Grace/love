import { arguments_assert } from "./arguments_assert.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
export function html_reflow_opacity_full(component) {
  "Bring a component that was made see-through onto the screen, fading it in the way its own transition says.";
  "The reflow before the change is the whole of it. A component made and hidden and shown again in one go is only ever measured once by the browser, which sees a component that was always fully there and draws it with no fade at all. Forcing the measurement in between is what makes the two states two states, and the transition already written on the component then does the rest.";
  "Every fade-in here was the same two lines in that order, and the order is the part that is easy to get wrong: the two swapped over look identical in the source and simply never animate.";
  arguments_assert(arguments, 1);
  html_reflow_force(component);
  html_style_opacity(component, "1");
}
