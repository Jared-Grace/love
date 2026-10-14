import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
import { html_opacity_transition } from "./html_opacity_transition.mjs";
import { sleep } from "./sleep.mjs";
export async function html_opacity_animate(component, opacity, duration) {
  arguments_assert(arguments, 3);
  ("a component fades to an opacity over duration milliseconds, and this returns once it has; opacity is the style's own word, 0 for gone and 1 for fully there");
  ("Not picked: changing ",
    fn_name("html_reflow_opacity_full"),
    ", which fades in only and leaves the duration to a transition its callers write themselves; it is left as it is for them.");
  html_opacity_transition(component, opacity, duration);
  await sleep(duration);
}
