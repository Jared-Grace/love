import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { html_transition_set } from "./html_transition_set.mjs";
import { html_reflow_force } from "./html_reflow_force.mjs";
import { html_style_opacity } from "./html_style_opacity.mjs";
export function html_opacity_transition(component, opacity, duration) {
  arguments_assert(arguments, 3);
  ("a component starts fading to an opacity over duration milliseconds, and this returns at once, so several can be started together and waited for once; opacity is the style's own word, 0 for gone and 1 for fully there");
  ("The reflow before the change is what makes it fade at all: a component drawn and changed in one go is measured once, and the browser draws the end with no fade between, as ",
    fn_name("html_reflow_opacity_full"),
    " says.");
  let timing = text_combine_multiple(["opacity ", duration, "ms"]);
  html_transition_set(component, timing);
  html_reflow_force(component);
  html_style_opacity(component, opacity);
}
