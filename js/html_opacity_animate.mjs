import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_transition_set } from "./html_transition_set.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
import { sleep } from "./sleep.mjs";
export async function html_opacity_animate(component, opacity, duration) {
  arguments_assert(arguments, 3);
  ("a component fades to an opacity over duration milliseconds, and this returns once it has; opacity is the style's own word, 0 for gone and 1 for fully there");
  ("The reflow before the change is what makes it fade at all: a component drawn and changed in one go is measured once, and the browser draws the end with no fade between, as ",
    fn_name("html_reflow_opacity_full"),
    " says.");
  ("Not picked: changing ",
    fn_name("html_reflow_opacity_full"),
    ", which fades in only and leaves the duration to a transition its callers write themselves; it is left as it is for them.");
  let timing = text_combine_multiple(["opacity ", duration, "ms"]);
  html_transition_set(component, timing);
  html_reflow_force(component);
  html_style_opacity(component, opacity);
  await sleep(duration);
}
